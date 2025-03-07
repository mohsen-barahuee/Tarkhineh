'use client'
import React from 'react'
import { useAppContext } from "@/context";


export default function Basket() {


    const { basket, setBasket } = useAppContext();

    return (
        <div>
            Basket
        </div>
    )
}
