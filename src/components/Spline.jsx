

import React, { useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { isWindows, isMacOs, isMobile } from 'react-device-detect';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../styles/global.css";

export default function App() {
  useEffect(() => {
    const toastShown = localStorage.getItem('toastShown');
    
    if (!toastShown && (isMobile || (!isWindows && !isMacOs))) {
      toast.warn('Use desktop for better experience', {
        autoClose: 5000, // 3 seconds
      });
      localStorage.setItem('toastShown', 'true');
    }
  }, []);

  if (isMobile || (!isWindows && !isMacOs)) {
    return <ToastContainer />;
  }

  return (
    <>
      <Spline 
        className='splineContainer shadow-lg'
        scene="/Hero.splinecode" />
      <ToastContainer />
    </>
  );
}
