import React, { useEffect, useState } from "react"
import { Table, Tag, Space } from "antd"
import { getUserList, data } from "../../api/user"
import Search from './Search'

interface IUser {
  id: number
  name: string
  age: number
  mobile?: string
  email?: string
  tags?: string[]
}

interface IColumns {
  title: string
  dataIndex?: string
  key: string
  width?: number
  render?: any
}

const columns:IColumns[] = [
  {title: 'ID', dataIndex: 'id', key: 'id'},
  {title: '名字', dataIndex: 'name', key: 'name'},
  {title: '年龄', dataIndex: 'age', key: 'age'},
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags: string[]) => (
      <span>
        {tags ? tags.map(tag => {
          let color = tag === '停用' ? 'volcano' : 'green';
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        }) : ''}
      </span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    width: 150,
    render: (_:object, record:any) => (
      <Space size="middle">
        <a>编辑</a>
        <a>删除</a>
      </Space>
    ),
  },
]

const App: React.FC = () => {
  const [userList, setUserList] = useState<IUser[]>()

  const getUserListFn = (page: number = 1) => {
    console.info(data)
    setUserList(data)
    // getUserList(page).then(res => {
    //   const {data} = res.data.data
    //   setUserList(data)
    // }, err => {
    //   setUserList([])
    // })
  }
  
  // 查询数据
  const searchData = () => {
    getUserListFn()
  }

  useEffect(() => {
    getUserListFn()
  }, [])

  return(
    <>
      <Search callback={searchData}/>
      <Table
        dataSource={userList}
        columns={columns}
        rowKey={'id'}
        size='middle'
        pagination={{
          total: 14,
          defaultCurrent: 1,
          defaultPageSize: 10
        }}
      />
    </>
  )
}

export default App