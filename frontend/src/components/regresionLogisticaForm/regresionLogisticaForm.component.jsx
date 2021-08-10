import React,{useState,useEffect} from 'react'
import { Form,Input,Button, message,Typography } from 'antd'
import RegresionLogisticaFormInput from '../regresionLogisticaFormInput/regresionLogisticaFormInput.compoenent';
import axios from 'axios';

const RegresionLogisticaForm=({variablesSelected,jsonModel})=>{

    const [result, setResult] = useState(null)

    const onFinish = (values) => {
        const url="/api/regresion-logistica-check"
        const data={variables:values,jsonModel:jsonModel}
        const jsonData=JSON.stringify(data)
        axios.post(url,jsonData,{headers:{'Content-Type': 'application/json'}})
        .then(response=>{
            setResult(response.data)
        })
        .catch(error=>{
            message.error("Error. Ingresa parametros validos")
        })
      };
    
      const onFinishFailed = (errorInfo) => {
        message.error("Rellena todos los campos")
      };
    
    const {Text}=Typography
    return(
        <>
            <Form
                layout="vertical"
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >
                    
                    <Form.Item>
                        {
                            variablesSelected.map((variable,key)=>(
                                <RegresionLogisticaFormInput label={variable} name={variable} key={key} />
                            ))
                        }
                        <Button type="primary" htmlType="submit">
                            Probar
                        </Button>
                    </Form.Item>
            </Form>
            {
                result !==null && (
                    result.numericResult==="1"?<Text style={{fontSize:"18px"}} type="success">{result.strResult}</Text>:<Text style={{fontSize:"18px"}} type="danger">{result.strResult}</Text>
                )
            }
        </>
    )
}


export default RegresionLogisticaForm