
export const columnsGeneratorEuclidian=(numberColumns,array)=>{
  const columns= [];
  columns.push({
    title:"",
    key:"index",
    render: (text, record) =>{return array.indexOf(record)} ,
  })

  for (let index = 0; index < numberColumns; index++) {
    columns.push({
      title: `${index}`,
      dataIndex:`${index}` ,
      key: `${index}`,
    })
  }
  return columns;
}

export const columnsGeneratorMinkowski=(numberColumns,array)=>{
  const columns= [];
  columns.push({
    title:"",
    key:"index",
    render: (text, record) =>{return array.indexOf(record)} ,
  })

  for (let index = 0; index < numberColumns; index++) {
    columns.push({
      title: `${index}`,
      dataIndex:`${index}` ,
      key: `${index}`,
    })
  }
  return columns;
}
export const columnsGeneratorChebyshev=(numberColumns,array)=>{
  const columns= [];
  columns.push({
    title:"",
    key:"index",
    render: (text, record) =>{return array.indexOf(record)} ,
  })

  for (let index = 0; index < numberColumns; index++) {
    columns.push({
      title: `${index}`,
      dataIndex:`${index}` ,
      key: `${index}`,
    })
  }
  return columns;
}

export const columnsGeneratorManhattan=(numberColumns,array)=>{
  const columns= [];
  columns.push({
    title:"",
    key:"index",
    render: (text, record) =>{return array.indexOf(record)} ,
  })

  for (let index = 0; index < numberColumns; index++) {
    columns.push({
      title: `${index}`,
      dataIndex:`${index}` ,
      key: `${index}`,
    })
  }
  return columns;
}

