"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { SearchManufacturer } from ".";
import Image from "next/image";

const SearchButton = ({ otherClasses } : {otherClasses:string}) => (
  <button type="submit" className={`-ml-8 z-10 ${otherClasses}`}>
    <Image src="/magnifying-glass.svg" alt="magnifying glass" width={55} height={55} className="object-contain"/>
  </button>
)

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(manufacturer === '' && model === ''){
      return alert('Please fill in the search bar')
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
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
    <form className='flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl' onSubmit={handleSearch}>
        <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
            <SearchManufacturer 
                manufacturer={manufacturer}
                setManufacturer={setManufacturer}
            />
            <SearchButton otherClasses="sm:hidden"/>
        </div>
        <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
          <Image src="/model-icon.png" width={25} height={25} className="absolute w-[20px] h-[20px] ml-4" alt="car model"/>
          <input type="text" name="model" value={model} onChange={(e) => setModel(e.target.value)} placeholder="Corolla" className="w-full h-[48px] pl-12 p-4 bg-textWhite rounded-r-full max-sm:rounded-full outline-none cursor-pointer text-sm"/>
          <SearchButton otherClasses="sm:hidden"/>
        </div>
        <SearchButton otherClasses="max-sm:hidden"/>
    </form>
  )
}

export default SearchBar