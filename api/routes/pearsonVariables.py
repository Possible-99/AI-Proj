from flask import Blueprint,request
import pandas as pd 


def fillNanWithMean(table):
    if(table.isnull().values.any()):
        for column in table:
            table[column].fillna((table[column].mean()), inplace=True)
        return table
    return table


app_pearsonVariables=Blueprint("app_pearsonVariables",__name__)
@app_pearsonVariables.route("/api/pearsonVariables",methods=['POST'])
def pearsonVariables():
    if request.method == 'POST':
        file = request.files['file']
        extension=file.filename.split(".")[1]
        if file:
            csvFile= pd.read_table(file) if extension=="txt" else pd.read_csv(file)
            dataTable=csvFile.select_dtypes(include=['float64','int64'])
            dataTableWithoutNan=fillNanWithMean(dataTable)
            numberRows=len(dataTableWithoutNan)
            numberColumns=len(dataTableWithoutNan.columns)
            if (numberRows>1 and numberColumns>1):
                #Obtenemos la correlacion de Pearson para seleccionar las variabless
                corrDataFrame=dataTableWithoutNan.corr(method="pearson")
                firstColumnIndex=corrDataFrame.columns[0]
                # Ordenamos las variables para escoger las mas adecuadas
                sortedColumn=corrDataFrame[firstColumnIndex].sort_values(ascending=False)[:10]
                corrSortedVariables=sortedColumn.to_dict()
                return {"variables":[corrSortedVariables]}
            return "Record not found", 400
        return {}