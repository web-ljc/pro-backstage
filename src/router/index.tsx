import { lazy, ReactNode } from 'react'
import {
  HomeOutlined,
  UsergroupAddOutlined,
  ApartmentOutlined,
  FileTextOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';

const Login = lazy(() =>  import('../pages/login'))
const Index = lazy(() =>  import('../pages/index'))
const UserList = lazy(() => import('../pages/user'))
const GoodsList = lazy(() => import('../pages/goods'))
const SourceList = lazy(() => import('../pages/goodsource'))
const SaleList = lazy(() => import('../pages/sale'))
const Page404 = lazy(() => import('../pages/page404'))

export interface IRouter {
  title: string
  path: string
  key: string
  exact?: boolean
  icon?: ReactNode
  component?: ReactNode
  children?: IRouter[]
}

export const router: IRouter[] = [
  {
    path: '/admin/index',
    title: '首页',
    key: 'index',
    icon: <HomeOutlined />,
    component: <Index />,
  },
  {
    path: '/admin/goods',
    title: '商品管理',
    key: 'goods',
    icon: <ShoppingCartOutlined />,
    children: [
      {
        path: '/list',
        title: '商品列表',
        key: 'goodsList',
        component: <GoodsList />,
      }
    ]
  },
  {
    path: '/admin/source',
    title: '货源管理',
    key: 'source',
    icon: <ApartmentOutlined />,
    children: [
      {
        path: '/list',
        title: '货源中心',
        key: 'sourceList',
        component: <SourceList />,
      }
    ]
  },
  {
    path: '/admin/sale',
    title: '销售管理',
    key: 'sale',
    icon: <FileTextOutlined />,
    children: [
      {
        path: '/list',
        title: '销售列表',
        key: 'saleList',
        component: <SaleList />,
      }
    ]
  },
  {
    path: '/admin/manage',
    title: '用户管理',
    key: 'manage',
    icon: <UsergroupAddOutlined />,
    children: [
      {
        path: '/user',
        title: '用户列表',
        key: 'userList',
        component: <UserList />,
      },
      {
        path: '/role',
        title: '角色列表',
        key: 'roleList',
        component: <UserList />,
      },
      {
        path: '/power',
        title: '权限列表',
        key: 'powerList',
        component: <UserList />,
      }
    ]
  }
]
export const unAuthRouter: IRouter[] = [
  {
    path: '/login',
    title: '登录',
    key: 'login',
    component: <Login />,
  },
  {
    path: '*',
    title: '404',
    key: '404',
    component: <Page404 />,
  }
]

