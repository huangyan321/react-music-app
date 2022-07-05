//该处导入第三方库
import React from 'react';
import { HashRouter, useRoutes } from 'react-router-dom';
//该处导入功能性如网络请求和工具类
import routes from '@/router/index.js';
import './App.css';
import { Provider } from 'react-redux';
import store from '@/store';
import MusicHeader from './components/app-header';
import MusicFooter from './components/app-footer';
import MusicPlayer from './views/player/app-player-bar';
function RouteElement() {
  const element = useRoutes(routes);
  return element;
}
function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <MusicHeader></MusicHeader>
        <RouteElement />
        <MusicFooter></MusicFooter>
        <MusicPlayer></MusicPlayer>
      </HashRouter>
    </Provider>
  );
}

export default App;
