//该处导入第三方库
import React from 'react';

//该处导入功能性如网络请求和工具类



import MusicHeader from './components/app-header';
import MusicFooter from './components/app-footer';
function App() {
  return (
    <div>
      <MusicHeader></MusicHeader>
      <h1>react-music</h1>
      <MusicFooter></MusicFooter>
    </div>
  );
}

export default App;
