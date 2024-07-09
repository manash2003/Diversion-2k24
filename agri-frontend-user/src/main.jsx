import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createContext} from "react"
export const dealerserver = "http://localhost:4000/api/v1"
export const userserver = "http://localhost:5000/api/v1"
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux';
import { store } from './redux/app/store';
export const Context = createContext({isuserAuthenticated : false});

{/* by context provider if we pass the value we can use isauthenticated,setIsAuthenticated any where in app */}
const AppWrapper=()=>{
  const [isuserAuthenticated, setIsuserAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});


  return (
        <Context.Provider
        value={{
          isuserAuthenticated, 
          setIsuserAuthenticated,
          loading,
          setLoading,
          user, setUser,
        }}>
        <App />
        </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <Provider store={store}>     
        <AppWrapper/> 
        </Provider>
  </React.StrictMode>,
)
