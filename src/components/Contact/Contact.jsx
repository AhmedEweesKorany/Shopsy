import React from 'react'
import ContactImg from "../../assets/website/orange-pattern.jpg"
const Contact = () => {
  return (
    <div className="min-h-40 max-h-60 object-cover text-center text-white py-10 mb-20" style={{backgroundImage:`url(${ContactImg})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
        
        <h1 className='text-3xl sm:text-4xl font-bold'>Get Notified About New Products
        </h1>

<div className='pt-4'>
    
<input type="text" className='border-none outline-none w-[500px] h-[50px] p-4' placeholder='Enter Your Email'/>

    </div>        
        </div>
  )
}

export default Contact