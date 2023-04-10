import React from 'react'
import { icons } from '../utils/constants';
import Icons from './Icons';
import { RxSketchLogo } from 'react-icons/rx';
import Link from 'next/link';
import stock from '../public/stock.jpg'
import Image from 'next/image';


const SideBar = ({children}) => {
  return (
    <div className='flex gap-1 bg-white'>
      <nav className='sidenav'>
       <div className='flex flex-col items-center '> 
        <div className='flex flex-col gap-6 items-center '>
            <div className='text-2xl '>
              <RxSketchLogo className='logo'/>
             <hr className='text-slate-900 mt-4 mb-2'/>
            </div>
                {
                icons.map(item => {
                    return(
                        <Icons 
                        key={item.id} 
                        icon={item.icon}
                        link={item.link}
                        />
                        )}
                    )
                }
            </div>
                
        </div>
        <div className='sidenavImg'>
            <Image 
            className='object-cover rounde-md'
            src={stock} 
            width={50} 
            height={50} 
            alt='logo'
            />
        </div>
      </nav>
      <main className='w-full ml-20 bg-gray-100'>
        {children}
      </main>
    </div>
  )
}

export default SideBar
