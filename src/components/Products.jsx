import React, { useEffect, useState } from 'react'
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

export default function Products ()  {
    
    const [currentSlide, setCurrentSlide] = useState(0);
    const [productsPerPage, setProductsPerPage] = useState(4);

    const products = [
        {id: 1, name:'Floral', price:70.99, rating:4.6, image: i1, discount: 10},
        {id: 2, name:'Floral', price:80.99, rating:4.6, image: i2, discount: 8},
        {id: 3, name:'Floral', price:70.99, rating:4.6, image: i3, discount: 6},
        {id: 4, name:'Floral', price:50.99, rating:4.6, image: i4, discount: 30},
        {id: 5, name:'Floral', price:50.99, rating:4.6, image: i5, discount: 5},
        {id: 6, name:'Floral', price:20.99, rating:4.6, image: i6, discount: 60},
        {id: 7, name:'Floral', price:50.99, rating:4.6, image: i7, discount: 40},
        {id: 8, name:'Floral', price:40.99, rating:4.6, image: i8, discount: 20},
        {id: 9, name:'Floral', price:50.99, rating:4.6, image: i9, discount: 50},
        {id: 10, name:'Floral', price:80.99, rating:4.6, image: i10, discount: 15},
        {id: 11, name:'Floral', price:50.99, rating:4.6, image: i11, discount: 25},
        {id: 12, name:'Floral', price:60.99, rating:4.6, image: i12, discount: 44},
    ]
        
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setCurrentSlide(0)
                setProductsPerPage(1)
                
            }else if (window.innerWidth < 768){
                setCurrentSlide(0)
                setProductsPerPage(2)
                
            }else if (window.innerWidth < 1024){
                setCurrentSlide(0)
                setProductsPerPage(3);
                
            } else {
                setCurrentSlide(0)
                setProductsPerPage(4)
                
            }
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, [])
    const totalSlides = Math.ceil(products.length / productsPerPage);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1 ));
    };
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const startIndex = currentSlide * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const visibleProducts = products.slice(startIndex, endIndex);

  return (
      <section id='products' className='py-12 scroll-mt-20 bg-gray-50'>
          <div className='container mx-auto px-4'>
              <div className='flex justify-between items-center mb-8'>
                  <h2 className='md:text-3xl text-2xl font-bold text-stone-800'>Featured Products</h2>
                  <div className='flex space-x-4'>
                      <button
                          onClick={prevSlide}
                          className='p-2 rounded-full bg-white shadow-md hover:bg-purple-100 text-purple-600 transition-colors'
                          aria-label='Next slide'>
                          <FiChevronLeft size={24} />
                      </button>

                      <button
                          onClick={nextSlide}
                          className='p-2 rounded-full bg-white shadow-md hover:bg-purple-100 text-purple-600 transition-colors'
                          aria-label='Previous slide'>
                          <FiChevronRight size={24} />
                      </button>

                  </div>
              </div>
              <div className='relative overflow-hidden'>
                  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                      {
                          visibleProducts.map((product) => (
                              <div key={product.id}
                                  className='bg-white rounded-lg shadow-md overflow-hidden transtion-all duration-300 hover:scale-105'>
                                  <div className='relative'>
                                      <img src={product.image} alt={product.name}
                                          className='w-full h-64 object-cover' />
                                      {
                                          product.discount > 0 && (
                                              <span className='absolute top-3 right-3 bg-purple-700 text-white text-xs font-bold px-2 py-1 rounded-full'>
                                                  -{product.discount}%
                                              </span>
                                          )
                                      }
                                      <button className='absolute top-3 left-3 p-2 bg-white rounded-full
                                        shadow-md hover:bg-pink-100 text-gray-700'>
                                          <FiHeart size={18} />
                                      </button>
                                  </div>
                                  <div className='p-4'>
                                      <div className='flex items-center mb-2'>
                                          {
                                              [...Array(5)].map((_, i) => (
                                                  <FiStar key={i} size={16}
                                                      className={i < Math.floor(product.rating)
                                                          ? 'text-yellow-400 fill-current'
                                                          : 'text-gray-300'
                                                      } />
                                              ))
                                          }
                                          <span className='text-sm text-gray-500 ml-1'>
                                              ({product.rating})
                                          </span>
                                      </div>

                                      <h3 className='text-lg font-semibold text-gray-800 mb-1'>
                                          {product.name}
                                      </h3>
                                      <div className='flex items-center justify-between'>
                                          <div>
                                              <span className='text-lg font-bold text-stone-700'>
                                                  ${(product.price * (1 - product.discount / 100)).toFixed(2)}

                                              </span>
                                              {
                                                  product.discount > 0 && (
                                                      <span className='text-sm text-gray-500 line-through ml-2'>
                                                          ${product.price.toFixed(2)}
                                                      </span>
                                                  )
                                              }
                                          </div>
                                          <button className='p-2 bg-stone-800 rounded-full text-white
                                                hover:bg-purple-700 transition-colors'>
                                              <FiShoppingCart size={18} />
                                          </button>
                                      </div>
                                  </div>
                              </div>
                          ))}
                  </div>
              </div>
              <div className='flex justify-center mt-6 space-x-2'>
                  {[...Array(totalSlides)].map((_, index) => (
                      <button key={index} onClick={() => setCurrentSlide(index)}
                          className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-pink-950' : 'bg-gray-400'}`}
                          aria-label={`Go to slide ${index + 1}`}>
                      </button>
                  ))}
              </div>
          </div>
      </section>
    );
};
