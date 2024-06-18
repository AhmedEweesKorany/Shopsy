import React from 'react'

const SectionTitle = ({title,subTitle,des,className=""}) => {
    const style = `header px-5 py-5 mx-7 ${className}`
  return (
<div className={style} data-aos="zoom-in" data-aos-duration="400">
            <h2 className='text-primary '>
               {title} 
            </h2>
            <h1 className='text-3xl sm:text-4xl font-bold'>
                {subTitle}
            </h1>
            <p className='py-2 text-gray-400'>{des}</p>
        </div>  )
}

export default SectionTitle