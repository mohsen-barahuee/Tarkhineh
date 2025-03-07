'use client'
import BasketNavBar from "@/components/modules/basketNavBar"
import BasketValues from "@/components/modules/basketCard/BasketValues"
import { usePathname } from "next/navigation"


export default function BasketLayout({ children }) {

    const pathname = usePathname()

  

    return (
        <div className="py-10">
            <BasketNavBar status={pathname} />
            <div className=" flex justify-center gap-x-6">
                {children}
                <BasketValues />

            </div>
        </div>

    )

}


