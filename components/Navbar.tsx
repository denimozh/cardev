import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { Button } from '.';

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className='flex justify-between items-center mx-auto max-w-[1440px] sm:px-16 px-6 py-4'>
            <Link href="/" className='flex justify-center items-center'>
                <p className='font-bold text-2xl text-textWhite'>Car<span className='text-primary-red font-semibold'>Dev</span></p>
            </Link>
            <span className='relative flex'>
                <Button title="Sign In" btnType="button" containerStyles='hover:bg-slate-100 active:bg-slate-200 text-primary-red rounded-lg bg-white min-w-[130px] text-xl transition-transform hover:translate-y-2'/>
            </span>
        </nav>
    </header>
  )
}

export default Navbar