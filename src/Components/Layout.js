import React from 'react';
import Listproducts from './Listproducts';
import Navbar2 from './Navbar2';

export default function Layout({children}) {
  return (
        <Navbar2/>,
        <Listproducts/>
  )
}
