import { Suspense, ReactNode, useEffect, useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { router, unAuthRouter, IRouter} from '../router/index'


export default () => {
  const generateRouter = (routerList?: IRouter[], _path?: string): ReactNode => (<>
    {
      routerList?.map((r) => {
        if(r.children && r.children.length) {
          return <div key={r.key+'child'}> { generateRouter(r.children, r.path) } </div>
        }
        return <Route key={r.key} exact={r.exact} path={_path? _path+r.path : r.path}> {r.component} </Route>
      })
    }
  </>)

  return (
    <Suspense fallback={<></>}>
      <Switch>
        <Route path={['/', '/admin/']} exact>
          <Redirect to={'/admin/index'} />
        </Route>
        <Route path='/admin'>
          { generateRouter(router) }
        </Route>
        <Switch>
          { unAuthRouter.map(r =>  <Route key={r.key} exact={r.exact} path={r.path}>{r.component}</Route>) }
        </Switch>
      </Switch>
    </Suspense>
  )
}
