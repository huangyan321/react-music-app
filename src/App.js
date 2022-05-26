//该处导入第三方库
import React from 'react';
import { HashRouter, useRoutes } from 'react-router-dom';
//该处导入功能性如网络请求和工具类
import routes from '@/router/index.js'


import MusicHeader from './components/app-header';
import MusicFooter from './components/app-footer';
function RouteElement () {
  const element = useRoutes(routes)
  return element
}
function App () {
  return (
    <HashRouter>
      <MusicHeader></MusicHeader>
      <RouteElement />
      <MusicFooter></MusicFooter>
    </HashRouter>
  );
}

export default App;
