import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { router } from '../router';

const { Sider } = Layout;
const { SubMenu, Item } = Menu;

// 加载菜单
const MenuFn = () => {
  return router.map(({key, title, path, children, icon}) => {
    if(key === '404' || key === 'login') return false
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

export default (props:any) => {
  // 点击菜单
  const onClickMenu = (item: any) => {
    console.info(item.keyPath, 9)
  }
  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={['index']}
        style={{ height: '100%', borderRight: 0, }}
        onClick={onClickMenu}
      >
        { MenuFn() }
      </Menu>
    </Sider>
)};