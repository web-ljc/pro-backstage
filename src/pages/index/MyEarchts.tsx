import React from 'react';
import { Row, Col, Tabs, Divider } from 'antd';
import Echarts from "../../componments/Earchts"
import Echarts2 from "../../componments/Earchts2"
import './index.less'


const { TabPane } = Tabs;

const onChange = (key: string) => {
  console.log(key);
};

const App: React.FC = () => (
  <div className='index-echarts' style={{overflow: 'hidden'}}>
    <Row gutter={50}>
      <Col span={12}>
        <Tabs defaultActiveKey="1" onChange={onChange}>
          <TabPane tab="销售数据" key="1">
            <Echarts2 />
          </TabPane>
          <TabPane tab="用户统计" key="2">
            <Echarts />
          </TabPane>
        </Tabs>
      </Col>
      <Col span={12}>
        <Echarts />
      </Col>
    </Row>
  </div>
);

export default App;