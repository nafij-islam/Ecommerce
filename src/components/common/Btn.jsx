import React from 'react'
import { FaArrowRight } from "react-icons/fa6";


const Btn = ({children,className}) => {
  return (
     <button className={` ${className} py-3.5 px-6 bg-warning-500 flex items-center  gap-2`}>{children}<FaArrowRight /></button>
  )
}

export default Btn