// import React from 'react'

// const Usersignup = () => {
//   return (
//     <div>Userignup</div>
//   )
// }

// export default Usersignup
// src/components/Signup.js
import React, { useContext, useState } from 'react'
import {Link ,Navigate} from "react-router-dom"
import axios from "axios"
import toast from 'react-hot-toast'
import {Context, dealerserver, userserver } from "../main"
import { Audio } from 'react-loader-spinner'

const Usersignup = () => {
  const [name,setName]= useState("");
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const [pannumber,setPannumber]= useState("");
  const [cnfrmpassword,setCnfrmPassword]= useState(""); 
  const [phone,setPhone]= useState(""); 


  const {isuserAuthenticated , setIsuserAuthenticated ,loading , setLoading} = useContext(Context);
  const submitHandler=async (e)=>{
      e.preventDefault(); ///prevent form reload
      setLoading(true);
      try{
          console.log(name , email , password)
          ///////now for backend come form submit is a post request
          /////base url exported from main.jsx
         const {data}=await axios.post(`${userserver}/user/new` , {
              name , email ,pannumber,phone,password
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
        setLoading(flase);
        // window.location.reload(false);
      }
  };
  if (isuserAuthenticated) return <Navigate to={"/user"} />;

  return (
    <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-transparent p-10 rounded w-96 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
        <div className="text-center">
          <h2 className=" text-center text-3xl font-extrabold text-black">
          Create an User Account
          </h2>
          <a href="/userlogin" className="text-center mt-1 text-white font-bold hover:text-black">Back to User Login &#8592;</a>
        </div>
        <form className="mt-8 space-y-2" onSubmit={submitHandler}>
          {/* Add your form fields here */}
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              name="name"
              type="name"
              autoComplete="name"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-500 placeholder-gray-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="Pan" className="sr-only">
              Pan Number
            </label>
            <input
              value={pannumber}
              onChange={(e) => setPannumber(e.target.value)}
              id="pannumber"
              name="pannumber"
              type="pannumber"
              autoComplete="pannumber"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              placeholder="Pan Number"
            />
          </div>
          <div>
            <label htmlFor="Phone Number" className="sr-only">
              Phone Number
            </label>
            <input
                                                        value={phone}
                                                        onChange={(e) => setPhone(e.target.value)}
              id="phone"
              name="phone"
              type="phone"
              autoComplete="phone"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-500 placeholder-gray-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              placeholder="Phone Number"
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
          <div>
            <label htmlFor="confirmPassword" className="sr-only">
              Confirm Password
            </label>
            <input
                                                        value={cnfrmpassword}
                                                        onChange={(e) => setCnfrmPassword(e.target.value)}
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-500 placeholder-gray-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              placeholder="Confirm Password"
            />
          </div>
          {
              password != cnfrmpassword ?(<p className='text-red-600 font-semibold'>Password Does't Match</p>): (<p></p>)
            }
          {/* Add your sign up button */}
          <div>
            <button
              type="submit"

              disabled={password != cnfrmpassword }
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md bg-violet-900 hover:bg-violet-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
            Sign up
            </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Usersignup;