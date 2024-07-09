import React, { useContext, useState } from 'react'
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "../components/login.css"

import "../components/navbar.css"


import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react';
import { Context, dealerserver} from '../main';
import axios from 'axios';



const NavComponent=(props)=> {
  const { isdealerAuthenticated, setIsdealerAuthenticated , loading , setLoading} =useContext(Context);
  const logoutdealerHandler = async () => {
    setLoading(true);
    try {
      await axios.get(`${dealerserver}/dealer/logout`, {
        withCredentials: true,
      });
  
      toast.success("Dealer Logged Out Successfully");
      setIsdealerAuthenticated(false);
      setLoading(false);
      window.location.reload(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsdealerAuthenticated(true);
      setLoading(false);
    }
  };
  return (
    <>
    <Navbar fluid rounded className='fixed opacity-100 z-40 w-full top-0 left-0 border border-white shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400' id='nav'>
      <NavbarBrand href="https://flowbite-react.com">
        <img src="../src/assets/agrolife.jpg" className="mr-2 h-9 sm:h-9" alt="AgroChemicals" />
        <span className="self-center whitespace-nowrap text-3xl font-semibold text-white login">{props.title}</span>
      </NavbarBrand>
      <div className="flex md:order-3">
        {
          isdealerAuthenticated ? (<p className='mr-2 font-sm mt-1'>Welcome,<span className='text-white font-bold'>{props.dealer}</span></p>):( <p></p>)
        }
      {isdealerAuthenticated ? (
         <button onClick={logoutdealerHandler}  className="relative inline-flex items-center justify-center mt-0 p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br group-hover:from-red-600 group-hover:to-red-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-2.5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Dealer LogOut
          </span>
          </button>
        ) : (
          <Link to={"/dealerlogin"} className={` ${props.usercursor} relative inline-flex items-center justify-center mt-0 p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br  group-hover:from-red-600 group-hover:to-red-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800`}>
          <span className="relative px-2.5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Dealer LogIn
          </span>
          </Link>
        )}

        {/* </NavbarLink> */}
        <NavbarToggle />
      </div> 


      <NavbarCollapse >
        <NavbarLink href="/" className='text-bold text-2xl text-white login hover:text-fuchsia-300'>
          Home
        </NavbarLink>
        {isdealerAuthenticated ? ( <NavbarLink href="/prdct" className=' text-bold text-2xl text-white login'>Products</NavbarLink>) : (<NavbarLink href="#" className='cursor-not-allowed text-bold text-2xl  text-white login'>Products</NavbarLink>)}
       


      </NavbarCollapse>

        {/* <NavbarToggle /> */}
    </Navbar>
</>
  );
}
export default NavComponent;
