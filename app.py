from flask import Flask, request
import pandas as pd 
from api.routes.priori import app_priori
from api.routes.metricas import app_metricas
from api.routes.clusteringJerarquico import app_clusteringJ
from api.routes.pearsonVariables import app_pearsonVariables
from api.routes.clusteringParticional import app_clusteringP

app = Flask(__name__,static_folder="frontend/build",static_url_path="/")


#React frontend
@app.route("/")
@app.route('/priori')
@app.route('/metricas')
@app.route('/clustering-jerarquico')
@app.route('/clustering-particional')
def index():
    return app.send_static_file("index.html")

#Api Routes
app.register_blueprint(app_priori)
app.register_blueprint(app_metricas)
app.register_blueprint(app_pearsonVariables)
app.register_blueprint(app_clusteringJ)
app.register_blueprint(app_clusteringP)










