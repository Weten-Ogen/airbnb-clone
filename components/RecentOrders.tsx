import React from 'react'
import {data} from '../data/data'
import {FaShoppingBag} from 'react-icons/fa'

const RecentOrders = () => {
  return (
    <div className='recentorder'>
      {
          data.map((order,id) =>{
            return (
              <li key={id} className='recentorder-inner'>
              <div className='bg-purple-100 rounded-lg p-3'>
                <FaShoppingBag 
                className='recentorderbag'
                />
              </div>
              <div className='pl-4'>
                <p className='text-gray-800 font-bold'>
                  $ {order.total}
                </p>
                <p className='text-gray-500 text-sm'>{order.name.first}</p>
              </div>
              <p className='recentdate'>{order.date}</p>
            
            </li>
            )}
          )
      }
    </div>
  )
}

export default RecentOrders
