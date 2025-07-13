import React from 'react'
import { FaEnvelope, FaFacebookF, FaInstagram, FaMapMarkedAlt, FaPhone, FaTwitter } from 'react-icons/fa'

export default function Contact ()  {
  return (
    <section id='contact' className='min-h-screen scroll-mt-20 bg-stone-900 py-12 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto'>
              <div className='text-center mb-16'>
                  <h1 className='text-4xl font-bold font-bold text-white mb-4'>
                      Contact US
                  </h1>
                  <p className='text-lg text-gray-200 max-2xl mx-auto'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, unde quis similique atque cupiditate
                  </p>
              </div>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                  <div className='bg-white p-8 rounded-lg shadow-xl border border-gray-100'>
                      <h2 className='text-2xl font-semibold text-gray-900 mb-6'>
                          Send Us a Message
                      </h2>
                      <form>
                          <div className='p-2'>
                              <label className='block text-sm font-medium text-gray-800'>Name</label>
                              <input type="text"
                                  className='w-full px4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent'
                                  placeholder='Your Name' />
                          </div>
                          <div className='p-2'>
                              <label className='block text-sm font-medium text-gray-800'>Email</label>
                              <input type="email"
                                  className='w-full px4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent'
                                  placeholder='Your Name' />
                          </div>
                          <div className='p-2'>
                              <label className='block text-sm font-medium text-gray-800'>Your Message</label>
                              <textarea
                                  rows="5"
                                  className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent'
                                  placeholder='tell us about your fragance needs ...' />
                          </div>
                          <button className='w-full bg-purple-700 hover:bg-pink-800 text-white py-3 rounded-lg transition duration-300 font-medium shadow-md'>
                              Send Message
                          </button>
                      </form>
                  </div>
                  <div className='space-y-8'>
                      <div className='bg-white p-8 rounded-lg shadow-xl border border-gray-00'>
                          <h2 className='text-2xl font-semibold text-gray-900 mb-6'>Contact Information</h2>
                          <div className='space-y-6'>
                              <div className='flex items-start'>
                                  <div className='bg-purple-200 p-3 rounded-full mr-4'>
                                      <FaPhone className='text-purple-900 text-lg' />
                                  </div>
                                  <div>
                                      <h3 className='text-lg font-medium text-gray-900'>Phone</h3>
                                      <p>+506 8896-6082</p>
                                      <p>Mon-Fri 8am-6pm</p>
                                  </div>
                              </div>
                              <div className='flex items-start'>
                                  <div className='bg-purple-200 rounded-full p-3 mr-4'>
                                      <FaEnvelope className='text-purple-900 text-lg' />
                                  </div>
                                  <div>
                                      <h3 className='text-lg font-medium text-gray-900'>Email</h3>
                                      <p className='text-gray-800'>cobtac@perfumestore.com</p>
                                      <p className='text-gray-600 text-sm'>support@perfume.com</p>
                                  </div>
                              </div>

                              <div className='flex items-start'>
                                  <div className='bg-purple-200 rounded-full p-3 mr-4'>
                                      <FaMapMarkedAlt className='text-purple-900 text-lg' />
                                  </div>
                                  <div>
                                      <h3 className='text-lg font-medium text-gray-900'>Our Boutique</h3>
                                      <p className='text-gray-800'>123 Perfume Street</p>
                                      <p className='text-gray-600 text-sm'>Gupiles, Cariari</p>
                                  </div>
                              </div>
                          </div>
                          <div className='mt-24'>
                              <h3 className='text-lg font-medium text-gray-900 mb-4'>Follow Us</h3>
                              <div className='flex space-x-4'>
                                  <a href="#" className='bg-purple-200 hover:bg-gray-200 p-3 rounded-full transition duration-300'>
                                      <FaInstagram className='text-purple-950' />
                                  </a>
                                  <a href="#" className='bg-purple-200 hover:bg-gray-200 p-3 rounded-full transition duration-300'>
                                      <FaFacebookF className='text-purple-950' />
                                  </a>
                                  <a href="#" className='bg-purple-200 hover:bg-gray-200 p-3 rounded-full transition duration-300'>
                                      <FaTwitter className='text-purple-950' />
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>


          </div>       
    </section>
  )
}
