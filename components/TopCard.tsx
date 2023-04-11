import React from 'react'

const TopCard = () => {
  return (
    <section className='topcard-section'>
      <div className='topcard'>
        <div className='topcard-inner'>
            <p className='text-2xl font-bold'>$7,695</p>
            <p className='text-gray-600'>Daily Revenue</p>
        </div>
        <p className='topcard-percentage'>
          <span className='text-lg text-green-700'>+18%</span>
        </p>
      </div>
      <div className='topcard'>
        <div className='topcard-inner'>
            <p className='text-2xl font-bold'>$7,695</p>
            <p className='text-gray-600'>Daily Revenue</p>
        </div>
        <p className='topcard-percentage'>
          <span className='text-lg text-green-700'>+27%</span>
        </p>
      </div> 
      <div className='topcard'>
        <div className='topcard-inner'>
            <p className='text-2xl font-bold'>$7,695</p>
            <p className='text-gray-600'>Daily Revenue</p>
        </div>
        <p className='topcard-percentage'>
          <span className='text-lg text-green-700'>+18%</span>
        </p>
      </div>

    </section>
  )
}

export default TopCard
