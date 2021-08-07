import React,{useState,useEffect} from 'react'

import { Divider, Select,Button } from 'antd';



const SelectVariables=({text,state,setVariablesSelected,data,loading,setLoading,title,variablesNumber,allVariablesOptionHidden,disableAfterSelection})=>{
    const OPTIONS = data;
    const [items, setItems] = useState({"selectedItems": [],allVariables:false})
    const maximumSelectedVariables=variablesNumber?variablesNumber:data.length>5?6:data.length
    
    const handleChange = selectedItems => {
        setItems({ selectedItems });
      };

    useEffect(() => {
        if (items.selectedItems.length===maximumSelectedVariables ){
            setVariablesSelected(items.selectedItems)
            if(setLoading){
                setLoading(true)
            }
        }
    }, [items])
    
    const handleClick=()=>{
        setItems({...items,allVariables:true})
        setVariablesSelected("all")
        if(setLoading){
            setLoading(true)
        }
    }

    const { selectedItems } = items;
    const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));
    const disabled=selectedItems.length===maximumSelectedVariables?true:false || items.allVariables===true?true:false || disableAfterSelection===true?true:false

    return(
       
        <div>
         <Divider/>
            <h3>{`Selecciona ${maximumSelectedVariables} variables`}</h3>
            <Select
            showArrow
            mode="multiple"
            value={selectedItems}
            onChange={handleChange}
            style={{ width: '100%' }}
            loading={loading}
            disabled={disabled}
            allowClear={true}
            >
                {filteredOptions.map(item => (
                <Select.Option key={item} value={item} disabled={disabled}>
                    {item}
                </Select.Option>
            ))}
            </Select>
            <Divider/>
            <div style={{display:allVariablesOptionHidden}}>
            <h3>Ó selecciona todas las variables en la tabla</h3>
            <Button type="primary" loading={loading} onClick={handleClick} disabled={disabled} >Todas</Button>
            </div>
        </div>
    )
}


export default SelectVariables;