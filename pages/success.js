import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import {BsBagCheckFill} from 'react-icons/bs';

import {useStateContext} from '../context/StateContext';
import { runFireworks } from '../lib/utils';
const Success = () => {
    const {setCartItems,setTotalPrice,setTotalQuantities} =useStateContext();
    useEffect(()=>{
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();
    },[]);
  return (
    <div>
        <div className='success-wrapper'>
            <div className='success'>
                <p className='icon'>
                    <BsBagCheckFill/>
                </p>
                <h2> Thank You For Your Order</h2>
                <p className='email-msg'>Check Your email inbox for the receipt.</p>
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