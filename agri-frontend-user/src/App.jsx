
import ContactPage from "./components/Contact"
import NavComponent from "./components/Navbar"
import React, { useState } from 'react'
import UserSection from "./components/UserSection"
import { Toaster } from "react-hot-toast";
import { Context, userserver} from "./main";
import axios from "axios";
import { useContext, useEffect } from "react";
import Loader from "react-js-loader";
import Sucess from './components/Sucess';
import Cancel from './components/Cancel';
import CartDetails from './components/CartDetails';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import WhyUs from "./components/whyUs"
import Userlogin from "./components/Userlogin"
import Usersignup from "./components/Usersignup"
import Product from "./components/Product";

function App() {
  const {user,setUser,isuserAuthenticated, setIsuserAuthenticated}= useContext(Context)
     useEffect(()=>{
    axios.get(`${userserver}/user/me` , {
      withCredentials:true,
    }).then((res)=>{
      console.log(res.data);
      setUser(res.data.user);
      setIsuserAuthenticated(true);
    }).catch((error)=>{
      setUser({});
      setIsuserAuthenticated(false);
  
    })
  } , [])


  // console.log(dealer)
return (
    <div className="bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400">
<Router>

 {
    isuserAuthenticated ? ( <NavComponent title="AGRO For Users" user ={user.name}/> ) : (  <NavComponent title="AGRO For Users" /> )
 }

<Routes>
<Route path="/" element={<UserSection/>} />
{/* <Route path="/dealer" element={<DealerSection/>} /> */}
  <Route path="/contact" element ={<ContactPage/>}/>
  {/* <Route  path="/dealerlogin" element={<LoginForm/>}/> */}
  <Route  path="/userlogin" element={<Userlogin/>}/>
  {/* <Route  path = "/dealersignup" element ={<Signup/>}/> */}
  <Route  path = "/usersignup" element ={<Usersignup/>}/>
  <Route  path = "/prdct" element ={<Product/>}/>
  <Route path="/whyus" element={ <WhyUs/>}/>
  <Route  path='/cart' element={<CartDetails />}/>
  <Route  path='/sucess' element={<Sucess />}/>
  <Route  path='/cancel' element={<Cancel />}/>
</Routes>
<Toaster/>
</Router>
    </div>
  )
}

export default App
