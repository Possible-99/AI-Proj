from flask import Blueprint,request
import pandas as pd 
import numpy as np
import json
from kneed import KneeLocator
from sklearn.cluster import KMeans


def fillNanWithMean(table):
    if(table.isnull().values.any()):
        for column in table:
            table[column].fillna((table[column].mean()), inplace=True)
        return table
    return table

def obtainNClusters(matrix):
    SSE = []
    for i in range(2, 12):
        km = KMeans(n_clusters=i, random_state=0)
        km.fit(matrix)
        SSE.append(km.inertia_)
    kl = KneeLocator(range(2, 12), SSE, curve="convex", direction="decreasing")
    nClusters=kl.elbow
    return nClusters


app_clusteringP=Blueprint("app_clusteringP",__name__)
@app_clusteringP.route("/api/clusteringParticional",methods=['POST'])
def clusteringParticionalResultados():
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
            actualMatrix=dataTableWithoutNan.iloc[:, 0:numberColumns].values if variables=="all" else np.array(dataTableWithoutNan[variables]) 
            #Procedemos al algoritmo de clustering jerarquico
            MParticional =KMeans(n_clusters=obtainNClusters(actualMatrix), random_state=0).fit(actualMatrix) 
            MParticional.predict(actualMatrix)
            csvFile["clusterP"]=MParticional.labels_
            #Le damos forma a la data para enviarla al front end
            clustersQuantity=csvFile.groupby(['clusterP'])['clusterP'].count().to_dict()
            centroidesP=MParticional.cluster_centers_
            centroidesPDataFrame = pd.DataFrame(centroidesP.round(2), columns=list(dataTableWithoutNan)) if value=="all" else pd.DataFrame(centroidesP.round(4), columns=variables)
            centroidesPList=centroidesPDataFrame.to_dict("records")
            csvFile=csvFile.to_dict("records")
            # Lo pasamos como string para que no ordene automaticamente las llaves
            return {"clustersQuantity":clustersQuantity,"centroidesH":json.dumps(centroidesPList),"tablaGeneral":json.dumps(csvFile)}