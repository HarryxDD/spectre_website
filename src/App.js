import React from 'react';
import { Navbar, Copyright, Header, Sidebar, Services, Thankyou, Cursor } from './components';

import './App.css'

const App = () => {

  return (
    <div>
        <Cursor />
        <Navbar />
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