import { Layout, Menu } from 'antd';

const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

export default (props:any) => {
  return (
    <>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
    </>
)};