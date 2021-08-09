from flask import Blueprint,request
import pandas as pd 
import numpy as np
import json
from sklearn.cluster import AgglomerativeClustering 




def fillNanWithMean(table):
    if(table.isnull().values.any()):
       newTable=table.fillna(table.mean()) 
       return newTable
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
            csvFile= pd.read_table(file) if extension=="txt" else pd.read_csv(file)
            csvFileWithoutNan=fillNanWithMean(csvFile)
            dataTable=csvFileWithoutNan.select_dtypes(include=['float64','int64'])
            numberColumns=len(dataTable.columns)
            #Procedemos a seleccionar lo que necesitamos de la tabla.
            actualMatrix=dataTable.iloc[:, 0:numberColumns].values if variables=="all" else np.array(dataTable[variables]) 
            #Procedemos al algoritmo de clustering jerarquico
            MJerarquico = AgglomerativeClustering(n_clusters=5, linkage='complete', affinity='euclidean')
            MJerarquico.fit_predict(actualMatrix)
            csvFileWithoutNan["clusterH"]=MJerarquico.labels_
            #Le damos forma a la data para enviarla al front end
            clustersQuantity=csvFileWithoutNan.groupby(['clusterH'])['clusterH'].count().to_dict()
            centroidesH = csvFileWithoutNan.groupby(['clusterH']).mean().to_dict("records") if value=="all" else csvFileWithoutNan.groupby(['clusterH'])[variables].mean().to_dict("records")
            csvFileDict=csvFileWithoutNan.to_dict("records")
            # Lo pasamos como string para que no ordene automaticamente las llaves
            return {"clustersQuantity":clustersQuantity,"centroidesH":json.dumps(centroidesH),"tablaGeneral":json.dumps(csvFileDict)}
        return {} 