from flask import Blueprint,request
import pandas as pd 
import numpy as np
import json
from sklearn.cluster import AgglomerativeClustering 





def fillNanWithMean(table):
    if(table.isnull().values.any()):
        for column in table:
            table[column].fillna((table[column].mean()), inplace=True)
        return table
    return table



app_clusteringJ=Blueprint("app_clusteringJ",__name__)
@app_clusteringJ.route("/api/clusteringJerarquico",methods=['POST'])
def clusteringJerarquicoResultados():
       if request.method == 'POST':
        file = request.files["file"]
        extension=file.filename.split(".")[1]
        #Convertimos nuestro JSON a tipos de datos de python
        value=json.loads(request.form["variablesSelected"])
        #Checamos si el usuario escogio las variables o prefirio usar todas
        variables=value
        if file:
            csvFile= pd.read_table(file).fillna(0) if extension=="txt" else pd.read_csv(file).fillna(0)
            dataTable=csvFile.select_dtypes(include=['float64','int64'])
            dataTableWithoutNan=fillNanWithMean(dataTable)
            numberColumns=len(dataTableWithoutNan.columns)
            #Procedemos a seleccionar lo que necesitamos de la tabla.
            actualMatrix=dataTableWithoutNan.iloc[:, 0:numberColumns].values if variables=="all" else np.array(dataTable[variables]) 
            #Procedemos al algoritmo de clustering jerarquico
            MJerarquico = AgglomerativeClustering(n_clusters=5, linkage='complete', affinity='euclidean')
            MJerarquico.fit_predict(actualMatrix)
            csvFile["clusterH"]=MJerarquico.labels_
            #Le damos forma a la data para enviarla al front end
            clustersQuantity=csvFile.groupby(['clusterH'])['clusterH'].count().to_dict()
            centroidesH = csvFile.groupby(['clusterH']).mean().to_dict("records") if value=="all" else csvFile.groupby(['clusterH'])[variables].mean().to_dict("records")
            csvFile=csvFile.to_dict("records")
            # Lo pasamos como string para que no ordene automaticamente las llaves
            return {"clustersQuantity":clustersQuantity,"centroidesH":json.dumps(centroidesH),"tablaGeneral":json.dumps(csvFile)}
        return {} 