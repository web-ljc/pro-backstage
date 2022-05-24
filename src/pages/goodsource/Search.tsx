import React, { useEffect, useState } from "react"
import { Form, Input, Button, Divider } from "antd"

interface IProps {
  data?: object
  callback: Function
}

const App: React.FC<IProps> = (props: IProps) => {
  // 表单
  const [form] = Form.useForm()
  
  // 根据传参初始化查询条件
  useEffect(() => {
    console.info(props.data, '初始化数据')
  }, [])
  
  // 完成
  const onFinish = (values: any) => {
    props.callback(values)
  }

  return(
    <div className="con-search">
      <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
        <Form.Item label="商家名称" name="name">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item shouldUpdate>
          {() => (
            <Button
              type="primary"
              htmlType="submit"
            >
              查询
            </Button>
          )}
        </Form.Item>
      </Form>
      <Divider />
    </div>
  )
}

export default App