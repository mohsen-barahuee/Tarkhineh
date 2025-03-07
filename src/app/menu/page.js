'use client'
import React, { useState, useEffect } from 'react'
import { useAppContext } from "@/context"

export default function MenuPage() {


    const [foods, setFoods] = useState([])
    const [foodLabels, setFoodLables] = useState([])
    const { basket, setBasket } = useAppContext();


    useEffect(() => {
        const getData = async () => {

            try {
                const response = await fetch("/api/createfood")

                const data = await response.json()
                setFoods(data)
            } catch (error) {
                console.log(error)
            }

        }

        getData()
    }, [])



    return (
        <div className="mb-6 md:mb-12 ">
            <img src="/images/menu/header.png" className="w-full h-[176px] md:h-auto" />
            <nav className='bg-neutral-200'>
                <ul className='flex gap-x-4 md:gap-x-8 pr-5 py-1.5 md:pr-26.5 md:py-3.5 child:text-Caption-LG md:child:text-H5 child:font-Bold child:cursor-default '>
                    <li>غذای اصلی</li>
                    <li>پیش غذا</li>
                    <li>دسر</li>
                    <li>نوشیدنی</li>
                </ul>
            </nav>
            <div className='flex justify-between items-center px-5 md:px-26.5 mt-14 '>
                <h2 className='text-H6 md:text-H4 font-Bold'>غذاهای ایرانی</h2>

                <button className='text-Caption-MD md:text-Button-LG font-Medium border-2 border-Primary rounded text-Primary px-2 py-1  md:px-9 md:py-1.5'>تکمیل خرید</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6  mt-6 px-5 md:px-26.5'>
                {foods.map((food, index) => {

                    return (
                        <div key={index} className='flex border md:gap-x-8 rounded-lg '>
                            <img className='w-[92px] md:w-[169px]' src={food.image} />
                            <div className=' w-full flex flex-col gap-y-2  py-2 px-2 md:px-4' >
                                <div className=' flex justify-between items-start'>
                                    <h4 className='text-Caption-MD md:text-H7 font-SemiBold'>{food.title}</h4>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='hidden md:block w-5' >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>

                                </div>
                                <div className='flex gap-x-1 md:gap-x-4.5'>
                                    <span className='text-Caption-SM md:text-Body-SM font-Regular overflow-hidden max-w-[141px] md:w-auto text-nowrap  md:text-wrap'>
                                        {food.deatails}
                                    </span>
                                    <span className='text-Caption-SM md:text-Body-LG font-Regular text-nowrap'>
                                        {food.price.toLocaleString("fa-IR")} تومان
                                    </span>
                                </div>

                                <div className='flex justify-between'>
                                    <div className='flex'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 md:w-6 text-yellow-400">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 md:w-6 text-yellow-400">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 md:w-6 text-yellow-400">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                        </svg> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 md:w-6 text-yellow-400">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                        </svg> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 md:w-6 text-yellow-400">
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <button onClick={() => setBasket((prev) => [...prev, food])} className='bg-Primary font-Regular text-Caption-SM md:text-Body-MD text-white px-2 py-1.5 md:py-1.5 rounded md:px-[55px]'>افزودن به سبد خرید</button>
                                </div>
                            </div>
                        </div>
                    )
                })}




            </div>


        </div>
    )
}
