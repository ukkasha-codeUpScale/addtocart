// components/Layout.js or components/Layout.tsx
import Footer from './footer';
import Navbar from './navbar/index';

const Layout = ({ children }:any) => {
  return (
    <>
      <Navbar /> 
       <div className='px-3 text-white bg-gray-100 flex flex-col min-h-max'>{children}</div>
      <footer className="bg-dark  text-center py-4 bg-black">
       <Footer/> 
      </footer>  
    </>
  );
};

export default Layout;
