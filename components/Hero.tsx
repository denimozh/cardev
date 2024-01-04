"use client";
import Image from "next/image"
import { Button } from "."


const Hero = () => {
  const handleScroll = () => {

  }
  return (
    <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold text-textWhite">Book or Rent <span className="text-primary-red drop-shadow-xl " >High Quality</span> Cars</h1>
            <p className="text-[27px] text-textWhite font-light mt-10">Streamline your car rental experince with out effortless booking process.</p>
            <div className="flex gap-14">
              <Button title="Explore Cars" containerStyles="bg-primary-red text-white rounded-lg text-2xl mt-14 shadow-xl hover:bg-red-600 transition-transform hover:-translate-y-2 active:bg-red-700 hover:shadow-primary-red/50 " handleClick={handleScroll}/>
              <Button title="Book A Ride" containerStyles="bg-textWhite text-black rounded-lg text-2xl mt-14 shadow-xl hover:bg-red-100 transition-transform hover:-translate-y-2 active:bg-red-200 hover:shadow-primary-red/50 " handleClick={handleScroll}/>
            </div>
        </div>
        <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
            <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0 ">
                <Image src="/main.png" alt="hero" fill className="object-contain contrast-125 sm:scale-125"/>
              </div>
              <div className="blur absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden "/>
        </div>
    </div>
  )
}

export default Hero