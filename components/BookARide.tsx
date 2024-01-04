"use client";

import {useState, Fragment} from 'react'
import { SearchManufacturer, Button } from '.'
import { Listbox, Transition, Dialog } from '@headlessui/react'
import { useRouter } from "next/navigation";
import { Places, DropOff } from '@/constants';
import Image from 'next/image';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckIcon from '@mui/icons-material/Check';

const BookARide = () => {
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const [selected, setSelected] = useState(Places[0])
  const [dropSelect, setDropSelect] = useState(DropOff[0])
  const [placeSelect, setPlaceSelect] = useState('');
  const [hasFilled, setHasFilled] = useState(false);
  const [datePickUp, setDatePickUp] = useState('');
  const [dateDropOf, setDateDropOf] = useState('');
  let [isOpen, setIsOpen] = useState(true)
  const router = useRouter();

  function closeModal() {
    setIsOpen(false)
    setHasFilled(false);
  }

  function openModal() {
    setIsOpen(true)
  }

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(manufacturer === '' && model === ''){
      return alert('Please fill in the search bar')
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  }

  const checkFilled = () => {
    if(manufacturer === "" || datePickUp === "" || dateDropOf === ""){
      setHasFilled(false);
    } else {
      setHasFilled(true);
    }
  }

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if(model){
      searchParams.set('model', model)
    } else {
      searchParams.delete('model')
    }

    if(manufacturer){
      searchParams.set('manufacturer', manufacturer)
    } else {
      searchParams.delete('manufacturer')
    }

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`

    router.push(newPathname, {scroll: false})
  }

  return (
    <div className='mt-12 padding-x padding-y max-width bg-textWhite rounded-2xl'>
        <p className='mt-4 text-3xl font-bold text-footer pb-2'>Book a Car</p>
        {hasFilled ? 
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black/25" />
              </Transition.Child>
    
              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-3xl max-h-[90vh] transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                      <div>
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-bold leading-6 text-textWhite text-left bg-primary-red pt-3 pl-3"
                        >
                          COMPLETE RESERVATION
                        </Dialog.Title>
                        <div className=" bg-red-200">
                          <p className="text-medium text-gray-400 p-3">
                            <span className='text-red-400'>Upon completing this reservation enquiry, you will receive:</span>
                            <p>Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number.</p>
                          </p>
                        </div>
                        <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 grid-cols-1 p-4'>
                          <div className=''>
                            <p className='text-orange-500'>Location & Date</p>
                            <div className='flex'>
                              <LocationOnIcon />
                              <div>
                                <p className='font-medium'>Pick-Up Date</p>
                                <p>{datePickUp}</p>
                              </div>
                            </div>
                            <div className='flex'>
                              <LocationOnIcon />
                              <div>
                                <p className='font-medium'>Drop-Off Date</p>
                                <p>{dateDropOf}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className=''>
                          <p className='pl-5'>Car - <span className='text-orange-600'>{manufacturer}</span></p>
                          <Image src='https://cdn.imagin.studio/getimage' alt='car model' fill priority className='object-contain scale-100 pl-52'/>
                        </div>
                      </div>
    
                      <div className="mt-4 ml-4 mb-3">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Got it, thanks!
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
             : 
          <div className='w-full bg-red-200 py-1 rounded-md'>
            <p className='text-primary-red text-medium pl-5'>All fields required!</p>
          </div> }
        <div className='grid 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-8 mb-8'>
          <div>
            <p className='font-medium pb-4'>Select For Car <span className='text-red-500'>*</span></p>
            <div className='border-2 shadow-md'>
              <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
            </div>
          </div>
          <div>
            <p className='font-medium pb-4'>Pick-up <span className='text-red-500'>*</span></p>
            <div className="border-2">
              <Listbox value={selected} onChange={setSelected} >
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full h-[48px] cursor-default bg-textWhite py-3 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block truncate">{selected.city}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ExpandMoreIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-textWhite py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                      {Places.map((place, placeIdx) => (
                        <Listbox.Option
                          key={placeIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active ? 'bg-red-100 text-primary-red' : 'text-gray-900'
                            }`
                          }
                          value={place}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? 'font-medium' : 'font-normal'
                                }`}
                                
                              >
                                {place.city}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-red-600">
                                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          </div>
          <div>
            <p className='font-medium pb-4'>Drop-off <span className='text-red-500'>*</span></p>
            <div className="border-2">
              <Listbox value={dropSelect} onChange={setDropSelect}>
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full h-[48px] cursor-default bg-textWhite py-3 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block truncate">{dropSelect.city}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ExpandMoreIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-textWhite py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                      {DropOff.map((dropOff, dropOffIdx) => (
                        <Listbox.Option
                          key={dropOffIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active ? 'bg-red-100 text-primary-red' : 'text-gray-900'
                            }`
                          }
                          value={dropOff}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? 'font-medium' : 'font-normal'
                                }`}
                              >
                                {dropOff.city}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-red-600">
                                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          </div>
          <div>
            <p className='font-medium pb-4'>Pick-up <span className='text-red-500'>*</span></p>
            <div className='border-2 bg-textWhite'>
              <input id="picktime" type="date" value={datePickUp} placeholder='04-01-2023' className='p-3 bg-textWhite w-full ' onChange={event => {
                setDatePickUp(event.target.value);
              }}/>
            </div>
          </div>
          <div>
            <p className='font-medium pb-4'>Drop-Off <span className='text-red-500'>*</span></p>
            <div className='border-2 bg-textWhite'>
              <input id="picktime" type="date" value={dateDropOf} placeholder='04-01-2023' className='p-3 bg-textWhite w-full ' onChange={event => {
                setDateDropOf(event.target.value);
              }}/>
            </div>
          </div>
          <div className=''>
            <Button title="Submit" containerStyles="bg-primary-red w-full text-white rounded-lg text-2xl mt-10 shadow-xl hover:bg-red-600 transition-transform hover:-translate-y-2 active:bg-red-700 hover:shadow-primary-red/50 " 
             handleClick={checkFilled}/>
          </div>
        </div>
    </div>
  )
}

export default BookARide