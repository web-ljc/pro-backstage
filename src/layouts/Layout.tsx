import { Layout } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import TopHeader from './TopHeader'
import View from './View';
import LeftBar from './LeftBar';
import Breadcrumb from './IBreadcrumb'
const { Header, Content } = Layout;

export default () => {
  return (
    <Layout>
      <BrowserRouter>
        <Header>
          <TopHeader />
        </Header>
        <Layout>
          <LeftBar/>
          <Layout className='content'>
            <Breadcrumb />
            <Content className='con-inner'>
              <View />
            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    </Layout>
)};