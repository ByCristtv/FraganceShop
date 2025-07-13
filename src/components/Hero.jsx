import React from 'react'
import hero from '../assets/hero.jpg'

export default function Hero () {
  return (
    <section id='home' className='bg-lime-50 scroll-mt-20 py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-10'>
            <div className='text-center lg:text-left max-w-xl'>
                <h1 className='text-4xl sm:text-5xl font-bold text-stone-800 leading-tight mb-4'>
                    Discover the best deals on Top fragances
                </h1>
                <p className='text-stone-800 text-base sm:text-lg mb-6'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Esse vel voluptatibus dolorem voluptates debitis quia non
                    culpa magnam fugit consectetur. Quisquam facere accusantium
                    placeat! Voluptas sint libero nulla assumenda ipsum.

                </p>
                <div className='flex justify-center lg:justify-start gap-4'>
                    <a href="/products"
                    className='px-6 py-3 bg-stone-900 text-white text-sm font-semibold rounded-lg shadow hover:bg-purple-700 transition'>
                        Shop Now
                    </a>
                    <a href="/offers"
                    className='px-6 py-3 border border-stone-600 text-pink text-sm font-semibold rounded-lg hover:bg-stone-500 transition'>
                        View Offers
                    </a>
                </div>
            </div>
            <div className='w-full lg:w-1/2 flex justify-center'>
            <img src={hero} alt="Hero Image"
            className='w-3/4 lg:w-full max-auto rounded-xl shadow-lg' />

            </div>
        </div>

    </section>
  )
}
