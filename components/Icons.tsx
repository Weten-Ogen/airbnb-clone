import React from 'react'
import Link from 'next/link';

const Icons = ({icon}) => {
  return (
    <div className='my-1 text-2xl'>
        <Link href='/'>
            <span className='icons'>
              {icon}
            </span>
        </Link>
    </div>
  )
}

export default Icons
