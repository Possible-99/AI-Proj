import React,{useState} from "react";
import "./regresionLogistica.styles.scss";
import MyLayout from "../../components/layout/layout.component";
import { Layout,Divider,message,Button,Radio} from "antd";
import ClusteringFirstPart from "../../components/clusteringFirstPart/clusteringFirstPart.component";
import RegresionLinealVariables from "../../components/regresionLinealVariables/regresionLinealVariables.component";
import RegresionLogisticaResults from "../../components/regresionLogisticaResults/regresionLogisticaResults.component";
import RegresionLogisticaForm from "../../components/regresionLogisticaForm/regresionLogisticaForm.component";
const { Content } = Layout;

const RegresionLogistica=()=>{
const [corrVariables,setCorrVariables]=useState(null)
const [variablesSelected, setVariablesSelected] = useState(null)
const [loading, setLoading] = useState(false)
const [headerVariables,setHeaderVariables]=useState(null)
const [classVariable,setClassVariable]=useState(null)
const [otherRegressionVariables,setOtherRegressionVariables]=useState({complete:false})
    
    return(
        <MyLayout menuKey="6" title="Regresión Logística">
            <Content style={{ margin: "5px 16px 0px 16px" }}>
                <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
                >
                <ClusteringFirstPart setCorrVariables={setCorrVariables} corrVariables={corrVariables} variablesSelected={variablesSelected} setVariablesSelected={setVariablesSelected} loading={loading}  setHeaderVariables={setHeaderVariables} displayFirstTable={true} allVariablesHidden="none"/>
                {
                    headerVariables!==null &&(
                        <RegresionLinealVariables setClassVariable={setClassVariable} headerVariables={headerVariables} loading={loading} setLoading={setLoading} setOtherRegressionVariables={setOtherRegressionVariables} otherRegressionVariables={otherRegressionVariables}/>
                    )
                }
                {
                    (otherRegressionVariables.complete===true) &&(
                        <>
                            <RegresionLogisticaResults variablesSelected={variablesSelected} corrVariables={corrVariables} setLoading={setLoading} classVariable={classVariable} otherRegressionVariables={otherRegressionVariables}/>
                        </>
                    )
                }
                </div>
            </Content>
        </MyLayout>
    )
}


export default RegresionLogistica