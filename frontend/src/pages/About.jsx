import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to Prescripto, your trusted healthcare companion for booking doctor appointments quickly and efficiently. At Prescripto, we understand the importance of accessible healthcare and the challenges patients face while finding the right doctors and managing appointments.</p>
          <p>Prescripto is dedicated to delivering a seamless digital healthcare experience by connecting patients with experienced healthcare professionals through a secure and user-friendly platform. Whether you need a routine consultation, specialist care, or appointment management, Prescripto is here to simplify the process for you.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision at Prescripto is to make healthcare more accessible, efficient, and patient-friendly for everyone. We aim to bridge the gap between patients and healthcare providers through innovative technology, ensuring quality healthcare services are always within reach.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Easy and streamlined appointment booking designed to save your valuable time.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE: </b>
          <p>Connect with trusted doctors and healthcare specialists anytime, anywhere.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p >Smart health reminders, personalized recommendations, and a patient-focused healthcare experience.</p>
        </div>
      </div>

    </div>
  )
}

export default About
