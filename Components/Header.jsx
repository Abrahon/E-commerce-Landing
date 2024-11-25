"use client"
import Image from 'next/image'
import React from 'react'
import hero_pic from '../Assets/Assets/hero_pic.png';
import { FaArrowRight } from 'react-icons/fa';
// import { ArrowRightIcon } from 'heroicons/react/solid';

const Header = () => {
  return (
    <div className="relative w-full h-[500px]">
    {/* Hero Image */}
    <Image
      src={hero_pic}
      alt="Hero Picture"
      layout="fill"
      objectFit="cover"
      className="z-0"
    />

    {/* Text Overlay */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-40">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Elevate Your Everyday Style</h1>
      <p className="text-lg md:text-xl mb-6">
        Discover the Latest Trends in Sustainable Fashion
      </p>
      <button className="flex items-center px-6 py-3 bg-violet-500 text-white rounded-full hover:bg-violet-700  transition duration-300">
        Shop Now
        <FaArrowRight className="w-5 h-5 ml-2" />
      </button>
    </div>
  </div>
  )
}

export default Header