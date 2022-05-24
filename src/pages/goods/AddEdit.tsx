import { useEffect, useState } from "react"
import { Modal, message, Form, Input } from "antd"

interface IData {
  title: string
  sku: string
}
interface IProps {
  data?: IData|null
  visible: boolean
  callback: (boo: boolean) => void
}

const AddEdit = (props: IProps) => {
  const [title, setTitle] = useState<string>('创建')
  const [isVisible, setVisible] = useState<boolean>(false)
  const [keyValues, setKeyValues] = useState<IData>()
  const [form] = Form.useForm()
  
  // 确定
  const handleOk = () => {
    // 检验
    form.validateFields().then(values => {
      setVisible(false)
      props.callback(false)
      message.success('添加成功');
    }).catch(r => {
      console.info(r)
    })
  }
  // 取消
  const handleCancel = () => {
    form.resetFields() // 重置数据
    setVisible(false)
    props.callback(false)
  }

  useEffect(() => {
    if(!props.data) {
      setTitle('创建')
      form.resetFields() // 重置数据
    } else {
      setTitle('编辑')
      form.setFieldsValue(props.data)
    }
    setVisible(props.visible)
  }, [props.visible])

  return (
    <Modal
      title={title}
      visible={isVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="保存"
      cancelText="取消">
      <Form
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        >
        <Form.Item
          label="商品名称"
          name="title"
          rules={[{ required: true, message: '请输入用户名!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="SKU"
          name="sku"
          rules={[{ required: true, message: '请输入SKU!' }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default AddEdit
