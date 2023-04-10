import React from 'react'
import Link from 'next/link';

const Icons = ({icon,link}) => {
  return (
    <div className='my-1 text-2xl'>
        <Link href={link}>
            <span className='icons'>
              {icon}
            </span>
        </Link>
    </div>
  )
}

export default Icons
