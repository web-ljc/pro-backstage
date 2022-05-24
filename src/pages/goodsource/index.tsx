import React, { useEffect, useState } from "react"
import { Table, Space, Button } from "antd"
import Search from './Search'
import { data } from "../../api/source"

interface ISource {
  id: number
  name: string
  address: string
  mobile?: string
  tel?: string
}
interface ISearch {
  name: string
}

interface IColumns {
  title: string
  dataIndex?: string
  key: string
  width?: number
  render?: any
}

const columns:IColumns[] = [
  {title: '商家', dataIndex: 'name', key: 'name'},
  {title: '地址', dataIndex: 'address', key: 'address'},
  {title: '联系方式', dataIndex: 'tel', key: 'tel'},
  {
    title: '操作',
    key: 'action',
    width: 150,
    render: (_:object, record:any) => (
      <Space size="middle">
        <Button type="link" disabled>编辑</Button>
        <Button type="link" disabled>删除</Button>
      </Space>
    ),
  },
]

const App: React.FC = () => {
  const [searchInfo, setSearchInfo] = useState<ISearch>({
    name: ''
  })
  const [sourceList, setSourceList] = useState<ISource[]>()

  // 获取数据
  const getUserListFn = (page: number = 1) => {
    setSourceList(data)
  }

  // 请求数据
  const searchData = (values: ISearch) => {
    console.info(values, 889)
    setSearchInfo({
      ...values
    })
    getUserListFn()
  }

  useEffect(() => {
    getUserListFn()
  }, [])

  return(
    <>
      <Search
        data={searchInfo}
        callback={searchData}
      />
      <Table
        dataSource={sourceList}
        columns={columns}
        rowKey={'id'}
        size='middle'
        pagination={{
          total: sourceList?.length,
          defaultCurrent: 1,
          defaultPageSize: 10
        }}
      />
    </>
  )
}

export default App