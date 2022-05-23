import { Card, Statistic, Row, Col } from 'antd';

interface ICard {
  id: number,
  title: string
  value: number
  precision?: number
  suffix?: string
}

const data:ICard[] = [
  {id:1, title: '销售额', value: 382911.28, precision: 2, suffix: '¥'},
  {id:2, title: '库存数', value: 889, suffix: '件'},
  {id:3, title: '支付笔数', value: 2321, suffix: '笔'},
  {id:4, title: '用户数', value: 1128, suffix: '人'}
]

const MyCard = () => (
  <Row gutter={16}>
    {data.map(item => {
      return <Col key={item.id} span={6}>
        <Card hoverable>
          <Statistic
            title={item.title}
            value={item.value}
            precision={item?.precision}
            suffix={item?.suffix}
          />
        </Card>
      </Col>
     })}
  </Row>
);

export default MyCard;