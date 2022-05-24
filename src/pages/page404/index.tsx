import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="抱歉, 这个页面找不到请返回首页."
      extra={<Button type="primary">
        <Link to="/">返回首页</Link>
      </Button>}
    />
  )
}

export default Page404