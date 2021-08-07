import React from 'react'
import SelectVariables from '../selectVariables/selectVariables.component'

const SelectClassVariable=({setVariablesSelected,options,loading,setLoading})=>{
    return(
        <SelectVariables setVariablesSelected={setVariablesSelected} data={options} loading={loading} setLoading={setLoading} variablesNumber={1} allVariablesOptionHidden="none" title="Selecciona la variable clase"/>
    )
}


export default SelectClassVariable;