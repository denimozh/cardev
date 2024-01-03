"use client";

import { ButtonProps } from '@/Types';
import Image from 'next/image';

const Button = ({ title, containerStyles, handleClick, btnType, textStyles, rightIcon}: ButtonProps) => {
  return (
    <button 
        className={`btn-style ${containerStyles}`} 
        type={btnType || 'button'} 
        onClick={handleClick}
        disabled={false} 
    >
        <span className={`flex-1 ${textStyles}`}>
            {title}
        </span>
        {rightIcon && (
          <div className='relative w-6 h-6'>
            <Image src={rightIcon} alt='right icon' fill className='object-contain'/>
          </div>
        )}
    </button>
  )
}

export default Button