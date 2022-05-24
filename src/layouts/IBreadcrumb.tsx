import { Breadcrumb } from 'antd';
import { ReactNode, useEffect, Fragment } from 'react';
import { matchPath, RouteComponentProps, withRouter } from 'react-router-dom';
import { IRouter, router } from '../router';

interface IProps extends RouteComponentProps{
}

const IBreadcrumb = (props: IProps) => {
  //  递归生成面包屑
  const generate = (routerList: IRouter[], _path:string = ''):ReactNode => {
    let path = props.location.pathname
    return (<>
      {
        routerList.map(r => {
          let match = matchPath(path, {path: _path+r.path})
          if(match) {
            return(
              <Fragment key={r.key} >
                <Breadcrumb.Item>{r.title}</Breadcrumb.Item>
                { r.children ? generate(r.children, r.path) : null }
              </Fragment>
            )
          }
          return null
        })
      }
    </>)
  }
  return (
    <Breadcrumb className='bread-crumb'>
      { generate(router) }
    </Breadcrumb>
)};

export default withRouter(IBreadcrumb)