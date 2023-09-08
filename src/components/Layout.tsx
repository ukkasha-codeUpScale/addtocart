// components/Layout.js or components/Layout.tsx
import Footer from './footer';
import Navbar from './navbar/index';
import React, { createContext, useContext, useState, useEffect } from 'react';

export const cartDataContext = createContext({});




const Layout = ({ children }:any) => {

  const [strContext, setStrcontext] = useState([])
  const [locaData, setLocalData] = useState<string | null>(null);
 

  useEffect(() => {
    const data = localStorage.getItem("username");
    if (data !== null) {
      setLocalData(data);
    }
  }, []);
  return (
    <>
    <cartDataContext.Provider value={{strContext, setStrcontext}}>
    
      <Navbar locaData={locaData} /> 
       <div className='px-3  text-white bg-gray-100 flex flex-col max-h-full'>{children}</div>
      <footer className="bg-dark  text-center py-4 bg-black">
       <Footer/> 
      </footer>  
    
      </cartDataContext.Provider>
    </>
  );
};

export default Layout;
