// components/Grid.js or components/Grid.tsx
import { useState } from "react";
import Link from "next/link";
import { useContext } from "react";
import { cartDataContext } from "@/components/Layout";


const itemsPerPage = 8;

const Grid = ({ items }: any) => {
  
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = items.slice(startIndex, endIndex);

  const col1 = items.slice(startIndex, endIndex - startIndex);
  const col2 = items.slice(endIndex - startIndex, endIndex);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const goToPage = (page: any) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 mt-5 ">
        {/* <cartDataContext.Consumer>
          {(itm)=>{
            return(
              <>
              <p className="text-black">this is consumer ,{itm}</p>
              </>
            );
          }}
        </cartDataContext.Consumer> */}
        {currentItems.map((item: any, index: any) => (
          <div key={index} className="block max-w-[18rem] ">
            <Link href={`./postsGrid/${item.id}`}>
              <div className="relative overflow-hidden bg-cover  bg-no-repeat  rounded-lg bg-white shadow-lg shadow-gray-500  grayscale-0
                  transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none 
                  ">
                <img
                  className="object-contain h-48 w-96  rounded-t-lg"
                  src={item.image}
                  alt={item.title}
                />
              </div>

              <div className="p-2 box-content">
                <p className=" text-md font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-sm dark:text-black">
                  {item.title}
                </p>
                <div className="flex justify-between">
                    <div className="flex items-center">
                      
                      
                      
                      
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
            {item.rating.rate}
          </p>
                    
                    
                    </div>
                    <div>
                      <span className="text-green-900 font-light text-sm">{item.price}$</span>
                    </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>





      <div className="flex justify-center mt-4 ">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index + 1)}
            className={`mx-1 px-4  py-2 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-black focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-black dark:hover:bg-gray-700${
              currentPage === index + 1
                ? "bg-gray-500 text-white"
                : "bg-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Grid;
