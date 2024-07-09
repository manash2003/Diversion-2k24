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
import { Context, userserver } from '../main';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaCartArrowDown } from "react-icons/fa";
import "../components/login.css"



const NavComponent=(props)=> {

  const {carts} = useSelector((state)=>state.allCart);
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
    } catch (error) {
      toast.error(error.response.data.message);
      setIsuserAuthenticated(true);
      setLoading(false);
    }
  };
  return (
    <Navbar fluid rounded className='w-full fixed z-40 top-0 left-0 shadow-xl  opacity-100 z-40 w-full top-0 left-0 border border-white bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400'>
      <NavbarBrand href="/"  style={{textDecoration:"none"}} >
        <img src="../src/assets/agrolife.jpg" className="mr-2 h-9 sm:h-9" alt="AgroChemicals" />
        <span className="self-center whitespace-nowrap text-3xl font-semibold text-white login">{props.title}</span>
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
        {          isuserAuthenticated ? (<p className='mr-2 font-sm mt-1'>Welcome,<span className='text-white'>{props.user}</span></p>):( <p></p>)
        }
      {isuserAuthenticated ? (
         <button onClick={logoutuserHandler} style={{textDecoration:"none"}} className="relative inline-flex items-center justify-center mt-0 p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-2.5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          User LogOut
          </span>
          </button>
        ) : (
          <Link to={"/userlogin"} style={{textDecoration:"none"}} className={` ${props.usercursor}  relative inline-flex items-center justify-center mt-0 p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium hover:text-black-600 text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-black dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800`}>
          <span className="relative px-2.5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          User LogIn
          </span>
          </Link>
        )}
        {isuserAuthenticated ? (   <NavLink to="/cart" className="mt-3 ml-3">
                    <div id='ex4'>
                        <span className='p1 fa-stack has-badge' data-count={carts.length}>
                        <FaCartArrowDown />
                        </span>
                    </div>
                    </NavLink>) : (
                      <p></p>
                    )}


        <NavbarToggle />
      </div> 


      <NavbarCollapse >
        <NavbarLink href="/"  style={{textDecoration:"none"}} className='text-bold text-2xl text-white login hover:text-fuchsia-300 '>
          Home
        </NavbarLink>
        <NavbarLink href="/whyus" style={{textDecoration:"none"}} className='text-bold text-2xl text-white login hover:text-fuchsia-300'>Why Us</NavbarLink>
        <NavbarLink href="/prdct" style={{textDecoration:"none"}} className='text-bold text-2xl text-white login hover:text-fuchsia-300'>Products</NavbarLink>
        {/* <NavbarLink href="#">Pricing</NavbarLink> */}
        <NavbarLink href="/contact" style={{textDecoration:"none"}} className='text-bold text-2xl text-white login hover:text-fuchsia-300'>Contact</NavbarLink>

      </NavbarCollapse>

        {/* <NavbarToggle /> */}
    </Navbar>
  );
}
export default NavComponent

