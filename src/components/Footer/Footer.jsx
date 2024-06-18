import React from 'react'
import FooterImg from "../../assets/website/footer-pattern.jpg"

import footerLogo from "../../assets/logo.png"
import {  GrInstagram, GrLinkedin, GrPhone, GrSend } from 'react-icons/gr';
import { FaFacebook } from 'react-icons/fa6';


const Footer = () => {
    const BannerImg = {
        backgroundImage: `url(${FooterImg})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
    
        width: "100%",
      };

      const FooterLinks = [
        {
          title: "Home",
          link: "/#",
        },
        {
          title: "About",
          link: "/#about",
        },
        {
          title: "Contact",
          link: "/#contact",
        },
        {
          title: "Blog",
          link: "/#blog",
        },
      ];
 
return(

   <div className='flex justify-center items-center'>
     <div style={BannerImg} className=' pl-40 grid py-20 text-white grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
        <div className=''>
            <div className='flex gap-5 items-center'>
            <img src={footerLogo} alt="footer logo" className='w-14 h-14 object-cover' />
            <h1 className='text-white font-bold text-2xl sm:text-3xl'>Shopsy            </h1>
            </div>
            <div className='pt-4 font-bold'>
                <p className='text-white text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, alias nisi? Eos ab incidunt veritatis accusamus ex vel nisi! Nostrum, facere blanditiis. Facilis, minima?</p>
            </div>
        </div>
        <div>
            <h1 className='font-bold text-2xl'>Important links</h1>
            <ul className='flex flex-col justify-between '>
                {FooterLinks.map((link,i)=>{
                    return <li className="pt-5" key={i+1}><a href={link.link}>{link.title}</a></li>
                })}
            </ul>
        </div>

        <div>
            <h1 className='font-bold text-2xl'> links</h1>
            <ul className='flex flex-col justify-between '>
                {FooterLinks.map((link,i)=>{
                    return <li className="pt-5" key={i+1}><a href={link.link}>{link.title}</a></li>
                })}
            </ul>
        </div>
        <div>
            <div className="icons flex gap-4">
                <GrInstagram className='text-3xl'/>
                <FaFacebook className='text-3xl'/>
                <GrLinkedin className='text-3xl'/>                
            </div>
            <div className='flex gap-4 pt-8 items-center'>
                <GrSend/>
                <p className='text-lg'>Cairo, Helwan</p>
            </div>

            <div className='flex gap-4 py-4 items-center'>
                <GrPhone/>
                <p className='text-lg'>+201014955763</p>
            </div>
        </div>
    </div>

   </div>
)
}

export default Footer