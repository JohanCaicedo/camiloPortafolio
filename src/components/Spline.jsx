import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { isWindows, isMacOs, isMobile } from 'react-device-detect';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ResponsiveOptimizedSpline() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const checkPerformance = () => {
      const start = performance.now();
      for (let i = 0; i < 1000000; i++) {}
      const end = performance.now();
      setIsLowPerformance(end - start > 50);
    };
    checkPerformance();

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSplineLoad = () => {
    setIsLoaded(true);
  };

  if (windowWidth <= 770 || isMobile || (!isWindows && !isMacOs) || isLowPerformance) {
    return null;
  }

  const scale = windowWidth <= 1280 ? 1.2 : 1;

  return (
    <div className="relative w-full max-w-[1200px] mx-auto h-[400px] md:h-[500px] lg:h-[600px] -mt-5">
      
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg z-20">
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">Loading 3D scene...</p>
        </div>
      )}

      <div className="relative w-full h-full rounded-lg overflow-hidden">
        <div 
            className="absolute inset-0"
            style={{ transform: `scale(${scale})` }}
        >
          <Spline
            scene="/scene.splinecode"
            onLoad={handleSplineLoad}
          />
        </div>

        <div 
          className="
            absolute inset-0 rounded-lg pointer-events-none 
            shadow-[inset_0_0_0_2px_#fffcee] dark:shadow-[inset_0_0_0_2px_#0b0a0b]
          "
        ></div>
      </div>

      <ToastContainer />
    </div>
  );
}