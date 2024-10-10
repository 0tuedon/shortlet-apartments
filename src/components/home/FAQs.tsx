import React from 'react'
import FaqSingle from '../FaqSingle'

const FAQs = () => {
  return (
    <div className='min-h-screen flex flex-col max-w-[1280px] mx-auto py-40 gap-12'> 
            <div className='flex flex-col text-center'>
                    <h3 className='text-[3.25rem] font-bold'> FAQs</h3>
                    <p className='text-black/80'>Frequently asked questions by our customers</p>
            </div>

            <div className='flex flex-col max-w-[664px] mx-auto gap-6 w-full'>
                    <FaqSingle />
                    <FaqSingle />
            </div>
    </div>
  )
}

export default FAQs