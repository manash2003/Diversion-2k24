import React, { useContext, useEffect, useState } from 'react'
import { Context, dealerserver } from '../main';
import axios from 'axios';
import NavComponent from './Navbar';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import "../components/login.css"

const DealerSection = () => {
  const { isdealerAuthenticated } = useContext(Context);
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${dealerserver}/task/new`,
        {
          img,
          title,
          description,
          price
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    setImg("")
      setTitle("");
      setDescription("");
      setPrice("")
      toast.success(data.message);
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };
  if (!isdealerAuthenticated) return <Navigate to={"/dealerlogin"} />;
  return (
    <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
          <div class="background">
            <div class="shape"></div>
          <div class="shape"></div>
          </div>
    <div className="absolute bg-transparent p-10 w-96 rounded-lg shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
      <div className="text-center">
        <h2 className="mt-6 login text-center text-3xl font-extrabold text-white">
          Add New Product
        </h2>
      </div>
      <form className="mt-8 space-y-2" onSubmit={submitHandler}>
        {/* Add your form fields here */}
        <div>
          <label htmlFor="image" className="sr-only">
            Image
          </label>
          <input
            id="img"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            name="img"
            type="link"
            autoComplete="image"
            required
            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-500 placeholder-gray-400focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            placeholder="Image Source"
          />
        </div>
        <div>
          <label htmlFor="title" className="sr-only">
            Title
          </label>
          <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
            id="title"
            name="title"
            type="title"
            autoComplete="new-title"
            required
            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-500 placeholder-gray-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            placeholder="Product Name"
          />
        </div>
        <div>
          <label htmlFor="description" className="sr-only">
          Description
          </label>
          <input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
            id="description"
            name="description"
            type="description"
            autoComplete="new-description"
            required
            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-500 placeholder-gray-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            placeholder="Product Description"
          />
        </div>
        <div>
          <label htmlFor="price" className="sr-only">
          Price
          </label>
          <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
            id="price"
            name="price"
            type="price"
            autoComplete="price"
            required
            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-500 placeholder-gray-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            placeholder="Product price"
          />
        </div>

        {/* Add your sign up button */}
        <div>
          <button
            type="submit"
            disabled={loading}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-900 hover:bg-violet-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
          Add Item
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default DealerSection