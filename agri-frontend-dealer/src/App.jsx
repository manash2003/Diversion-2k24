import NavComponent from "./components/Navbar"
import React, { useState } from 'react'
import LoginForm from "./components/DealerLogin"
import Signup from "./components/DealerSignup"
import { Toaster } from "react-hot-toast";
import { Context, dealerserver} from "./main";
import axios from "axios";
import { useContext, useEffect } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import DealerSection from "./components/DealerSection"
import Product from "./components/Product";

function App() {
  const {dealer,setDealer,isdealerAuthenticated, setIsdealerAuthenticated}= useContext(Context)
     useEffect(()=>{
    axios.get(`${dealerserver}/dealer/me` , {
      withCredentials:true,
    }).then((res)=>{
      console.log(res.data);
      setDealer(res.data.user);
      setIsdealerAuthenticated(true);
    }).catch((error)=>{
      setDealer({});
      setIsdealerAuthenticated(false);
  
    })
  } , [])


  // console.log(dealer)
return (
    <div className="bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400">
<Router>

 {
    isdealerAuthenticated ? ( <NavComponent title="AGRO For Dealer" dealer={dealer.name}/> ) : (  <NavComponent title="AGRO For Dealer" /> )
 }

<Routes>
<Route path="/" element={<DealerSection/>} />
  <Route  path="/dealerlogin" element={<LoginForm/>}/>
  <Route  path = "/dealersignup" element ={<Signup/>}/>
  <Route  path = "/prdct" element ={<Product/>}/>
</Routes>
<Toaster/>
</Router>
    </div>
  )
}

export default App

