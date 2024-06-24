import React, { useState, useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { isWindows, isMacOs, isMobile } from 'react-device-detect';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const styles = `
  .spline-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .spline-container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1280px) {
    .spline-container {
      width: 120%;
      height: 120%;
    }
  }
`;

export default function ResponsiveOptimizedSpline() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  const splineContainerRef = useRef(null);

  useEffect(() => {
    const checkPerformance = () => {
      const start = performance.now();
      for (let i = 0; i < 1000000; i++) {
        // Simple loop to measure performance
      }
      const end = performance.now();
      setIsLowPerformance(end - start > 50);
    };

    checkPerformance();

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (splineContainerRef.current && window.innerWidth > 770) {
        let scale = 1;
        if (window.innerWidth <= 1280) {
          scale = 1.2;
        }
        splineContainerRef.current.style.transform = `translate(-50%, -50%) scale(${scale})`;
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSplineLoad = () => {
    setIsLoaded(true);
  };

  if (windowWidth <= 770 || isMobile || (!isWindows && !isMacOs) || isLowPerformance) {
    return null; // No renderiza nada en pantallas pequeñas o dispositivos no compatibles
  }

  return (
    <div className="relative w-full max-w-[1200px] mx-auto h-[400px] md:h-[500px] lg:h-[600px]">
      <style>{styles}</style>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">Loading 3D scene...</p>
        </div>
      )}
      <div className="spline-wrapper">
        <div ref={splineContainerRef} className="spline-container">
          <Spline
            scene="/Hero.splinecode"
            onLoad={handleSplineLoad}
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}