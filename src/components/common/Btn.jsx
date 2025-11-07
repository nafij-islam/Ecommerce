import React from 'react'


const Btn = ({children,className}) => {
  return (
     <button className={`${className} px-5`}>{children}</button>
  )
}

export default Btn