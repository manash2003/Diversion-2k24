// import React from 'react'

// const Userlogin = () => {
//   return (
//     <div>Userlogin</div>
//   )
// }

// export default Userlogin
import React, { useContext, useEffect, useState } from 'react'
import {Link, Navigate} from "react-router-dom"
import { Context , userserver } from '../main';
import toast from 'react-hot-toast';
import axios from "axios"

const Userlogin = () => {
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const {isuserAuthenticated , setIsuserAuthenticated , loading , setLoading} = useContext(Context);
  const submitHandler=async (e)=>{
    e.preventDefault(); ///prevent form reload
    setLoading(true);
    try{
        // console.log(name , email , password)
        ///////now for backend come form submit is a post request
        /////base url exported from main.jsx
       const {data}=await axios.post(`${userserver}/user/login` , {
             email , password
        }, {
            //config
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials: true,
        })
        toast.success(data.message);
        setIsuserAuthenticated(true);
        setLoading(false);
        // window.location.reload(false);

    }catch(error){
      toast.error(error.response.data.message);
      console.log(error);
      setIsuserAuthenticated(false);
      setLoading(false);
      // window.location.reload(false);
    }
};

if (isuserAuthenticated) return <Navigate to={"/user"} />;



  return (

    <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-transparent p-10 w-96 rounded-lg shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
        <div className="text-center">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-black">
            User Login 
          </h2>
        </div>
        <form className="mt-8 space-y-2" onSubmit={submitHandler}>
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
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-900 hover:bg-violet-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
            User Log In
            </button>
            <p className="text-center mb-6">New here? <a href="/usersignup" className='text-white underline font-bold hover:text-black'>Create New User Account</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Userlogin;