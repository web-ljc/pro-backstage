import { Suspense, ReactNode, Fragment, lazy } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { router, unAuthRouter, IRouter} from '../router/index'

const Index = lazy(() =>  import('../pages/index'))
const UserList = lazy(() => import('../pages/user'))
const GoodsList = lazy(() => import('../pages/goods'))
const SourceList = lazy(() => import('../pages/goodsource'))
const SaleList = lazy(() => import('../pages/sale'))
const Page404 = lazy(() => import('../pages/page404'))

export default () => {
  const generateRouter = (routerList?: IRouter[], _path?: string): ReactNode => (<>
    {
      routerList?.map((r) => {
        if(r.children && r.children.length) {
          return <Fragment key={r.key+'child'}> { generateRouter(r.children, r.path) } </Fragment>
        }
        return <Route key={r.key} path={_path? _path+r.path : r.path}> {r.component} </Route>
      })
    }
  </>)
  return (
    <Suspense fallback={<></>}>
      <Switch>
        <Route path='/admin/index' component={Index} />
        <Route path='/admin/goods/list' component={GoodsList} />
        <Route path='/admin/source/list' component={SourceList} />
        <Route path='/admin/sale/list' component={SaleList} />
        <Route path='/admin/manage/user' component={UserList} />
        <Route path='/admin/*' component={Page404} />
        <Redirect to='/admin/index' />
      </Switch>
    </Suspense>
  )
}
