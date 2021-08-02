import React,{useState} from "react";
import "./metricas.styles.scss";
import MyLayout from "../../components/layout/layout.component";
import { Divider, Layout,message,Button, Typography} from "antd";
import FileDragger from "../../components/fileDragger/fileDragger.component";
import DataTable from "../../components/dataTable/dataTable.component";
import { columnsGeneratorChebyshev, columnsGeneratorEuclidian, columnsGeneratorManhattan, columnsGeneratorMinkowski } from "../../pages/metricas/columns"
const { Content } = Layout;
const {Title}=Typography

const Metricas = () => {

  const [disabledStatus, setDisabledStatus] = useState(false)
  const [metricasData, setMetricasData] = useState(null)
  const [columns, setColumns] = useState(null)
  const props = {
    name: 'file',
    accept:".csv,.txt",
    maxCount:"1",
    disabled: disabledStatus ,
    multiple: false,
    action: '/api/metricas',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        setDisabledStatus(true)
      }
      if (status === 'done') {
        if (Object.keys(info.file.response).length === 0){
          message.error("Ingresa un archivo o parametros validos") 
          setMetricasData(info.file.response)
        }
        else{
          message.success(`Se completo exitosamente`);
          setMetricasData(info.file.response)
          const numberColumns=info.file.response.numberColumns
          const {euclidian,minkowski,chebyshev,manhattan}= info.file.response
          console.log("====-")
          console.log(euclidian)
          const columnsSkeleton={euclidianColumns:columnsGeneratorEuclidian(numberColumns,euclidian),minkowskiColumns:columnsGeneratorMinkowski(numberColumns,minkowski),chebyshevColumns:columnsGeneratorChebyshev(numberColumns,chebyshev),manhattanColumns:columnsGeneratorManhattan(numberColumns,manhattan)}
          setColumns(columnsSkeleton)
        }
      } else if (status === 'error') {
        message.error("Error. Suba un archivo valido");
      }
    },
    onDrop(e) {
    },
  }; 

  console.log("====")
  console.log(columns)
  console.log(metricasData)

  return (
    <MyLayout menuKey="3" title="Métricas">
      <Content style={{ margin: "5px 16px 0px 16px" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
        <Title level={3}>Sube el archivo para obtener las metricas de similitud</Title>
        <h4 style={{fontWeight:"300"}}>Arrastra un archivo solo con los datos necesarios(sin columnas que contengan ID,etc)</h4>
          <FileDragger {...props}/>
          <Button type="primary" style={{float:"right",margin:"10px 0",display:disabledStatus?"":"none"}} size="middle" onClick={()=>window.location.reload()} >Nuevo estudio</Button>
          
          {
            metricasData==null?null:(
                (Object.keys(metricasData).length !== 0 && columns!=null )&& (
              <div>
                <Divider></Divider>
                <DataTable data={metricasData.euclidian} columns={columns.euclidianColumns} tableTitle={"Tabla Euclidiana"}  scroll={{ x: 1500}}pagination={true} />
                <Divider/>
                <DataTable data={metricasData.minkowski} columns={columns.minkowskiColumns} tableTitle={"Tabla Minkowski "}  scroll={{ x: 1500}}pagination={true} />
                <Divider/>
                <DataTable data={metricasData.chebyshev} columns={columns.chebyshevColumns} tableTitle={"Tabla Chebyshev(P=1.5)"}  scroll={{ x: 1500}}pagination={true} />
                <Divider/>
                <DataTable data={metricasData.manhattan} columns={columns.manhattanColumns} tableTitle={"Tabla Manhattan"}  scroll={{ x: 1500}}pagination={true} />
              </div>
              )
            )
            }
        </div>
      </Content>
    </MyLayout>
  );
};

export default Metricas;
