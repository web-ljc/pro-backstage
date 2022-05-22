import { Result, Button } from 'antd';

const Page404 = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary">返回首页</Button>}
    />
  )
}

export default Page404