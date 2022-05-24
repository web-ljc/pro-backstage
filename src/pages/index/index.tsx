import { useState } from 'react';
import { Card, Divider, Skeleton } from 'antd';
import {Link} from 'react-router-dom'
import MyCard from "./MyCard"
import MyEarchts from './MyEarchts'
import SaleList from "../sale"

const Main = () => {
  return (
    <div>
      <MyCard />
      <MyEarchts />
      <>
        <h1>销售列表</h1>
        <Divider />
        <SaleList quotePos='index' />
      </>
    </div>
  )
}

export default Main