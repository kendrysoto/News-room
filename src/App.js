import React from 'react';
import SideMenu from './components/SideMenu';
import News from './components/News'
import Search from './components/Search';

function App() {
  return (
    <div >
      <SideMenu />
      <Search />
      <News />
    </div>
  );
}

export default App;
