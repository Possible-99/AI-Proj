from flask import Blueprint,request
import pandas as pd 
import json
import numpy as np
from sklearn.linear_model import LogisticRegression


def logistic_regression_from_json(jstring):
    data = json.loads(jstring)
    model = LogisticRegression(**data['init_params'])
    for name, p in data['model_params'].items():
        setattr(model, name, np.array(p))
    return model

def modelInputFix(variables):
    dic={}
    for key, value in variables.items():
        dic[key]=[float(value)]
    return pd.DataFrame(dic)

app_regresionLogisticaCheck=Blueprint("app_regresionLogisticaCheck",__name__)
@app_regresionLogisticaCheck.route("/api/regresion-logistica-check",methods=['POST'])
def regresionLogisticaCheck():
    if request.method == 'POST':
        #Obtenemos la data 
        data=request.json
        variables=data["variables"]
        jsonModel=data["jsonModel"]
        #convertimos el modelo
        model=logistic_regression_from_json(jsonModel)
        #Le damos forma a las variables para que podamos usarlas en el modelo
        case=modelInputFix(variables)
        result=model.predict(case)
        strResult="El resultado es positivo(1)" if(result[0]==1) else "El resultado es negativo(0)"
        return{"strResult":strResult,"numericResult":str(result[0])}