// components/Layout.js or components/Layout.tsx
import Footer from './footer';
import Navbar from './navbar/index';
import React, { createContext, useContext, useState } from 'react';

export const cartDataContext = createContext({});



const Layout = ({ children }:any) => {

  const [strContext, setStrcontext] = useState([])

  return (
    <>
    <cartDataContext.Provider value={{strContext, setStrcontext}}>
      <Navbar /> 
       <div className='px-3 text-white bg-gray-100 flex flex-col min-h-max'>{children}</div>
      <footer className="bg-dark  text-center py-4 bg-black">
       <Footer/> 
      </footer>  
      </cartDataContext.Provider>
    </>
  );
};

export default Layout;
