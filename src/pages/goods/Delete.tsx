import { Popconfirm, Button, message } from "antd"

interface IProps {
  id: number
}

const Delete = (props: IProps) => {
  const onDdelete = () => {
    console.info(props.id)
    message.success('删除成功');
    // 请求接口刷新列表
  }
  return (
    <Popconfirm title="删除" onConfirm={onDdelete}>
      <Button type="link" danger>删除</Button>
    </Popconfirm>
  )
}

export default Delete