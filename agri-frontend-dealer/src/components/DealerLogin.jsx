import React, { useContext, useEffect, useState } from 'react'
import {Link, Navigate} from "react-router-dom"
import { Context , dealerserver } from '../main';
import toast from 'react-hot-toast';
import axios from "axios"
import "../components/login.css"

const LoginForm = () => {
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const {isdealerAuthenticated , setIsdealerAuthenticated , loading , setLoading} = useContext(Context);
  const submitHandler=async (e)=>{
    e.preventDefault(); ///prevent form reload
    setLoading(true);
    try{

       const {data}=await axios.post(`${dealerserver}/dealer/login` , {
             email , password
        }, {
            //config
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials: true,
        })
        toast.success(data.message);
        setIsdealerAuthenticated(true);
        setLoading(false);

    }catch(error){
      toast.error(error.response.data.message);
      console.log(error);
      setIsdealerAuthenticated(false);
      setLoading(false);
    }
};

if (isdealerAuthenticated) return <Navigate to={"/"} />;



  return (

    <div className="min-h-screen flex items-center justify-center mt py-12 px-4 sm:px-6 lg:px-8">
      <div class="background">
            <div class="shape"></div>
            <div class="shape"></div>
      </div>
      <div className=" form opacity-100 bg-transparent z-40 absolute p-10 w-96 rounded-lg shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
        <div className="text-center ">
          <h2 className="mt-6 text-center text-4xl font-extrabold  login">
           Dealer Login
          </h2>
        </div>
        <form className="mt-8 space-y-2 form" onSubmit={submitHandler}>
          {/* Add your form fields here */}
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-500 placeholder-gray-400focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-500 placeholder-gray-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              placeholder="Password"
            />
          </div>

          {/* Add your sign up button */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-fuchsia-500 hover:bg-fuchsia-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
            Dealer Log In
            </button>
            <p className="text-center mb-6 font-bold">New here? <a href="/dealersignup" className='text-white underline font-bold hover:text-black'>Create New Dealer Account</a></p>
          </div>
        </form>
        
      </div>
      <div class="custom-shape-divider-bottom-1706941622">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
    </div>
  );
};

export default LoginForm;
