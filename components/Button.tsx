"use client";

import { ButtonProps } from '@/Types';
import Image from 'next/image';

const Button = ({ title, containerStyles, handleClick, btnType}: ButtonProps) => {
  return (
    <button 
        className={`btn-style ${containerStyles}`} 
        type={btnType || 'button'} 
        onClick={handleClick}
        disabled={false} 
    >
        <span className={`flex-1`}>
            {title}
        </span>
    </button>
  )
}

export default Button