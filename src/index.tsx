import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import '@css/common.less';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// @ts-ignore
function render(props) {
  const { container } = props;
  // ReactDOM.render(<App />, container ? container.querySelector('#root') : document.querySelector('#root'));
  const root = ReactDOM.createRoot(
    container ? container.querySelector('#root') as HTMLElement : document.getElementById('root') as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
    </React.StrictMode>
  );
}

// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}
// @ts-ignore
export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}
// @ts-ignore
export async function mount(props) {
  console.log('[react16] props from main framework', props);
  render(props);
}
// 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
// @ts-ignore
export async function unmount(props) {
  const { container } = props;
  // @ts-ignore
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}
// @ts-ignore
export async function update(props) {
  console.log('[react16] react app update', props);
}

reportWebVitals()