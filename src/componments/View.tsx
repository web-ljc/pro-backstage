import { Suspense, ReactNode } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { router, unAuthRouter, IRouter} from '../router/index'


export default () => {
  const generateRouter = (routerList?: IRouter[], _path?: string): ReactNode => {
    return (<>
      {
        routerList?.map((r) => {
          if(r.children) {
            return(<> { generateRouter(r.children, r.path) } </>)
          }
          return <Route key={r.key} exact={r.exact} path={_path? _path+r.path : r.path}> {r.component} </Route>
        })
      }
    </>)
  }

  return (
    <Suspense fallback={<></>}>
      <Switch>
        <Route path={'/'} exact>
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
