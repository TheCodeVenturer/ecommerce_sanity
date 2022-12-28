import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import { AiFillCloseCircle } from "react-icons/ai";
import {useStateContext} from '../context/StateContext';
const Success = () => {
    const {setCartItems,setTotalPrice,setTotalQuantities} =useStateContext();
    useEffect(()=>{
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
    },[]);
  return (
    <div>
        <div className='success-wrapper'>
            <div className='success'>
                <p className='icon' style={{color:'red'}}>
                    <AiFillCloseCircle/>
                </p>
                <h2> You Cancelled on Checkout</h2>
                <p className='description'>
                    For any queries Contact us 
                    <a className='email' href="mailto:order@gmail.com">order@gmail.com</a>
                </p>
                <Link href='/'>
                    <button type="button" width="300px" className='btn'>
                        Coninue Shopping
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Success;