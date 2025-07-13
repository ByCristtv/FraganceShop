import React from 'react'
import { FiClock, FiGift, FiPercent } from 'react-icons/fi'

export default function Offers ()  {

    const currentOffers = [
        {
            id:1,
            title:"Summer Sales",
            description: "Up to 30% off on our summer perfume collection",
            endDate: "2026-08-31",
            discount: "30%",
            code: "SUMMER30",
            bgColor: 'bg-amber-200',
            textColor: "text-amber-700"
        },
        {
            id:2,
            title:"Free Perfume Offer",
            description: "get a free Perfume when you buy two products",
            endDate: "2026-08-04",
            code: "FREEPERFUME",
            discount: "GIFT",
            bgColor: "bg-purple-200",
            textColor: "text-purple-700"
        },
        {
            id:3,
            title:"New launch Discount",
            description: "20% off on our newly launched perfumes",
            endDate: "2026-03-31",
            code: "NEW20",
            discount: "20%",
            bgColor: 'bg-pink-200',
            textColor: "text-pink-700"
        },
    ]
  return (
    <section id='offers' className='container scroll-t-20 mx-auto px-4 py-12'>
        <h2 className='text-3xl font-bold text-center mb-2 text-stone-800'>Special Offers</h2>
        <p className='text-center text-gray-600 mb-12'> Take advantage of these limted-time offers</p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                currentOffers.map((offer) => (
                    < div key={offer.id}
                    className={`${offer.bgColor} rounded-xl shadow-lg overflow-hidden transition-transform
                     duration-300 hover:scale-105`}>
                        <div className='p-6'>
                            <div className='flex justify-between items-start mb-4'>
                                <h3 className={`${offer.textColor} text-xl font-semibold`}>
                                    {offer.title}
                                </h3>
                                {offer.discount.includes('%') ? (
                                    <sapn className='bg-white rounded-full p-3 shadow'>
                                        <FiPercent className={`${offer.textColor} text-2xl`}/>
                                    </sapn>

                                ) : (
                                    <span className='bg-white rounded-full p-3 shadow-md'>
                                        <FiGift className={`${offer.textColor} text-2xl`}/>
                                    </span>                                   
                                )}
                            </div>
                            <p className='text-gray-700 mb-6'>{offer.description}</p>
                            <div className='flex items-center text-gray-600 mb-6'>
                                <FiClock className='mr-2'/>
                                <span>Ends on {offer.endDate}</span>
                            </div>
                            <div className='bg-white rounded-lg p-4 mb-4'>
                                <p className='text-sm text-gray-500 mb-1'>Use code</p>
                                <p className='font-mono font-bold text-lg'>{offer.code}</p>
                            </div>
                            <button className={`w-full py-3 rounded-lg ${offer.textColor} font-semibold order
                            ${offer.textColor.replace('text', 'border')} hover:bg-white`}>
                                Claim Offer
                            </button>
                        </div>
                    </div>
                ))
            }
            

        </div>
        

    </section>
  )
}
