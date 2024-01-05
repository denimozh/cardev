import React from 'react'
import CarRentalIcon from '@mui/icons-material/CarRental';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MinorCrashIcon from '@mui/icons-material/MinorCrash';

const Information = () => {
  return (
    <div className='flex xl:flex-col flex-col gap-5 relative z-0 max-w-[1440px] mx-auto py-36 padding-x'>
        <div className='text-center'>
            <p className='text-textWhite text-3xl font-medium pb-8'>Rent a high quality car today</p>
            <p className='text-textWhite text-5xl font-bold'><span className='text-primary-red underline decoration-4 underline-offset-6'>Quick</span> & <span className='text-primary-red underline decoration-4 underline-offset-4'>Easy</span> Car Rental</p>
        </div>
        <div className='flex xl:flex-row flex-col gap-16 pt-20 items-center justify-center'>
            <div className='text-textWhite flex-col md:w-1/3 text-center sm:w-48'>
                <div className='pb-5'><CarRentalIcon sx={{ fontSize: 110 }} className='text-red-400 bg-red-200 rounded-2xl py-2'/></div>
                <div><p className='font-bold text-2xl py-3'>Select Car</p></div>
                <div><p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p></div>             
            </div>
            <div className='text-textWhite flex-col text-center md:w-1/3 sm:w-48'>
                <div className='pb-5'><SupportAgentIcon sx={{ fontSize: 110 }} className='text-red-400 bg-red-200 rounded-2xl py-2'/></div>
                <div className='font-bold text-2xl py-3'><p>Contact Operator</p></div>
                <div><p>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p></div>             
            </div>
            <div className='text-textWhite flex-col text-center md:w-1/3 sm:w-48'>
                <div className='pb-5'><MinorCrashIcon sx={{ fontSize: 110, }} className='text-red-400 bg-red-200 rounded-2xl py-2'/></div>
                <div className='font-bold text-2xl py-3'><p>High Quality Cars</p></div>
                <div><p>Whether you're hitting the open road, we've got you covered with our wide range of quality-checked cars</p></div>             
            </div>
        </div>
    </div>
  )
}

export default Information