 import React, { useState, useContext } from "react";
import { cartDataContext } from "./Layout";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";


export default function ItemsDesc({ data, setTitems, Titems, Tprice, setTprice }: any) {
  
  let val = useContext(cartDataContext);
  // console.log(val,"+++++++++++")

  function handleAddItemToCart(){
    console.log("ID values of item in itms desc file ",data.id)
    

    val.setStrcontext([...val.strContext,{
      id:data.id,
      name:data.title,
      actualPrice : data.price,
      quantity:Titems,
      TotalPrice:Titems*data.price
    }])
    toast.success('Successfully Added item!')
  }


  // if(val.strContext.length > 0)
  // {
  // console.log("Cart items ==== ",
  //   val.strContext[0].id
  //   )
  // }

  return (
    <>
      <div className="bg-gray-700 inline-flex rounded-md shadow-sm  " role="group">
        <button
          type="button"
          onClick={() => {
            if (Titems > 0) {
              setTitems(Titems - 1);
            }
          }}
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          -
        </button>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
        Add Quantity
        </button>
        <button
          type="button"
          onClick={() => {
            setTitems(Titems + 1);
            setTprice(data.price * Titems)
          }}
          className="px-4 py-2 text-sm  font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          +
        </button>
      </div>
      <div className="flex flex-col">
        <p className="text-justify text-black font-light text-sm">{data.description}</p>
      </div>
{/* Table */}
<div className="  w-full ">
<table className="table w-full text-black font-light text-left" >
  <thead>
    <tr className="">
      <th className="">Item</th>
      <th className="">Quantity</th>
      <th className=" ">
        Price
        </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="text-left text-sm ">{data.title}</td>
      <td className="">{Titems}</td>
      <td className="text-red-500 font-bold">{ data.price*Titems}$</td>
    </tr>
    
  </tbody>
</table>
</div>

{/* Rating and Buy buttons */}
      <div className="flex justify-between w-full mt-5">
        <div className="flex items-center mt-3">
          <svg
            className="w-4 h-4 text-yellow-400 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <p className="ml-2 text-sm font-light text-gray-900 dark:text-black">
            {data.rating.rate}
          </p>
          <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
          <a
            href="#"
            className="text-sm font-light text-gray-900 underline hover:no-underline dark:text-black"
          >
            {data.rating.count} reviews
          </a>
        </div>

        <div className="flex">
        <button
          type="button"
          className="text-white flex   bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm  justify-center self-center items-center p-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 30 30"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          Shop
        </button>
        <button
          type="button"
          className="ml-4  text-white flex justify-center self-center items-center p-2 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={
               handleAddItemToCart
              
              }
        
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 30 30"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          Add to cart
        <Toaster />
        </button>
        </div>
       

      </div>
    </>
  );
}
