import React from 'react'
import { Input,Form } from 'antd'


const RegresionLogisticaFormInput=({label,name})=>{

    return(
        <Form.Item
            label={label}
            name={name}
            rules={[{
                required: true,
                message: 'Campo necesario',
                },
                    ]}
            key
        >
            <Input />
        </Form.Item>
    )
}


export default RegresionLogisticaFormInput