import React from 'react'
import {Table} from 'antd';
import "./dataTable.styles.scss"

const DataTable=({data,columns,tableTitle,size,scroll,pagination,display})=>{
    return(
        <div style={{display:"block"}}>
        <h3 style={{display:display,margin:"15px 0 0 0"}}>{tableTitle}</h3>
        <Table columns={columns} dataSource={data} scroll={scroll} size={size} pagination={pagination} style={{display:display}}/>
        </div>
    )
}


export default DataTable;