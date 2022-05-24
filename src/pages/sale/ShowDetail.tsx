import { useEffect, useState } from "react"
import { Modal, message, Form, Table } from "antd"

interface IData {
  title: string
  sku: string
}
interface IProps {
  data?: IData|null
  visible: boolean
  callback: (boo: boolean) => void
}
interface DataType {
  key: React.Key;
  count: number;
  time: string;
  mark: string;
}
const columnsDetail= [
  {
    title: '销售数量',
    dataIndex: 'count',
  },
  {
    title: '时间',
    dataIndex: 'time',
  },
  {
    title: '备注',
    dataIndex: 'mark',
  },
];

const data: DataType[] = [
  {
    key: '1',
    count: 32,
    time: '2022-05-20',
    mark: '线上销售',
  },
  {
    key: '2',
    count: 42,
    time: '2022-05-21',
    mark: '线上销售',
  },
  {
    key: '3',
    count: 1120,
    time: '2022-05-22',
    mark: '线上销售',
  },
];

const ShowDetail = (props: IProps) => {
  const [isVisible, setVisible] = useState<boolean>(false)
  
  // 取消
  const handleCancel = () => {
    setVisible(false)
    props.callback(false)
  }

  useEffect(() => {
    setVisible(props.visible)
    console.info(props.data, 9)
  }, [props.visible])

  return (
    <>
      <Modal
        title={'销售记录'}
        visible={isVisible}
        onCancel={handleCancel}
        footer={null}>
        <Table columns={columnsDetail} dataSource={data} size="middle" />
      </Modal>
    </>
  )
}

export default ShowDetail