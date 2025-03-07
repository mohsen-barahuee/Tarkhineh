'use client'
import React, { useState } from "react"
import BasketNavBar from "@/components/modules/basketNavBar"
import BasketValues from "@/components/modules/basketCard/BasketValues"
import { usePathname } from "next/navigation"



export default function BasketLayout({ children }) {

    const pathname = usePathname()
    const [userChecker, setUserChecker] = useState(false)

    async function userHandler() {

        const response = await fetch("/api/user")
        const data = await response.json()
        if (response.status === 200) {
            setUserChecker(true)
        }

    }

    userHandler()


    return (
        <div className="md:px-26.5 py-10">
            <BasketNavBar status={pathname} />
            <div className=" flex justify-center gap-x-6">
                {children}
                <BasketValues isUserLogin={userChecker} />

            </div>
        </div>

    )

}


