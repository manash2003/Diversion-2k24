import React, { useContext, useEffect } from 'react'
import { Context, dealerserver, userserver } from '../main';
import axios from 'axios';
import NavComponent from './Navbar';

const UserSection = () => {
  const {user ,setUser , setIsuserAuthenticated,isuserAuthenticated, setDealer ,setIsdealerAuthenticated , loading , setLoading} = useContext(Context);
  useEffect(()=>{
axios.get(`${userserver}/user/me` , {
withCredentials:true,
}).then((res)=>{
// console.log(res.data);
setUser(res.data.user);
setIsuserAuthenticated(true);
}).catch((error)=>{
setUser({});
setIsuserAuthenticated(false);

})
} , [])
  return (
    <>
        <div className='mt-20'>
        {
            isuserAuthenticated ? <NavComponent title="AGRO" user={user.name} dealercursor="cursor-not-allowed" /> : <NavComponent title="AGRO"/>
        }
        
        <h1>{user.name}</h1>
    </div>
    </>

  )
}
export default UserSection;
