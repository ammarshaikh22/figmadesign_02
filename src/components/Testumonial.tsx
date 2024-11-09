import React from 'react'
import { CarouselDemo } from './Slider'

const Testumonial = () => {
  return (
      <section className='relative py-20'>
          <div className='2xl:max-w-[80%] md:max-w-[86%] max-w-[96%] mx-auto text-center'>
              <h1 className='text-6xl font-semibold'>What Our Clients Says</h1>
              <div className='mt-10'>
                  <CarouselDemo/>
              </div>
          </div>
    </section>
  )
}

export default Testumonial