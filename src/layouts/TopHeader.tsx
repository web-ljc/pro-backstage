import { Menu, Row, Col } from 'antd';

const items1 = ['个人中心', '帮助中心'].map((key) => ({
  key,
  label: `${key}`,
}));

export default () => {
  return (
    <>
      <Row>
        <Col span={16} className="header-title">
          万云科技管理系统
        </Col>
        <Col span={8}>
          <Menu
            className='float-right'
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={items1}
          />
        </Col>
      </Row>
    </>
)};