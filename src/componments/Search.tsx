import React, { useEffect, useState } from "react"
import { Table, Tag, Space } from "antd"
import {Link} from 'react-router-dom'
import { data } from "../api/sale"

interface IProps {
  quotePos?: string
}

interface ISale {
  title: string
  sku: string
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
  // 销售数据
  const [saleList, setSaleList] = useState<ISale[]>()
  // 引用位置
  const quotePos = props?.quotePos || null

  // 获取数据
  const getUserListFn = (page: number = 1) => {
    console.info(data)
    console.info(quotePos, 9)
    if(quotePos) {
      setSaleList([...data].slice(0, 8))
    } else {
      setSaleList(data)
    }
  }

  useEffect(() => {
    getUserListFn()
  }, [])

  // 总条数
  const showTotal = (total:number, range:any) => {
    return `共${total}条`
  }
  // 改变页数
  const onChangePage = (page: number, pageSize:number) => {
    console.info(page, pageSize)
  }
  

  return(
    <>
      search
    </>
  )
}

export default App