import { useEffect, useState } from 'react';
import { Link, matchPath, withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { IRouter, router } from '../router';

const { Sider } = Layout;
const { SubMenu, Item } = Menu;

// 加载菜单
const MenuFn = () => {
  return router.map(({key, title, path, children, icon}) => {
    return children && children.length ? (
      <SubMenu key={key} title={title} icon={icon}>
        {
          children.map(item => {
            return (
              <Item key={item.key}>
                <Link to={path+item.path}>{item.title}</Link>
              </Item>
            )
          })
        }
      </SubMenu>
    ) : (
      <Item key={key} icon={icon}>
        <Link to={path}>{title}</Link>
      </Item>
    )
  })
}

const LeftBar = (props:any) => {
  const [defaultOpenkeys, setDefaultOpenkeys] = useState<string[]>([])
  const [defaultSelectedKeys, setDefaultSelectedKeys] = useState<string[]>([])

  // 刷新菜单高亮显示
  const heightMenu = (leftRoutes: IRouter[], _path:string='') => {
    let path = props.location.pathname
    for(let r of leftRoutes) {
      let match = matchPath(path, {path: _path+r.path})
      if(match) {
        if(match.isExact) {
          setDefaultSelectedKeys([r.key])
        } else {
          setDefaultOpenkeys([r.key])
        }
        if(r.children) {
          heightMenu(r.children, r.path)
        }
      }
    }
  }

  // 监听路由的变化渲染选中，每次点击菜单也会触发，需要优化
  useEffect(() => {
    heightMenu(router)
  }, [props.location.pathname])

  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        openKeys={defaultOpenkeys}
        selectedKeys={defaultSelectedKeys}
        defaultOpenKeys={defaultOpenkeys}
        defaultSelectedKeys={defaultSelectedKeys}
        style={{ height: '100%', borderRight: 0 }}
        onOpenChange={(openkeys) => setDefaultOpenkeys(openkeys)}
        onSelect={({selectedKeys}) => setDefaultSelectedKeys(selectedKeys)}
      >
        { MenuFn() }
      </Menu>
    </Sider>
)};

export default withRouter(LeftBar)