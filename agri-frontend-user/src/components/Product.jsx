// import React, { useEffect, useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import "./style.css"
// import Card from 'react-bootstrap/Card';
// import { addToCart } from '../redux/features/cartSlice';
// import { useDispatch } from 'react-redux';
// import toast from 'react-hot-toast';
// import { dealerserver } from '../main';
// import CardsData from "./CardData";
// import axios from 'axios';


// const Product = () => {
//     // const [cartData, setCartData] = useState([]);
//     // const dispatch = useDispatch();
//     // useEffect(() => {
//     //     axios
//     //       .get(`${dealerserver}/task/all`, {
//     //         withCredentials: true,
//     //       })
//     //       .then((res) => {
//     //         setCartData(res.data.tasks);
//     //       })
//     //       .catch((e) => {
//     //         toast.error(e.response.data.message);
//     //       });
//     //   }, []);
//     const [cartData, setCartData] = useState(CardsData);


//     // add to cart 
//     const send = (e)=>{
//         dispatch(addToCart(e))
//         toast.success("Item added In Your Cart")
//     }
//     return (
//         <>
//          <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//             <section className='iteam_section mt-4 container'>
//                 <h2 className='px-4' style={{ fontWeight: 400 }}>Restaurants in Ahmedabad Open now</h2>
//                 <div className='row mt-2 d-flex justify-content-around align-items-center'>
//                     {
//                         cartData.map((element, index) => {
//                             return (
//                                 <>
//                                     <Card style={{ width: "22rem", border: "none" }} className='hove mb-4'>
//                                         <Card.Img variant='top' className='cd' src={element.imgdata}/>

//                                         <div className="card_body">
//                                             <div className="upper_data d-flex justify-content-between align-items-center">
//                                                 <h4 className='mt-2'>{element.title}</h4>
//                                                 <span>{element.rating}&nbsp;★</span>
//                                             </div>

//                                             <div className="lower_data d-flex justify-content-between ">
//                                                 <h5>{element.description}</h5>
//                                                 <span>₹ {element.price}</span>
//                                             </div>
//                                             <div className="extra"></div>

//                                             <div className="last_data d-flex justify-content-between align-items-center">
//                                                 <img src={element.arrimg} className='limg' alt="" />
//                                                 <Button style={{ width: "150px", background: "#ff3054db", border: "none" }} variant='outline-light'
//                                                     className='mt-2 mb-2'
//                                                     onClick={()=>send(element)}
//                                                 >Add TO Cart</Button>

//                                             </div>
//                                         </div>
//                                     </Card>
//                                 </>
//                             )
//                         })
//                     }

//                 </div>
//             </section>
//         </div>
//         </>
//     )
// }

// export default Product
import React, { useContext, useEffect, useState } from 'react'
import "./style.css"
import { Context, dealerserver } from '../main';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardsData from "./CardData";
import { addToCart } from '../redux/features/cartSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import axios from 'axios';


const Product = () => {
    const {isuserAuthenticated , setIsuserAuthenticated , loading , setLoading} = useContext(Context);
    const [cartData, setCartData] = useState([]);
    const dispatch = useDispatch();
        useEffect(() => {
        axios
          .get(`${dealerserver}/task/all`, {
            withCredentials: true,
          })
          .then((res) => {
            setCartData(res.data.tasks);
          })
          .catch((e) => {
            toast.error(e.response.data.message);
          });
      }, []);


    // add to cart 
    const send = (e)=>{
        dispatch(addToCart(e))
        toast.success("Item added In Your Cart")
    }
    return (
        <div>
         <div className="flex py-12 px-4 sm:px-6 lg:px-8 z-0">
            <section className='iteam_section mt-12 overflow-hidden  p-5 rounded '>
                <div className='row mt-2 justify-content-around align-items-center'>
                    {
                        cartData.map((element, index) => {
                            return (
                                <>
                                    <Card style={{ width: "22rem", border: "none" }} className="bg-fuchsia-200 hove mb-4 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
                                        <Card.Img variant='top' className='cd' src={element.img}/>

                                        <div className="card_body">
                                            <div className="upper_data d-flex justify-content-between align-items-center">
                                                <h4 className='mt-2 ml-2'>{element.title}</h4>
                                                {/* <span className='mr-2'>{element.rating}&nbsp;★</span> */}
                                            </div>

                                            <div className="lower_data d-flex justify-content-between ">
                                                <h5>{element.description}</h5>
                                                <span className='mr-2 font-extrabold'>₹ {element.price}</span>
                                            </div>
                                            <div className="extra"></div>

                                            <div className="last_data d-flex justify-content-between align-items-center">
                                                <img src={element.arrimg} className='limg' alt="" />
                                                <Button style={{ width: "150px", background: "#ff3054db", border: "none" }} variant='outline-light'
                                                    className='mt-2 mb-2'
                                                    disabled={loading}
                                                    onClick={()=>send(element)}
                                                >Add TO Cart</Button>
                                                <img src={element.delimg} className='laimg' alt="" />

                                            </div>
                                        </div>
                                    </Card>
                                </>
                            )
                        })
                    }

                </div>
            </section>
        </div>
        </div>
    )
}

export default Product