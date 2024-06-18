import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { DropdownLinks, Menu } from "../../Data/data";
const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-150 relative z-40">
      {/* upper navbar  */}
      <div className="bg-primary/40 py-3">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2 ">
              <img src={Logo} alt="logo" className="w-10" />
              Shopsy
            </a>
          </div>
          {/* search bar  */}
          <div className="flex gap-5 items-center">
            <div className="group relative hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-orange-400"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 right-3 -translate-y-1/2" />
            </div>

            <button
              onClick={() => {
                alert("order is not available");
              }}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-150 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="cursor-pointer" />
            </button>

            {/* dark mode init  */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>

      {/* items  */}
      <div className=" justify-center py-4 px-3 hidden sm:flex">
        <ul className="hidden sm:flex items-center gap-5 ">
          {Menu.map((data, i) => {
            return (
              <li key={i}>
                <a
                  href={data.link}
                  className="px-4 hover:text-primary  transition-all duration-100"
                >
                  {data.name}
                </a>
              </li>
            );
          })}

          {/* dropdown  */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-3 group">
              Trending
              <span>
                <FaCaretDown className="transistion-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block  w-[250px] -left-5 rounded-0md bg-white p-2 text-black dark:bg-gray-950 dark:text-white">
              <ul>
                {DropdownLinks.map((data, i) => {
                  return (
                    <li key={i}>
                      <a
                        href={data.link}
                        className=" hover:text-primary hover:bg-gray-100 py-4 px-4 transition-all duration-100 inline-block w-full dark:hover:bg-gray-50/40"
                      >
                        {data.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
