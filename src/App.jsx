import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import AOS from 'aos';
import 'aos/dist/aos.css';
import TopSelling from './components/TopSelling/TopSelling';
import BestRating from './components/BestRating/BestRating';
import Contact from './components/Contact/Contact';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

const App = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='dark:bg-gray-950'>
      <Navbar/>
      <Hero/>
      <TopSelling/>
      <BestRating/>
      <Contact/>
      <TopSelling/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App