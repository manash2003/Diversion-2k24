// import React, { useEffect, useState } from 'react'
// import { dealerserver } from '../main';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import TodoItem from './Todoitem';

// const Product = () => {
//     const [tasks, setTasks] = useState([]);
//     const [refresh, setRefresh] = useState(false);
//     useEffect(() => {
//         axios
//           .get(`${dealerserver}/task/my`, {
//             withCredentials: true,
//           })
//           .then((res) => {
//             setTasks(res.data.tasks);
//           })
//           .catch((e) => {
//             toast.error(e.response.data.message);
//           });
//       }, []);
//   return (
//     <div>
//       <h1>hijhhdjfh</h1>
//     </div>
//   )
// }

// export default Product
import React, { useEffect, useState } from 'react'
import "./style.css"
import "../components/login.css"
import { dealerserver } from '../main';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import CardsData from "./CardData";
import { addToCart } from '../redux/features/cartSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import axios from 'axios';


const Product = () => {
    const [cartData, setCartData] = useState([]);
    const dispatch = useDispatch();
        useEffect(() => {
        axios
          .get(`${dealerserver}/task/my`, {
            withCredentials: true,
          })
          .then((res) => {
            setCartData(res.data.tasks);
          })
          .catch((e) => {
            toast.error(e.response.data.message);
          });
      }, []);

    return (
        <>
        <div className='min-h-screen flex flex-row flex-wrap justify-center mt py-12 px-4 sm:px-6 lg:px-8'>
            <div className='opacity-100 bg-transparent z-20 p-10 w-96 rounded-lg'>
            <section className='iteam_section mt-12 container'>
                <h2 className='px-4 text-3xl text-white login text-center' style={{ fontWeight: 400 }}>Your Products</h2>
                <div className='ml-2 mt-2 d-flex justify-content-around align-items-center flex flex-wrap'>
                    {
                        cartData.map((element, index) => {
                            return (
                                <>
                                    <Card style={{ width: "22rem", border: "none" }} className='hove mb-4 border border-white'>
                                        <Card.Img variant='top' className='cd ml-2 items-center' src={element.img}/>

                                        <div className="card_body">
                                            <div className="upper_data d-flex justify-content-between align-items-center">
                                                <h4 className='mt-2 ml-2 login text-2xl text-white'>{element.title}</h4>
                                                {/* <span>{element.rating}&nbsp;★</span> */}
                                            </div>

                                            <div className="lower_data d-flex justify-content-between ">
                                                <h5 className='login'>{element.description}</h5>
                                                <span className='text-white'>₹ {element.price}</span>
                                            </div>
                                            <div className="extra"></div>

                                            <div className="last_data d-flex justify-content-between align-items-center">
                                                <img src={element.arrimg} className='limg' alt="" />
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
        </div></>
    )
}

export default Product