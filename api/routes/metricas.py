from flask import Blueprint,request
import pandas as pd 
from scipy.spatial.distance import cdist


#Metricas de similitud

def fillNanWithMean(table):
    if(table.isnull().values.any()):
       newTable=table.fillna(table.mean()) 
       return newTable
    return table

def euclidianTableGenerator(dataTable):
    euclidian_data = cdist(dataTable,dataTable, metric ="euclidean")  
    #Hacemos la tabla
    final_euclidian_table=pd.DataFrame(euclidian_data)
    return final_euclidian_table

def minkokwskiTableGenerator(dataTable):
    minkowski_data=cdist(dataTable,dataTable, metric ="minkowski",p=1.5) 
    final_minkowski_table=pd.DataFrame(minkowski_data)
    return final_minkowski_table

def chebyshevTableGenerator(dataTable):
    chebyshev_data=cdist(dataTable,dataTable, metric ="chebyshev") 
    final_chebyshev_table=pd.DataFrame(chebyshev_data)
    return final_chebyshev_table

def manhattanTableGenerator(dataTable):
    manhattan_data=cdist(dataTable,dataTable, metric ="cityblock") 
    final_manhattan_table=pd.DataFrame(manhattan_data)
    return final_manhattan_table


app_metricas=Blueprint("app_metricas",__name__)
@app_metricas.route("/api/metricas",methods=['POST'])
def metricas():
     if request.method == 'POST':
        file = request.files['file']
        extension=file.filename.split(".")[1]
        if file:
            csvFile= pd.read_table(file) if extension=="txt" else pd.read_csv(file)
            tableFilledNa=fillNanWithMean(csvFile)
            dataTable=tableFilledNa.select_dtypes(include=['float64','int64'])
            numberRows=len(dataTable)
            numberColumns=len(dataTable.columns)
            if (numberRows>1 and numberColumns>1):
                #Los convertimos en objetos para enviarlos al frontend
                final_euclidian_array=euclidianTableGenerator(dataTable).to_dict('records')
                final_minkoswki_array=minkokwskiTableGenerator(dataTable).to_dict('records')
                final_chebyshev_array=chebyshevTableGenerator(dataTable).to_dict('records')
                final_manhattan_array=manhattanTableGenerator(dataTable).to_dict('records')
                distancesArray={"euclidian":final_euclidian_array,"minkowski":final_minkoswki_array,"chebyshev":final_chebyshev_array,"manhattan":final_manhattan_array, "numberColumns":len(final_minkoswki_array)}
                return distancesArray
            return "Record not found", 400
        return {}