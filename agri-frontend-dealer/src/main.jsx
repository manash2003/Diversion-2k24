import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { store } from './redux/app/store';
import {createContext} from "react"
export const dealerserver = "http://localhost:4000/api/v1"
// export const userserver = "http://localhost:5000/api/v1"
export const Context = createContext({isdealerAuthenticated : false});

{/* by context provider if we pass the value we can use isauthenticated,setIsAuthenticated any where in app */}
const AppWrapper=()=>{
  const [isdealerAuthenticated, setIsdealerAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dealer, setDealer] = useState({});


  return (
        <Context.Provider
        value={{
          isdealerAuthenticated, 
          setIsdealerAuthenticated,
          loading,
          setLoading,
          dealer, setDealer
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
  </React.StrictMode>
)