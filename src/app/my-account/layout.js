'use client'
import AccountSidebar from "@/components/modules/AccountSidebar"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation";


export default function AccountLayout({ children }) {

    const router = useRouter()
    const [userChecker, setUserChecker] = useState(false); // Initialize with false
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getUserData = async () => {

            try {
                const response = await fetch("/api/user");
                if (response.ok) setUserChecker(true);
            } catch (error) {
                console.error("Fetch error:", error);
            } finally {
                setIsLoading(false); // Loading complete
            }
        };

        getUserData();

    }, []);

    useEffect(() => {
        if (!isLoading) {
            console.log("Use checker =>", userChecker)
            if (!userChecker) {
                router.replace('/')
            }

        }

    }, [userChecker, isLoading]);

    return (
        <div className="md:flex md:justify-center md:gap-x-6 md:px-26.5 md:py-12">
            <AccountSidebar />
            <hr />
            {children}
        </div>

    )

}