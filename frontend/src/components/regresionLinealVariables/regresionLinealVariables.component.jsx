import React,{useState} from 'react'
import { Radio, Input, Divider,Button,InputNumber} from "antd";
import SelectClassVariable from "../../components/selectClassVariable/selectClassVariable.component";


const RegresionLinealVariables=({setClassVariable,setOtherRegressionVariables,headerVariables,loading,setLoading,otherRegressionVariables})=>{

    const [value, setValue] = useState(null)

    const onChangeTrainingVariable=(value)=>{
        setOtherRegressionVariables({
            ...otherRegressionVariables,
            trainingVariable:value
        })
    }

    const onChangeRadio = e => {
        setValue(e.target.value);
        if(e.target.value==0){
            setOtherRegressionVariables({
                ...otherRegressionVariables,
                binary:"yes"
            })
        }
        if(e.target.value==1){
            setOtherRegressionVariables({
                ...otherRegressionVariables,
                binary:"no"
            })
        }
      };

    const onChangeInputVariable0=(e)=>{
        setOtherRegressionVariables({
            ...otherRegressionVariables,
            valueFor0:e.target.value
        })
    }

    const onChangeInputVariable1=(e)=>{
        setOtherRegressionVariables({
            ...otherRegressionVariables,
            valueFor1:e.target.value
        })
    }


    const onClick=()=>{
        setLoading(true)
        setOtherRegressionVariables({
            ...otherRegressionVariables,
            complete:true
        })
    }

    return(
        <>
        <SelectClassVariable setVariablesSelected={setClassVariable} options={headerVariables} loading={loading} />
        <h3>Introduce el tamaño de la data con el que quieres que se entrene(0-1)</h3>
        <InputNumber min={0.1} max={1} style={{marginBottom:"12px"}} onChange={onChangeTrainingVariable} />
        <h3>La variable o columna ya es binaria?</h3>
        <Radio.Group onChange={onChangeRadio} value={value}>
            <Radio value={0}>Si</Radio>
            <Radio value={1}>No</Radio>
        </Radio.Group>

        {
            value==0 &&(
                <>
                <Divider/>
                <Button type="primary"  loading={loading} onClick={onClick} >
                Obtener modelo
                </Button>
                </>
            )
        
        }
        {
            value===1 &&(
            <>
            <Divider/>
            <h3>Introduce el valor de la variable que valdra 0</h3>
            <Input placeholder="Basic usage" size="small" onChange={onChangeInputVariable0}/>
            <Divider/>
            <h3>Introduce el valor de la variable que valdra 1</h3>
            <Input placeholder="Basic usage" size="small" onChange={onChangeInputVariable1} />
            <Divider/>
            <Button type="primary"  loading={loading} onClick={onClick} >
            Obtener modelo
            </Button>
            </>
            )
        }
      

        </>
    )
}


export default RegresionLinealVariables