from flask import Blueprint, render_template, session,abort,request
from apyori import apriori
import pandas as pd 

#apriori funcitons

def generadorLista(data):
    lista=[]
    rows=len(data)
    columns=len(data.columns)
    for i in range(0,rows):
        lista.append([str(data.values[i,j])for j in range(0,columns)])
    return lista

def aprioriAlgo(lista,minSupport,minConfidence,minLift,minLength):
    rule=apriori(lista,min_support=minSupport, min_confidence=minConfidence,min_lift=minLift,min_length=minLength)
    results=list(rule)
    return results

def generadorObjetoRes(results):
    resultsObject={"rules":[]}
    for idx,item in enumerate(results):
        emparejar=item[0]
        items=[x for x in emparejar]
        resultsObject["rules"].append({"items":list(item[0]),"support":item[1],"confidence":item[2][0][2],"lift":item[2][0][3],"number":idx})
        
    return resultsObject


app_priori=Blueprint("app_priori",__name__)
@app_priori.route("/api/priori",methods=['POST'])
def priori():
    if request.method == 'POST':
        file = request.files['file']
        data=request.form.to_dict()
        if file:
            csvFile=pd.read_csv(file, header=None, error_bad_lines=False)
            # Hacemos una lista con la data
            lista=generadorLista(data=csvFile)
            #Obtenemos las reglas
            minSupport=float(data["support"])
            minConfidence=float(data["confidence"])
            minLift=float(data["lift"])
            minLength=float(data["minElements"])
            results=aprioriAlgo(lista,minSupport,minConfidence,minLift,minLength)
            #Le damos forma de objeto
            resultsObject=generadorObjetoRes(results)
            return resultsObject