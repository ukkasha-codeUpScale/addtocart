// components/Navbar.js or components/Navbar.tsx
import Link from "next/link";
import Sidebar from "../sidebar/sidebar";
import React, { useState, useContext, useEffect } from "react";
import { cartDataContext } from "../Layout";

export default function Navbar(props : any) {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const val = useContext(cartDataContext);

  // useEffect(() => {
  //   const data = localStorage.getItem("username");
  //   if (data !== null) {
  //     setLocalData(data);
  //   }
  // }, []);

  return (
    <nav className="bg-gray-700 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href={"/"} className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-gray-700 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-700 text-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="text-white">
              <Link
                href={"/"}
                className="block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="text-white">
              <Link
                href={"/aboutus"}
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href={"/contactus"}
                className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>
            {props.locaData !== null ? (
              <li className="relative group text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 font-medium rounded-lg text-sm  p-2.5  items-start dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <a href="#" className="hover:text-blue-500">
                  Hi {props.locaData}
                </a>
                <div className="hidden absolute z-50 mt-1 left-0 space-y-2 bg-white text-gray-900 rounded-lg group-hover:block ">
                  <li>
                    <Link
                      href={"/users/dashboard"}
                      className="block px-4 py-2 hover:bg-blue-500 rounded-lg hover:text-white"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/users/settings"}
                      className="block px-4 py-2 hover:bg-blue-500 rounded-lg hover:text-white"
                    >
                      Settings
                    </Link>
                  </li>
                  <li>
                    <Link
                    onClick={()=>{localStorage.clear()
                      window.location.reload();
                    }}
                      href={"/"}
                      className="block px-4 py-2 hover:bg-blue-500 rounded-lg hover:text-white"
                    >
                      Log Out
                    </Link>
                  </li>
                </div>
              </li>
            ) : (
              <li>
                <Link
                  href={"/login"}
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Login
                </Link>
              </li>
            )}

            <li>
              <button
                onClick={() => {
                  setShowSidebar(!showSidebar);
                }}
              >
                <div className="relative py-2">
                  {val.strContext.length > 0 ? (
                    <div className="t-0 absolute left-3">
                      <p className="flex h-1 w-1 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                        {val.strContext.length}
                      </p>
                    </div>
                  ) : null}

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
                </div>
              </button>

              <div
                className={`top-0 right-0 w-[35vw] bg-gray-900  px-5 py-10 text-white fixed min-h-screen z-40  ease-in-out duration-300 ${
                  showSidebar ? "translate-x-0 " : "translate-x-full"
                }`}
              >
                <Sidebar setShowSidebar={setShowSidebar} />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
