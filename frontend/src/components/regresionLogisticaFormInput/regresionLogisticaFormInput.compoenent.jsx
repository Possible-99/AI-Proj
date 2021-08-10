import React from 'react'
import { Input,Form } from 'antd'


const RegresionLogisticaFormInput=({label,name,key})=>{

    return(
        <Form.Item
            label={label}
            name={name}
            rules={[{
                required: true,
                message: 'Campo necesario',
                },
                    ]}
            key={key}
        >
            <Input />
        </Form.Item>
    )
}


export default RegresionLogisticaFormInput