import React from 'react'
import { icons } from '../utils/constants';
import Icons from './Icons';
import { RxSketchLogo } from 'react-icons/rx';
import Link from 'next/link';
import stock from '../public/stock.jpg'
import Image from 'next/image';
import  {BsFillMoonStarsFill ,BsMoonStars} from 'react-icons/bs';
import { useContext } from 'react';
import { AppContext } from '../pages/_app';
import JSXStyle from 'styled-jsx/style';

type ChildrenProps ={
  children:React.ReactNode
}

const SideBar = ({children }:ChildrenProps) => {
  const {darkMode,handleColorChange} = useContext(AppContext);
  return (
  
      <div className='flex gap-1 bg-white'>
      <nav className='sidenav'>
       <div className='flex flex-col items-center '> 
        <div className='flex flex-col gap-6 items-center '>
            <div className='text-2xl text-gray-800'>
            <>
          {darkMode === true ?
           <BsMoonStars
           onClick={() => handleColorChange()} 
           /> : <BsFillMoonStarsFill
           onClick={() => handleColorChange()}
           />
           
          }</>
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
      <main className='w-full ml-20 bg-gray-100 dark:bg-dark-300'>
        {children}
      </main>
    </div>

  )
}

export default SideBar
