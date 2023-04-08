import React from 'react'
import Link from 'next/link';

const Icons = ({icon}) => {
  return (
    <div className='my-1 text-2xl '>
        <Link href='/'>
            <span className='inline-block p-2 text-slate-800 bg-gray-200 rounded-md'>{icon}</span>
        </Link>
    </div>
  )
}

export default Icons
