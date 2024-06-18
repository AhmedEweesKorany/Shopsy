import React from 'react'

const OrderButton = ({className}) => {

const style = `bg-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full  ${className}`
  return (
    <button
    className={style}
  >
    Order Now
  </button>  )
}

export default OrderButton