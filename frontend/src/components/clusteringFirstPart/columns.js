const columnsGeneratorWithoutIndex=(data)=>{
    let columns=[]
    const keys=Object.keys(data[0])
    keys.forEach(item=>{
        columns.push({
            title:item,
            dataIndex:item,
        })
    })
    return columns
}

export default columnsGeneratorWithoutIndex