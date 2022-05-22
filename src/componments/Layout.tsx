import { Layout } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import TopHeader from './TopHeader'
import View from './View';
import LeftBar from './LeftBar';
import Breadcrumb from './Breadcrumb'
const { Header, Content } = Layout;

export default () => {
  return (
    <Layout>
      <BrowserRouter>
        <Header className="header">
          <TopHeader />
        </Header>
        <Layout>
          <LeftBar/>
          <Layout style={{padding: '0 24px 24px',}}>
            <Breadcrumb />
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <View />
            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    </Layout>
)};