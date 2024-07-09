import React, { useContext, useState } from 'react'
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import {
  Avatar,
  Button,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react';
import LoginForm from './DealerLogin';
import { Context, dealerserver, userserver } from '../main';
import axios from 'axios';



const NavComponent=(props)=> {
  const { isdealerAuthenticated, setIsdealerAuthenticated ,loading , setLoading ,isuserAuthenticated, setIsuserAuthenticated} =useContext(Context);
  // const logoutdealerHandler = async () => {
  //   setLoading(true);
  //   try {
  //     await axios.get(`${dealerserver}/dealer/logout`, {
  //       withCredentials: true,
  //     });
  
  //     toast.success("Dealer Logged Out Successfully");
  //     setIsdealerAuthenticated(false);
  //     setLoading(false);
  //     window.location.reload(false);
  //   } catch (error) {
  //     toast.error(error.response.data.message);
  //     setIsdealerAuthenticated(true);
  //     setLoading(false);
  //   }
  // };
  const logoutuserHandler = async () => {
    setLoading(true);
    try {
      await axios.get(`${userserver}/user/logout`, {
        withCredentials: true,
      });
  
      toast.success("User Logged Out Successfully");
      setIsuserAuthenticated(false);
      setLoading(false);
      window.location.reload(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsuserAuthenticated(true);
      setLoading(false);
    }
  };
  return (
    <Navbar fluid rounded className='fixed w-full top-0 left-0 shadow-xl  bg-gradient-to-b from-violet-200 to-violet-300'>
      <NavbarBrand href="https://flowbite-react.com">
        <img src="../src/assets/agrolife.jpg" className="mr-2 h-9 sm:h-9" alt="AgroChemicals" />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-black">{props.title}</span>
      </NavbarBrand>
      <div className="flex md:order-3">
       {/* <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <DropdownHeader>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </DropdownHeader>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>*/}
        {
          isuserAuthenticated ? (<p className='mr-2 font-sm mt-1'>Welcome,<span className='text-red-600'>{props.user}</span></p>):( <p></p>)
        }
      {isuserAuthenticated ? (
         <button onClick={logoutuserHandler}  className="relative inline-flex items-center justify-center mt-0 p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-2.5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          User LogOut
          </span>
          </button>
        ) : (
          <Link to={"/userlogin"} className={` ${props.usercursor} relative inline-flex items-center justify-center mt-0 p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800`}>
          <span className="relative px-2.5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          User LogIn
          </span>
          </Link>
        )}



{/* [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
          <button id="dropdownSmallButton" data-dropdown-toggle="dropdownSmall" class="inline-flex items-center px-2 py-2 mb-3 me-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg md:mb-0 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"><svg class="w-3 h-2 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m1 1 4 4 4-4"/>
</svg>
</button>

<div id="dropdownSmall" class="z-10 hidden bg-violet-200 divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600">
    <div class=" flex justify-center align-center text-sm text-gray-900 dark:text-white">
    <Link to={"/login"} className="  w-auto relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative  w-auto px-2.5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Dealer LogIn
          </span>
    </Link>
    </div>
    {isAuthenticated ? (
       <div class=" flex justify-center align-center text-sm text-gray-900 dark:text-white">
         <button onClick={logoutHandler} className="relative inline-flex items-center justify-center mt-0 p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-2.5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
           User LogOut
          </span>
          </button>
          </div>
        ) : (
          <div class=" flex justify-center align-center text-sm text-gray-900 dark:text-white">
          <Link to={"/login"} className="relative inline-flex items-center justify-center mt-0 p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-3.5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          User LogIn
          </span>
          </Link>
          </div>
        )}
</div> */}




        {/* </NavbarLink> */}
        <NavbarToggle />
      </div> 


      <NavbarCollapse >
        <NavbarLink href="/" active className='text-lg text-bold hover:text-violet-900 hover:text-xl'>
          Home
        </NavbarLink>
        <NavbarLink href="/whyus" className='text-lg text-bold hover:text-violet-900 hover:text-xl'>Why Us</NavbarLink>
        <NavbarLink href="#" className='text-lg text-bold hover:text-violet-900 hover:text-xl'>Products</NavbarLink>
        {/* <NavbarLink href="#">Pricing</NavbarLink> */}
        <NavbarLink href="/contact" className='text-lg text-bold hover:text-violet-900 '>Contact</NavbarLink>

      </NavbarCollapse>

        {/* <NavbarToggle /> */}
    </Navbar>
  );
}
export default NavComponent;