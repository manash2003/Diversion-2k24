// src/components/Signup.js
import React, { useContext, useState } from 'react'
import {Link ,Navigate} from "react-router-dom"
import axios from "axios"
import toast from 'react-hot-toast'
import {Context, dealerserver } from "../main"
import "../components/login.css"

const DealerSignup = () => {
  const [name,setName]= useState("");
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const [pannumber,setPannumber]= useState("");
  const [license,setLicense]= useState("");
  const [cnfrmpassword,setCnfrmPassword]= useState(""); 
  const [phone,setPhone]= useState(""); 


  const {isdealerAuthenticated , setIsdealerAuthenticated ,loading , setLoading} = useContext(Context);
  const submitHandler=async (e)=>{
      e.preventDefault(); ///prevent form reload
      setLoading(true);
      try{
          console.log(name , email , password)
          ///////now for backend come form submit is a post request
          /////base url exported from main.jsx
         const {data}=await axios.post(`${dealerserver}/dealer/new` , {
              name , email ,pannumber,license,phone,password
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
          // window.location.reload(false);

      }catch(error){
        toast.error(error.response.data.message);
        console.log(error);
        setIsdealerAuthenticated(false);
        setLoading(flase);
        // window.location.reload(false);


      }
  };
  if (isdealerAuthenticated) return <Navigate to={"/"} />;

  return (
    <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
            <div class="background">
            <div class="shape"></div>
            <div class="shape"></div>
      </div>
      <div className="absolute bg-transparent p-8 rounded w-96 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
        <div className="text-center">
          <h2 className=" login text-center text-3xl font-extrabold">
            Create an Dealer Account
          </h2>
          <a href="/dealerlogin" className="text-center mt-1 text-white font-bold hover:text-black">Back to Dealer Login &#8592;</a>
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
            <label htmlFor="License" className="sr-only">
              License
            </label>
            <input
                                value={license}
                                onChange={(e) => setLicense(e.target.value)}
              id="license"
              name="license"
              type="license"
              autoComplete="license"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-500 placeholder-gray-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              placeholder="License"
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
              password != cnfrmpassword ?(<p className='text-white font-semibold'>Password Does't Match</p>): (<p></p>)
            }
          {/* Add your sign up button */}
          <div>
            <button
              type="submit"
              id="signbtn"
              disabled={password != cnfrmpassword }
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-bold rounded-md text-white bg-fuchsia-500 hover:bg-fuchsia-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
            Sign up
            </button>

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

export default DealerSignup;
