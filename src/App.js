import React, { useState } from 'react';
import { Navbar, Copyright, Header, Sidebar, Services, Thankyou, Cursor } from './components';

import './App.css'

const App = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div>
        <Cursor />
        <Navbar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>
        <Sidebar />
        <div>
          <Header />
          <Services />
          <Thankyou />
        </div>
        <Copyright />
    </div>
  )
}

export default App