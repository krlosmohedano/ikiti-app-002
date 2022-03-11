import React from 'react';
import Navbar2 from './Navbar2';
import productList from './productList';
import Home from './home';

export default function Layout({children}) {
  return (
      <div className="h-screen">
        <Navbar2 />
        {children} 
      </div>
  )
}
