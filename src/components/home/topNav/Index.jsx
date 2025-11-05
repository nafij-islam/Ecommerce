import React from 'react'
import Container from './../../common/Container';
import { icons } from '../../../helpers/iconProvider'

const TopNav = () => {
   
  const{ tovNav } = icons;
 
  console.log(tovNav)
  return (
    <section className='bg-secondary-700 py-4 border-b border-gray-600'>
       <Container>
           <div className='flex justify-between'>
               <h2 className='label3 font-public_sans text-gray-00'>Welcome to Clicon online eCommerce store. </h2>
               <div className='flex gap-3'>
                   <h2 className='body_sm_400 text-gray-00  '>Follow us:</h2>
                   <div className='flex gap-2 text-gray-00'>
                      {tovNav.map((item)=>(
                        <span key={item.id}>{<item.name size={18}/>}</span>
                      ))}
                   </div>
               </div>
           </div>
       </Container>
    </section>
  )
}

export default TopNav 