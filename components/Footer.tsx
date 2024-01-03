import React from 'react'
import Link from 'next/link'

import { footerLinks } from '@/constants'

const Footer = () => {
  return (
    <footer className='flex flex-col text-textWhite mt-5 border-t border-gray-100 bg-footer'>
        <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
            <div className='flex flex-col justify-start items-start gap-6'>
                <p className='font-bold text-2xl text-textWhite'>Car<span className='text-primary-red font-extrabold'>Dev</span></p>
                <p className='text-base text-textWhite'>CarDev 2023 <br/> All Rights Reserved &copy;</p>
            </div>
            <div className='flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20'>
                {footerLinks.map((link) => (
                    <div key={link.title} className='flex flex-col gap-6 text-base min-w-[170px]'>
                        <h3 className='font-bold text-gray-500'>{link.title}</h3>
                        {link.links.map((item) => (
                            <Link
                                key={item.title}
                                href={item.url}
                                className='text-textWhite'
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
            </div>
            <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>
                <p>@2023 CarDev. All Rights Reserved</p>
                <div className='flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10'>
                    <Link href={"/"} className='text-textWhite'>
                        Privacy Policy
                    </Link>
                    <Link href={"/"} className='text-textWhite'>
                        Terms of Use
                    </Link>
                </div>
            </div>
    </footer>
  )
}

export default Footer