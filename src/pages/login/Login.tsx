import { Form, Input, Button, Space, message  } from 'antd'
import './logins.less'
import { login } from '../../api/login'


const Login = () => {
  const [form] = Form.useForm()

  // 登录接口
  const onLogin = (form: any) => {
    let {username, password} = form
    if(username === 'admin' && password === '123456') {
      console.info(1)
      return
    }
    login(username, password).then(resp => {
      const {code, msg} = resp.data;
      if(code === 0) {
        message.success(msg)
      } else {
        message.error(msg)
      }
    })
  }
  // 重置
  const onReset = () => {
    form.resetFields()
  }
  const onFinishFailed = () => {

  }

  return(
    <div id='login'>
      <Form
        id ="login-form"
        form={form}
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onLogin}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item wrapperCol={{ span: 24 }}>
          <h1 className='algin-center'>万云科技</h1>
        </Form.Item>
        <Form.Item
          label="用户名"
          name="username"
          initialValue="admin"
          rules={[{ type: 'string', required: true, message: '请输入用户名!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          initialValue="123456"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }} style={{marginBottom: '0'}}>
          <Space size={20}>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
            <Button type="primary" htmlType="submit" onClick={onReset}>
              重置
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login