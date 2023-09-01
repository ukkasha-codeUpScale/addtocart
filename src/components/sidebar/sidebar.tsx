import React, { useState , useContext} from "react";
import { cartDataContext } from "../Layout";


const Sidebar = ({ setShowSidebar, showSidebar }: any) => {
    let arr :any= [];

    const val = useContext(cartDataContext);
    const cartItems = val?.strContext;

    cartItems.map(( cartitm:any, index:any)=>{
        if(arr.includes(cartitm.id))
        {
          console.log(cartitm ,"Prev Quantity")
          const addPrev = arr.indexOf(cartitm.id)
          cartitm.quantity = cartItems[addPrev].quantity + cartitm.quantity
          console.log(cartitm ,"Updated Quantity")
          cartItems.splice(addPrev,1)
        }
        arr.push(cartitm.id)
      }
     ) 

    function handleCartItmDelete(itmEvent:any){
      console.log("Item from close button",itmEvent)
      cartItems.pop(itmEvent)
    }

  

  return (
    <div className="">
      <button
        onClick={() => {
          setShowSidebar(false);
        }}
      >
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="white"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </button>
      <h1 className="flex justify-center self-center text-4xl text-white ">Your Cart Items</h1>
      <hr className="w-48 h-1 mx-auto my-1 bg-gray-100 border-0 rounded md:my-1 dark:bg-gray-700" />

        <div className=" text-left overflow-x-auto max-h-screen
        scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300
        
        ">

        {
          cartItems.map((item:any)=>{
            return(
              <div key={item.id} className="flex flex-col p-2 border-solid border-2 rounded-lg mt-2 border-sky-800  hover:bg-gray-800 cursor-pointer">

                <button className="flex self-end bg-transparent border-none px-1 hover:bg-red-400 hover:px-1 hover:border rounded-sm"
                onClick={()=>{handleCartItmDelete(cartItems.indexOf(item))}}
                >x</button>
                <p className="text-md text-center">{item.name}</p>
                <div className="flex justify-between font-light">
                  <p>Quantity </p>
                  <p>{item.quantity}</p>
                </div>
                <div className="flex justify-between font-light">
                  <p>Price </p>
                  <p className="text-green-500">{item.actualPrice}$</p>
                </div>
                <div className="flex justify-between font-light">
                  <p>Total Price </p>
                  <p className="text-red-500">{item.TotalPrice}$</p>
                </div>
              </div>
            );
          })
        }
        </div>
    </div>
  );
};

export default Sidebar;
