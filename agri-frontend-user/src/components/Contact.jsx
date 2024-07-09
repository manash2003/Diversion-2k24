// src/components/Contact.js
import React , {useContext, useEffect, useState} from "react";
import { Context, userserver } from "../main";
import NavComponent from "./Navbar";
import axios from "axios";
import "../components/login.css"

const ContactPage = () => {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = async (e) => {
    await setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  return (
    <>
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="background">
            <div class="shape"></div>
            <div class="shape"></div>
      </div>
      <div className=" form opacity-100 z-40 bg-transparent p-5 rounded w-96 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
        <div className="text-center">
          <h2 className="login text-white mt-6 text-center text-3xl font-extrabold text-black">
            Contact Us
          </h2>
        </div>
        <form className="mt-8 space-y-2" action="https://formsubmit.co/90d9a2c556054d06574a7969739a169b" method="POST">
          {/* Add your contact form fields here */}
          <div>
            <label htmlFor="name" className="sr-only">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              autoComplete="name"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-500 placeholder-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
             onChange={handleChange}
              autoComplete="email"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-500 placeholder-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="2"
              value={formData.message}
            onChange={handleChange}
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-500 placeholder-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              placeholder="Your Message"
            ></textarea>
          </div>

          {/* Add your submit button */}
          <div>
            <button
              type="submit"
              className="mb-6 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default ContactPage;