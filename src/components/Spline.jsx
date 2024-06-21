import Spline from '@splinetool/react-spline';
import "../styles/global.css";

export default function App() {
  return (
    <Spline 
    className='splineContainer shadow-lg'
    scene="/Hero.splinecode" />
  );
}
