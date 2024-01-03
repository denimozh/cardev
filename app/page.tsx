import { CarCard, Filter, Hero, SearchBar } from '@/components'
import { fuels, yearsOfProduction } from '@/constants';
import { fetchCars } from '@/utils';
import Image from 'next/image'

export default async function Home({ searchParams }) {
  const allCars = await fetchCars({ manufacturer: searchParams.manufacturer || " ", year: searchParams.year || 2022, fuel: searchParams.fuel || " ",
                                  limit: searchParams.limit || 10, model: searchParams.model || " "});

  const isDataEmpty = !Array.isArray(allCars) || allCars.length <1 || !allCars;
  

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='flex flex-col items-start justify-start gap-y-2.5 text-black-100;'>
          <p className='text-5xl font-extrabold text-textWhite'>Car Catalogue</p>
          <p className='font-medium text-lg pt-2 text-textWhite'>View the cars which we have in stock</p>
        </div>

        <div className='mt-12 w-full flex-between items-center flex-wrap gap-5'>
          <SearchBar />
          <div className='flex justify-start flex-wrap items-center gap-2'>
              <Filter title="fuel" options={fuels}/>
              <Filter title="year" options={yearsOfProduction}/>
          </div>
        </div>

        {!isDataEmpty ? (
          <section className=''>
            <div className='grid 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14'>
              {allCars?.map((car) => (<CarCard car={car}/> ))}
            </div>
          </section>
        ): (
          <div className='mt-16 flex justify-center items-center flex-col gap-2'>
            <h2 className='text-textWhite text-xl font-bold'>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
        
      </div>
    </main>
  )
}
