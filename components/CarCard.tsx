"use client";
import {useState} from 'react';
import Image from 'next/image';
import { CarProps } from '@/Types';
import { Button, CarDetails } from '.';
import { calculateCarRent } from '@/utils';

interface CarCardProps{
    car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex flex-col p-6 justify-center items-start text-textWhite bg-card hover:bg-cardHover hover:shadow-md rounded-3xl group'>
        <div className='w-full flex justify-between items-start gap-2'>
            <h2 className='text-[22px] leading-[26px] font-medium capitalize'>
                {make} {model}
            </h2>
        </div>
        <p className='flex mt-6 text-[32px] font-medium'>
            <span className='self-start text-[14px] font-bold'>
                $
            </span>
                {carRent}
            <span className='self-end text-[14px] font-medium'>
                /day
            </span>
        </p>
        <div className='relative w-full h-40 my-3 object-contain'> 
            <Image src="/main.png" alt='car model' fill priority className='object-contain'/>
        </div>

        <div className='relative flex w-full mt-2'>
            <div className='flex group-hover:invisible w-full justify-between text-textWhite'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src="steering-wheel.svg" width={20} height={20} alt='steering wheel'/>
                    <p className='text-[14px]'>{transmission === 'a' ? 'Automatic' : 'Manual'}</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src="tire.svg" width={20} height={20} alt='tire'/>
                    <p className='text-[14px]'>{drive.toUpperCase()}</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src="gas.svg" width={20} height={20} alt='gas'/>
                    <p className='text-[14px]'>{city_mpg} MPG</p>
                </div>
            </div>
            <div className='hidden group-hover:flex absolute bottom-0 w-full z-10'>
                <Button title='View More' 
                        containerStyles='w-full py-[16px] rounded-full bg-primary-red ' 
                        textStyles='text-[14px] leading-[17px] font-medium'
                        rightIcon="/right-arrow.svg"
                        handleClick={() => setIsOpen(true)}/>
            </div>
        </div>
        <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car}/>
    </div>
  )
}

export default CarCard