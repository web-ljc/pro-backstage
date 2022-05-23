import React, { useEffect, useState } from "react"
import { Table, Tag, Space } from "antd"
import type { PaginationProps } from 'antd';
// import { getGoodsList, data } from "../../api/user"

interface IGoods {
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
    title: '状态',
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
    render: (_:object, record:any) => (
      <Space size="middle">
        <a>编辑</a>
        <a>删除</a>
      </Space>
    ),
  },
]

const _data = [
  {
    title: '伊利 舒化无乳糖牛奶 高钙型零乳糖好吸收 家庭乐享装 220ml*24盒/箱 早餐伴侣',
    sku: '100005822120',
    price: 94.90,
    stock: 991,
    tags: ['up', 'hot']
  },
  {
    title: '蒙牛 特仑苏 纯牛奶250ml*16每100ml含3.6g优质蛋白质 礼盒装',
    sku: '2922989',
    price: 69.90,
    stock: 10,
    tags: ['up', 'hot']
  },
  {
    title: '伊利 舒化无乳糖牛奶 高钙型零乳糖好吸收 家庭乐享装 220ml*24盒/箱 早餐伴侣',
    sku: '100005822121',
    price: 94.90,
    stock: 991,
    tags: ['up', 'hot']
  },
  {
    title: '蒙牛 特仑苏 纯牛奶250ml*16每100ml含3.6g优质蛋白质 礼盒装',
    sku: '29229892',
    price: 69.90,
    stock: 10,
    tags: ['up', 'hot']
  },
  {
    title: '伊利 舒化无乳糖牛奶 高钙型零乳糖好吸收 家庭乐享装 220ml*24盒/箱 早餐伴侣',
    sku: '1000058221203',
    price: 94.90,
    stock: 991,
    tags: ['up', 'hot']
  },
  {
    title: '蒙牛 特仑苏 纯牛奶250ml*16每100ml含3.6g优质蛋白质 礼盒装',
    sku: '29229894',
    price: 69.90,
    stock: 10,
    tags: ['up', 'hot']
  },
  {
    title: '伊利 舒化无乳糖牛奶 高钙型零乳糖好吸收 家庭乐享装 220ml*24盒/箱 早餐伴侣',
    sku: '1000058221205',
    price: 94.90,
    stock: 991,
    tags: ['up', 'hot']
  },
  {
    title: '蒙牛 特仑苏 纯牛奶250ml*16每100ml含3.6g优质蛋白质 礼盒装',
    sku: '29229896',
    price: 69.90,
    stock: 10,
    tags: ['up', 'hot']
  },
  {
    title: '伊利 舒化无乳糖牛奶 高钙型零乳糖好吸收 家庭乐享装 220ml*24盒/箱 早餐伴侣',
    sku: '1000058221207',
    price: 94.90,
    stock: 991,
    tags: ['up', 'hot']
  },
  {
    title: '蒙牛 特仑苏 纯牛奶250ml*16每100ml含3.6g优质蛋白质 礼盒装',
    sku: '29229898',
    price: 69.90,
    stock: 10,
    tags: ['up', 'hot']
  },
  {
    title: '伊利 舒化无乳糖牛奶 高钙型零乳糖好吸收 家庭乐享装 220ml*24盒/箱 早餐伴侣',
    sku: '1000058221209',
    price: 94.90,
    stock: 991,
    tags: ['up', 'hot']
  },
  {
    title: '蒙牛 特仑苏 纯牛奶250ml*16每100ml含3.6g优质蛋白质 礼盒装',
    sku: '292298911',
    price: 69.90,
    stock: 10,
    tags: ['up', 'hot']
  },
]

const App: React.FC = () => {
  const [goodsList, setGoodsList] = useState<IGoods[]>()

  const getUserListFn = (page: number = 1) => {
    console.info(_data)
    setGoodsList(_data)
  }

  useEffect(() => {
    getUserListFn()
  }, [])

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