'use client'
import React from 'react'
import { useAppContext } from "@/context"
import Link from 'next/link';


export default function MyOrders() {

    const { basket, setBasket } = useAppContext();



    return (
        <div className='container'>

            {basket && (<div className='border p-6  rounded-lg ' >
                <h6 className='text-H7 font-SemiBold border-b pb-2'>سفارشات</h6>
                <div className='w-full mt-4 mb-8'>
                    <ul className=' flex gap-x-2 child:px-2 child:py-1 child:text-Overline-LG child:bg-neutral-300 child-hover:bg-Primary/30 child-hover:text-Primary chid:transition-all child:duration-200  child:flex child:items-center child:justify-center child:rounded-5xl child:cursor-pointer '>
                        <li>همه</li>
                        <li>جاری</li>
                        <li>تحویل داده شده</li>
                        <li>لغو شده</li>
                    </ul>
                </div>
                <div>
                    <ul className='text-H6 font-Bold flex justify-between'>
                        <li>در حال آماده سازی</li>
                        <li className='text-Caption-LG text-neutral-400 font-Regular'>ارسال توسط پیک</li>
                        <li className='text-Caption-LG text-neutral-400 font-Regular'>تحویل سفارش</li>
                    </ul>
                </div>
                <div className='max-w-[980px] overflow-x-scroll py-5'>
                    <div className='flex flex-nowrap   gap-x-4 mt-4 '>
                        {basket.map((items, index) => {
                            return (
                                <div key={index} className='child:font-Regular border rounded-lg min-w-[120px]'>
                                    <div>

                                        <img src={items.image} className='w-[120px] h-[80px]  rounded-t-lg' />
                                    </div>
                                    <div className='flex flex-col items-center py-1'>

                                        <span className='text-Caption-SM'>{items.title}</span>
                                        <span className='text-Caption-SM'>{items.price} تومان</span>
                                    </div>

                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className='flex justify-end mt-10'>

                    <button className='text-Error border-2 border-Error px-8 py-1.5 rounded-lg font-Regular text-Caption-MD'>لغو سفارش</button>
                </div>
            </div>)}
            {!basket && (<div className='flex flex-col gap-y-10 justify-center items-center h-[300px] relative'>
                <img className='absolute -z-20 opacity-50' src="/images/spider-bg.png" alt="" />
                <h2 className='text-Body-XL  font-Regular text-neutral-600'>شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!</h2>
                <Link className='border-2 flex transition-all duration-150 border-Primary hover:bg-Primary hover:text-white px-24 py-2 text-Primary rounded-lg font-text-Button-LG' href={'/menu'}>
                    منوی رستوران
                </Link>
            </div>)}



        </div>
    )
}
