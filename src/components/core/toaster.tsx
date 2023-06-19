"use client"
import useBillStore from '@/store/bill.store';
import useChargeAndInternetStore from '@/store/charge-internet';
import useInquiryStore from '@/store/inquiry';
import useAuthStore from '@/store/login';
import useOrderStore from '@/store/order.store';
import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';
import 'react-toastify/dist/ReactToastify.css';

export default function Toaster() {

  const { error:billError} =useBillStore();
  const { error:orderStoreError} =useOrderStore();
  const { error:chargeStoreError} =useChargeAndInternetStore();
  const { error:inquiryStoreError} =useInquiryStore();
  const { error:authStoreError} =useAuthStore();
  const  showToast = (msg:string):void=>{
    toast(msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  useEffect(()=>{
    if (billError) showToast(billError)
    if (orderStoreError) showToast(orderStoreError)
    if (chargeStoreError) showToast(chargeStoreError)
    if (inquiryStoreError) showToast(inquiryStoreError)
    if (authStoreError) showToast(authStoreError)

  },[billError,orderStoreError,chargeStoreError,inquiryStoreError,authStoreError])
  return (
         <ToastContainer /> 
  )
}
