import React from 'react'
import { icons } from '../utils/constants';
import Icons from './Icons';
import { RxSketchLogo } from 'react-icons/rx';
import Link from 'next/link';
import stock from '../public/stock.jpg'
import Image from 'next/image';

const SideBar = ({children}) => {
  return (
    <div className='flex gap-1'>
      <nav 
      className='w-20 fixed h-screen p-4 flex flex-col border-r-[1px] justify-between'
      >
       <div 
       className='flex flex-col items-center ' 
       > 
        <div className='flex flex-col gap-6 items-center '>
            <div 
            className='text-2xl '
            >
              <RxSketchLogo 
              className='bg-purple-900 text-white inline rounded-md p-2 text-5xl'
            />
             <hr 
             className='text-slate-900 mt-4 mb-2'
             />
            </div>
           
                {
                icons.map(item => {
                    return(
                        <Icons 
                        key={item.id} 
                        icon={item.icon}
                        />)}
                    )
                }
            </div>
                
        </div>
        <div className='max-w-[50px] max-h-[50px] overflow-hidden rounded-md'>
            <Image 
            className='object-cover rounde-md'
            src={stock} 
            width={50} 
            height={50} 
            alt='logo'
            />
        </div>

         
        

      </nav>
      <main className='w-full ml-20'>
        {children}
      </main>
    </div>
  )
}

export default SideBar
