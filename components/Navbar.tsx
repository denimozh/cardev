import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { Button } from '.';

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className='flex justify-between items-center mx-auto max-w-[1440px] sm:px-16 px-6 py-4'>
            <Link href="/" className='flex justify-center items-center'>
                <p className='font-bold text-2xl'>Car<span className='text-primary-red font-semibold'>Dev</span></p>
            </Link>
            <Button title="Sign In" btnType="button" containerStyles='text-primary-red rounded-full bg-white min-w-[130px]'/>
        </nav>
    </header>
  )
}

export default Navbar