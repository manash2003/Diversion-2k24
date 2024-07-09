import React, { useContext, useEffect } from 'react'
import { Context, dealerserver } from '../main';
import axios from 'axios';
import NavComponent from './Navbar';

const DealerSection = () => {
    const {dealer ,isdealerAuthenticated , setDealer ,setIsdealerAuthenticated , loading , setLoading} = useContext(Context);
        useEffect(()=>{
    axios.get(`${dealerserver}/dealer/me` , {
      withCredentials:true,
    }).then((res)=>{
      // console.log(res.data);
      setDealer(res.data.dealer);
      setIsdealerAuthenticated(true);
    }).catch((error)=>{
      setDealer({});
      setIsdealerAuthenticated(false);
  
    })
  } , [])
  return (
    
    <div className='mt-20'>
        {
            isdealerAuthenticated ? <NavComponent title="AGRO" dealer={dealer.name} usercursor="cursor-not-allowed"/> : <NavComponent title="AGRO"/>
        }
        
        <h1>{dealer.name}</h1>
    </div>
  )
}

export default DealerSection