import React, { useEffect, useState } from "react"
import { Table, Tag, Space, Button } from "antd"
import { data } from "../../api/goods"
import Search from '../../componments/Search'
import AddEdit from './AddEdit'
import Delete from './Delete'

interface IGoods {
  id:number
  title: string
  sku: string
  price?: number
  stock?: number
  tags?: string[]
}

interface IColumns {
  title: string
  dataIndex?: string
  key: string
  width?: number
  render?: any
}
interface ISearch {
  title: string
  sku: string
}

const App: React.FC = () => {
  const [searchInfo, setSearchInfo] = useState<ISearch>({
    title: '',
    sku: ''
  })
  const [goodsList, setGoodsList] = useState<IGoods[]>()
  const [showAddEditModal, setShowAddEditModal] = useState<boolean>(false)
  const [editObj, setEditObj] = useState<IGoods|null>(null)
  
  const columns:IColumns[] = [
    {
      title: '序号',
      dataIndex: 'id',
      key: 'id',
      render:(text:string, record:any, index:number) => index+1
    },
    {title: '商品名称', dataIndex: 'title', key: 'title'},
    {title: 'SKU', dataIndex: 'sku', key: 'sku'},
    {
      title: '商品状态',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags: string[]) => (
        <span>
          {tags ? tags.map(tag => {
            let color = tag === 'hot' ? 'volcano' : 'green';
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
      render: (_:object, record:IGoods) => (
        <Space size="middle">
          <a onClick={() => handleEditModal(record)}>编辑</a>
          <Delete id={record.id} />
        </Space>
      ),
    },
  ]

  // 加载数据
  const getUserListFn = (page: number = 1) => {
    console.info(data)
    setGoodsList(data)
  }

  // 请求数据
  const searchData = (values: ISearch) => {
    console.info(values, 889)
    setSearchInfo({
      ...values
    })
  }

  useEffect(() => {
    getUserListFn()
  }, [])

  // 显示弹框
  const handleAddModal = () => {
    setEditObj(null)
    setShowAddEditModal(true)
  }
  // 显示弹框
  const handleEditModal = (record: IGoods) => {
    setEditObj(record)
    setShowAddEditModal(true)
  }
  // 隐藏弹框
  const handleHideModal = (boo: boolean) => {
    setShowAddEditModal(boo)
  }

  // 现实条数
  const showTotal = (total:number, range:any) => {
    return `共${total}条`
  }
  // 改变页数
  const onChangePage = (page: number, pageSize:number) => {
    console.info(page, pageSize)
  }

  return(
    <>
      <Search
        data={searchInfo}
        callback={searchData}
      />
      <AddEdit
        data={editObj}
        visible={showAddEditModal}
        callback={handleHideModal}
      />
      <Button type="primary" className="mb-16" onClick={handleAddModal}>新增</Button>
      <Table
        dataSource={goodsList}
        columns={columns}
        rowKey={'sku'}
        size='middle'
        pagination={{
          total: goodsList?.length,
          defaultCurrent: 1,
          defaultPageSize: 10,
          showSizeChanger: true,
          pageSizeOptions: [10, 20, 50, 100],
          showTotal: showTotal,
          onChange: onChangePage
        }}
      />
    </>
  )
}

export default App