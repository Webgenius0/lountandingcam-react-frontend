import React from 'react'
import PrimaryBtn from './PrimaryBtn'

export default function Cta() {
  return (
    <div className='bg-linear-90 from-[rgba(246,205,219,1)] via-[rgba(217,235,246,1)] via-46% to-[rgba(215,204,237,1)] text-center 2xl:w-9/12 mx-auto rounded-xl py-30 my-30' >
    
            <h3 className="text-5xl text-center mb-5 font-semibold">Keep Expressing Yourself</h3>
          <p className="text-center w-4/12 mx-auto mb-12 text-gray-400">
        Every week brings a new reflection.
          </p>
    
          <div className='flex gap-5 items-center justify-center'>
            <PrimaryBtn text='Explore More Activities' to='/' />
          </div>
    
        </div>
  )
}
