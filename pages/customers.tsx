import React from 'react'
import { data } from '../data/data'
import  {BsPersonFill,BsThreeDotsVertical} from 'react-icons/bs';


const customers = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='flex justify-between  p-4'>
        <h2>Customers</h2>
        <h2>Welcome back</h2>
      </div>
      <div className='p-4 '>
      <div className='customers bg-white rounded-lg'>
        <div className='customersrowhead'>
        <span>Name</span>
        <span className='sm:text-left text-right'>Email</span>
        <span className='hidden md:flex'>Last Order</span>
        <span className='hidden sm:flex'>Method</span>
      </div>
        <ul >
            {data.map((order,id) =>{
              return (
                <li key={id} className='customerslist text-slate-800' >
                    <div className='flex items-center gap-2'>
                      <div>
                        <BsPersonFill
                         className='customersPersonIcon'/>
                      </div>
                      <p>{order.name.first+ ' '+ order.name.last}</p>
                    </div>
                    <p className='sm:text-left text-right'>{order.name.first}@gmail.com</p>
                    <p className='hidden md:block'>{order.date}</p>
                    <div 
                    className='flex items-center justify-between gap-5' >
                      <p className='hidden sm:flex'>{order.method}</p>
                      <BsThreeDotsVertical className='hidden sm:flex'/>
                    </div>
                </li>
              )})

            }
        </ul>
      </div>
      </div>
    </div>
  )
}

export default customers
