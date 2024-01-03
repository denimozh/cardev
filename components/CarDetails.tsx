"use client";

import { CarProps } from '@/Types';
import React from 'react'
import Image from 'next/image';
import { Fragment } from 'react';

import { Dialog, Transition } from '@headlessui/react';

interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car}: CarDetailsProps) => {
  return (
    <>
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className="relative z-10" onClose={closeModal}>
                <Transition.Child as={Fragment} enter='ease-out duration-300' enterFrom='opacity-0' enterTo='opacity-100' leave='ease-in duration-200'
                leaveFrom='opacity-100' leaveTo='opacity-0'>
                    <div className='fixed inset-0 bg-footer bg-opacity-25'/>
                </Transition.Child>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <Transition.Child as={Fragment} enter='ease-out duration-300' enterFrom='opacity-0 scale-95' enterTo='opacity-100 scale-100' leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100' leaveTo='opacity-0 scale-95'>
                            <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-footer text-left shadow-xl transition-all flex flex-col gap-5">
                                <button type='button' onClick={closeModal} className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-red rounded-full'>
                                    <Image src="/close.svg" alt='close' width={20} height={20} className='object-contain'/>
                                </button>
                                <div className='flex-1 flex flex-col gap-3'>
                                    <div className='relative w-full h-40 bg-accent bg-cover bg-center rounded-lg'>
                                        <Image src="/main.png" alt='car model' fill priority className='object-contain'/>
                                    </div>
                                    <div className='flex gap-3 '>
                                        <div className='flex-1 relative w-full h-24 bg-red-100 rounded-lg'>
                                            <Image src="/main.png" alt='car model' fill priority className='object-contain'/>
                                        </div>
                                        <div className='flex-1 relative w-full h-24 bg-red-100 rounded-lg'>
                                            <Image src="/main.png" alt='car model' fill priority className='object-contain'/>
                                        </div>
                                        <div className='flex-1 relative w-full h-24 bg-red-100 rounded-lg'>
                                            <Image src="/main.png" alt='car model' fill priority className='object-contain'/>
                                        </div>
                                    </div>
                                    
                                </div>

                                <div className='flex-1 flex flex-col gap-2 bg-black rounded-xl py-6'>
                                    <h2 className='font-medium text-textWhite text-xl capitalize px-3 pt-1'>
                                        {car?.make} {car?.model}
                                    </h2>
                                    <div className='mt-3 flex flex-wrap gap-4 px-3'>
                                        {Object.entries(car).map(([key, value]) =>(
                                            <div className='flex justify-between gap-5 w-full text-right px-2' key={key}>
                                                <h4 className='text-gray-300 capitalize'>{key.split("_").join(" ")}</h4>
                                                <p className='text-textWhite font-medium'>{value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    </>
  )
}

export default CarDetails