import Image from 'next/image'
import React from 'react'
import banner_pic from  '../Assets/Assets/banner_pic.svg'
import banner1_pic from  '../Assets/Assets/banner1_pic.svg'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Banner = () => {
  return (
    <div className='my-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-[1280px] mx-auto bg-violet-200 py-0 px-6'>
        <div>
            <p className='text-italic'>Big Deal</p>
            <h1 className='text-3xl font-semibold'><span className='text-purple-500'> 30%</span><span className='text-3xl'> Off for New Customers</span></h1>
            <button className="flex items-center px-6 py-3 bg-violet-500 text-white rounded-full hover:bg-violet-700  transition duration-300 mt-10">
             Shop Now
            <FaArrowRight className="w-5 h-5 ml-2" />
            </button>
        </div>
        {/* right side */}
        <div >
        <Image className='-mb-10'  src={banner_pic}width={390} height={438} alt="banner"></Image>
        </div>
    </div>
    {/* second banner */}
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 items-center my-10'>
        <div className='bg-violet-200'>
        <Image src={banner1_pic} width={468} height={566} alt='banner1'></Image>
        </div>
        <div >
          <h1 className='text-4xl'>MEN COLLECTION</h1>
        <button className="flex items-center px-6 py-3 bg-violet-500 text-white rounded-full hover:bg-violet-700  transition duration-300 mt-10">
             Shop Now
            <FaArrowRight className="w-5 h-5 ml-2" />
            </button>
        </div>
    </div>
    </div>
  )
}

export default Banner