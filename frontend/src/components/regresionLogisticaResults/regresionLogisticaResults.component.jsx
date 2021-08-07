import React,{useState,useEffect} from 'react'
import { Divider, message,Typography } from 'antd'
import axios from "axios"
import RegresionLogisticaForm from '../regresionLogisticaForm/regresionLogisticaForm.component'

const RegresionLogisticaResults=({variablesSelected,corrVariables,setLoading,classVariable,otherRegressionVariables})=>{

    const [responseData,setResponseData]=useState({})

    const url="/api/regresion-logistica-model"
    const file=new FormData()
    const jsonVariables=JSON.stringify({variablesSelected:variablesSelected,classVariable:classVariable,otherRegressionVariables:otherRegressionVariables})
    file.append("file",corrVariables.file)
    file.append("regressionVariables",jsonVariables)


    useEffect(() => {
        axios.post(url,file,{headers: {'Content-Type': 'multipart/form-data'}}).then(response=>{
            console.log(response.data)
            setResponseData(response.data)
            setLoading(false)
        })
        .catch(error=>{
            message.error("Hubo un error! Ingresa paramatros validos o un archivo valido")
            console.log(error)
            setLoading(false)
        })
    }, [])

    const {Title,Text}=Typography

    return(
        <div>
            <Divider/>
            <Title level={3}>Modelo</Title>
            <Text >{responseData.model}</Text>
            <Title level={3}>Exactitud</Title>
            <Text >{responseData.exactitud}</Text>
            {
                responseData!=={} &&(
                    <>
                    <Divider/>
                    <Title level={3}>Prueba el modelo</Title>
                    <RegresionLogisticaForm variablesSelected={variablesSelected} jsonModel={responseData.jsonModel}/>
                    </>
                
                )
            }
        </div>
    )
}

export default RegresionLogisticaResults