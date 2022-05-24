import React, { useEffect, useState } from "react"
import { Table, Tag, Space } from "antd"
import {Link} from 'react-router-dom'
import { data } from "../../api/sale"
import Search from './Search'
import IShowDetail from './ShowDetail'

interface IProps {
  quotePos?: string
}

interface ISearch {
  title: string
  sku: string
}
interface ISale extends ISearch {
  price: number
  saleNum: number
  stock?: number
  tags?: string[]
}

interface IColumns {
  title: string
  dataIndex?: string
  key: string
  width?: number
  ellipsis?: boolean
  render?: any
}

const App: React.FC<IProps> = (props) => {
  // 查询
  const [searchInfo] = useState<ISearch>({
    title: '',
    sku: ''
  })
  // 销售记录
  const [showDetailInfo, setShowDetailInfo] = useState<ISale>()
  const [isShowDetail, setIsShowDetail] = useState<boolean>(false)
  // 销售数据
  const [saleList, setSaleList] = useState<ISale[]>()
  // 引用位置
  const quotePos = props?.quotePos || null
  // 表格字段
  const columns:IColumns[] = [
    {
      title: '序号',
      dataIndex: 'id',
      key: 'id',
      width: 50,
      render:(text:string, record:any, index:number) => index+1
    },
    {
      title: '商品名称',
      dataIndex: 'title',
      key: 'title',
      render: (text:string) => {
        return <a>{text}</a>
      }
    },
    {title: 'SKU', dataIndex: 'sku', key: 'sku', width: 140},
    {title: '商品价格', dataIndex: 'price', key: 'price', width: 100},
    {title: '销售数量', dataIndex: 'saleNum', key: 'saleNum', width: 100},
    {
      title: '销售额',
      dataIndex: 'sumMoney',
      key: 'sumMoney',
      width: 100,
      render:(text:string, record:any) => {
        return (record.price * record.saleNum).toFixed(2)
      }},
    {title: '库存', dataIndex: 'stock', key: 'stock', width: 80},
    {
      title: '商品状态',
      key: 'tags',
      dataIndex: 'tags',
      width: 120,
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
      title: '操作',
      key: 'action',
      width: 100,
      render: (_:object, record:any) => (
        <Space size="middle">
          {
            record.saleNum > 0 && <a onClick={() => handleShow(record)}>销售记录</a>
          }
        </Space>
      ),
    },
  ]

  // 获取数据
  const getUserListFn = (page: number = 1) => {
    // console.info(data)
    // console.info(quotePos, 9)
    if(quotePos) {
      setSaleList([...data].slice(0, 8))
    } else {
      setSaleList(data)
    }
  }

  // 查询
  const searchData = () => {
  }

  useEffect(() => {
    getUserListFn()
  }, [])

  // 显示销售记录
  const handleShow = (obj: ISale) => {
    console.info(obj)
    setShowDetailInfo(obj)
    setIsShowDetail(true)

  }
  // 关闭销售记录
  const handleClose = () => {
    setIsShowDetail(false)
  }

  // 总条数
  const showTotal = (total:number, range:any) => {
    return `共${total}条`
  }
  // 改变页数
  const onChangePage = (page: number, pageSize:number) => {
    console.info(page, pageSize)
  }
  // 定义pagination
  const myPagination = () => {
    let _pagination = quotePos ? false : {
      total: saleList?.length,
      defaultCurrent: 1,
      defaultPageSize: 10,
      showSizeChanger: true,
      pageSizeOptions: [10, 20, 50, 100],
      showTotal: showTotal,
      onChange: onChangePage
    }
    return _pagination
  }

  return(
    <>
      { quotePos ? null : <Search data={searchInfo} callback={searchData} /> }
      <Table
        dataSource={saleList}
        columns={columns}
        rowKey={'sku'}
        size='middle'
        pagination={ myPagination() }
      />
      <IShowDetail
        visible={isShowDetail}
        data={showDetailInfo}
        callback={handleClose}
        />
    </>
  )
}

export default App