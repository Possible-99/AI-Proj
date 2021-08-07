import React,{useState} from 'react'
import { Divider,message,Button } from "antd";
import FileDragger from "../../components/fileDragger/fileDragger.component";
import DataTable from "../../components/dataTable/dataTable.component";
import {fixData,columns} from "../../pages/clusteringJerarquico/columns";
import columnsGeneratorWithoutIndex from './columns';
import SelectVariables from "../../components/selectVariables/selectVariables.component";



const ClusteringFirstPart=({setCorrVariables,corrVariables,variablesSelected,setVariablesSelected,setLoading,loading,displayFirstTable,setHeaderVariables})=>{
    const [disabledStatus, setDisabledStatus] = useState(false)
    const [tablaGeneral,setTableGeneral]=useState(null)
    const props = {
        name: 'file',
        accept:".csv,.txt",
        maxCount:"1",
        disabled: disabledStatus ,
        multiple: false,
        action: '/api/pearsonVariables',
        onChange(info) {
          const { status } = info.file;
          if (status !== 'uploading') {
            setDisabledStatus(true)
          }
          if (status === 'done') {
            if (Object.keys(info.file.response).length === 0){
              message.error("Ingresa un archivo o parametros validos") 
            }
            else{
              message.success(`Se completo exitosamente`)
              const {variables,tablaGeneral}=info.file.response
              setHeaderVariables && setHeaderVariables(Object.keys(JSON.parse(tablaGeneral)[0]))
              setTableGeneral(JSON.parse(tablaGeneral))
              setCorrVariables({file:info.file.originFileObj,variables:variables})

    
            }
          } else if (status === 'error') {
            message.error("Error. Introduzca un archivo o parametrtos validos");
          }
        }
      }; 

    return(
        <div>
        <FileDragger {...props}/>
          <Button type="primary" style={{float:"right",margin:"10px 0",display:disabledStatus?"":"none"}} onClick={()=>window.location.reload()}>Otro estudio</Button>
          {
            (corrVariables!==null && tablaGeneral!==null) && (
            <div>
            {
              displayFirstTable===true && (
                <DataTable columns={columnsGeneratorWithoutIndex(tablaGeneral)} data={tablaGeneral} tableTitle="Data" pagination={true} size="small" scroll={{x:1500}} />
              )
            }
              <Divider/> 
              <DataTable columns={columns} data={fixData(corrVariables.variables[0]).fixedData} tableTitle="Correlacion de Variables" pagination={false} scroll={{ x: 1500}} />
              <SelectVariables state={variablesSelected} setVariablesSelected={setVariablesSelected} title="Selecciona seis variables" data={fixData(corrVariables.variables[0]).variables} setLoading={setLoading} loading={loading} />
            </div>)
          }
          </div>
    )
}


export default ClusteringFirstPart;