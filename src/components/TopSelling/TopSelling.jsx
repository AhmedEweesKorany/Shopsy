import React from 'react'
import { ProductsData } from '../../Data/data'
import { BiStar } from 'react-icons/bi'
import SectionTitle from '../SectionTitle/SectionTitle'

const TopSelling = () => {
  return (
    <div className='dark:bg-gray-950 dark:text-white mt-20'>
{/* section header  */}
      <SectionTitle title="Top Selling Product" subTitle={"Product"} des={"Lorem ipsum dolor sit amet consectetur adipisicing elit. "} className='text-center'/>
{/* section content  */}
        <div className='flex justify-center container'>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
    {ProductsData.map((product, i) => (
      <div key={i} className='bg-white rounded-lg shadow-lg p-5 dark:bg-gray-600' data-aos="fade-up" data-aos-duration={product.aosDelay}>
        <img
          src={product.img}
          alt={product.title}
          className='w-full h-[250px] object-cover rounded-md'
        />
        <h1 className='text-xl font-bold'>{product.title}</h1>
        <p className='text-gray-400 flex items-center gap-2'><BiStar color='yellow' enableBackground={true} />{product.rating}</p>
      </div>
    ))}
  </div>
</div>
  <div className='py-4 px-3 flex justify-center'>
    <button className='bg-primary w-[150px] text-white h-12 rounded-lg' data-aos="flip-down">Show All</button>
  </div>

     </div>
  )
}

export default TopSelling