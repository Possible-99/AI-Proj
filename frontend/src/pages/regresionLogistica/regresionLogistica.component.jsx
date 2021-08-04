import React,{useState} from "react";
import "./regresionLogistica.styles.scss";
import MyLayout from "../../components/layout/layout.component";
import { Layout,Divider,message,Button} from "antd";
import FileDragger from "../../components/fileDragger/fileDragger.component"
import ClusteringFirstPart from "../../components/clusteringFirstPart/clusteringFirstPart.component";
const { Content } = Layout;

const RegresionLogistica=()=>{
const [corrVariables,setCorrVariables]=useState(null)
  const [variablesSelected, setVariablesSelected] = useState(null)
  const [loading, setLoading] = useState(false)
    
    return(
        <MyLayout menuKey="6" title="Regresión Logística">
            <Content style={{ margin: "5px 16px 0px 16px" }}>
                <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
                >
                <ClusteringFirstPart setCorrVariables={setCorrVariables} corrVariables={corrVariables} variablesSelected={variablesSelected} setVariablesSelected={setVariablesSelected} loading={loading} setLoading={setLoading}/>
                </div>
            </Content>
        </MyLayout>
    )
}


export default RegresionLogistica