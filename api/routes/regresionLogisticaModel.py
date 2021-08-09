from flask import Blueprint,request
import pandas as pd 
import json
import numpy as np
from sklearn import linear_model
from sklearn import model_selection




def fillNanWithMean(table):
    if(table.isnull().values.any()):
        for column in table:
            table[column].fillna((table[column].mean()), inplace=True)
        return table
    return table

def createStringModel(coeff,variables,intercept):

    modelStr=str(intercept[0]) + " + "

    for idx, val in enumerate(variables):
        modelStr+="    " + str(coeff[0][idx]) +" "+ variables[idx]

    return modelStr


def logistic_regression_to_json(lrmodel, file=None):
    if file is not None:
        serialize = lambda x: json.dump(x, file)
    else:
        serialize = json.dumps
    data = {}
    data['init_params'] = lrmodel.get_params()
    data['model_params'] = mp = {}
    for p in ('coef_', 'intercept_','classes_', 'n_iter_'):
        mp[p] = getattr(lrmodel, p).tolist()
    return serialize(data)



app_regresionLogisticaModel=Blueprint("app_regresionLogisticaModel",__name__)
@app_regresionLogisticaModel.route("/api/regresion-logistica-model",methods=['POST'])
def regresionLogistica():
    if request.method == 'POST':
        try:
            file = request.files["file"]
            extension=file.filename.split(".")[1]
            # Convertimos nuestro JSON a tipos de datos de python
            allVariables=json.loads(request.form["regressionVariables"])
            #Checamos si el usuario escogio las variables o prefirio usar todas
            if file:
                csvFile= pd.read_table(file) if extension=="txt" else pd.read_csv(file)
                fillNanTable=csvFile.fillna(csvFile.mean())
                dataTable=fillNanTable.select_dtypes(include=['float64','int64'])
                dataTableWithoutNan=dataTable
                numberColumns=len(dataTableWithoutNan.columns)
                numberRows=len(dataTable)
                if (numberRows>1 and numberColumns>1):
                    #Vemos si la variable clase ya es binaria.
                    tableWithBinaryClassVariable=csvFile.replace({allVariables["otherRegressionVariables"]["valueFor0"]:0, allVariables["otherRegressionVariables"]["valueFor1"]:1 }) if(allVariables["otherRegressionVariables"]["binary"]=="no") else csvFile
                    # Preparamos con los datos que se va a entrenar
                    X = np.array(dataTableWithoutNan[allVariables["variablesSelected"]])
                    Y = np.array(tableWithBinaryClassVariable[allVariables["classVariable"]])
                    #Algoritmo
                    classification=linear_model.LogisticRegression()
                    seed=1234
                    X_train, X_validation, Y_train, Y_validation = model_selection.train_test_split(X, Y, test_size=allVariables["otherRegressionVariables"]["trainingVariable"], random_state=seed, shuffle = True)
                    classification.fit(X_train, Y_train)
                    accuracy= classification.score(X_validation, Y_validation)
                    intercept=classification.intercept_
                    coeff=classification.coef_
                    modelStr=createStringModel(coeff,allVariables["variablesSelected"],intercept)
                    accuracy=classification.score(X_validation, Y_validation)
                    #Convertimos nuestro modelo a JSON 
                    jsonModel=logistic_regression_to_json(classification)

                    return{"model":modelStr,"exactitud":accuracy,"jsonModel":jsonModel}

        except print(0):
            return "Record not found", 400

    return "Record not found", 400