import React, { useEffect, useState } from 'react'
import hero from '../assets/hero.jpg'
import womens from '../assets/womens.jpg'
import unisex from '../assets/unisex.jpg'
import i1 from '../assets/i1.jpg'
import i2 from '../assets/i2.jpg'
import i3 from '../assets/i3.jpg'
import i4 from '../assets/i4.jpg'
import i5 from '../assets/i5.jpg'
import i6 from '../assets/i6.jpg'
import i7 from '../assets/i7.jpg'
import i8 from '../assets/i8.jpg'
import i9 from '../assets/i9.jpg'
import i10 from '../assets/i10.jpg'
import i11 from '../assets/i11.jpg'
import i12 from '../assets/i12.jpg'
import { FiChevronLeft, FiChevronRight, FiHeart, FiShoppingCart, FiStar } from 'react-icons/fi'


const categories = [
    {img: hero, alt:"Men's Perfumes", title: "Men's Collection", description:"Best masculine scent"},
    {img: womens, alt:"Women's Perfumes", title: "Women's Collection", description:"Queen fragances"},
    {img: unisex, alt:"Unisex Perfumes", title: "Unisex Collection", description:"Best for all"},
    
]

const Categories = () => {
  return (
    <section id="categories" className='py-16 scroll-mt-20 bg-white'>
        <div className='container mx-auto px-4'> 
            <div className='text-center mb-12'>
              <h2 className='text-3xl font-bold text-stone-800 mb-3'>
                Explore Our Fragance collections
              </h2>
              <p className='text-lg text-gray-800 max-w-2xl mx-auto'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              </p>         
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
              {categories.map((category, index) => (
                <div key={index} className='relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
                  <div className='h-64 overflow-hidden'>
                    <img src={category.img} alt={category.alt}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' />
                  </div>
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'>
                    <div className='absolute bottom-0 left-0 p-6'>
                      <h3 className='text-xl font-semibold text-white'>{category.title}</h3>
                      <p className='text-gray-200 mt-1'> {category.description}</p>                                                  
                    </div>
                  </div>
                </div>
              ))}
            </div>                                
        </div>
    </section>
  )
}
export default Categories