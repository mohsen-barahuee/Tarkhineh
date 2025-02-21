'use client'
import React, { useState, useEffect } from "react";

export default function myAccount() {

    const [userData, setUserData] = useState({})

    const [phoneNumber, setPhoneNumber] = useState(userData.phoneNumber)
    const [username, setUserName] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [birthDay, setBirthDay] = useState("")


    useEffect(() => {
        fetch("/api/user")
            .then(response => response.json())
            .then(data => setUserData(data.userAccount))
    }, [])



    const updateUserHandler = async () => {


        if (!username || !firstName || !lastName || !email || !birthDay) {
            alert("Values are empty")
            return false
        }


        const response = await fetch(`/api/${userData._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, phoneNumber, firstName, lastName, email, birthDay, })

        })

        if (!response.status === 200) {
            alert("Error")
            return false
        }

        setUserName("")
        setFirstName("")
        setLastName("")
        setEmail("")
        setBirthDay("")
        alert("Account Updated")

    }


    return (
        <>
            <div className='pt-6 px-6 border border-neutral-300 rounded-lg w-full'>
                <h2 className="text-H7 font-SemiBold mb-2">پروفایل من</h2>
                <hr />
                <div className='mt-12 flex flex-col justify-center gap-y-8 '>
                    <form className='grid grid-cols-2 gap-y-6 gap-x-4 child:rounded-md child:w-full px-[97px]'>
                        <input value={firstName} onChange={(event) => setFirstName(event.target.value)} type="text" placeholder='نام' className='border text-Body-SM font-Regular border-neutral-300 py-2 px-2 outline-none ' />
                        <input value={lastName} onChange={(event) => setLastName(event.target.value)} type="text" placeholder='نام خانوادگی' className='border text-Body-SM font-Regular border-neutral-300 py-2 px-2 outline-none ' />
                        <input value={email} onChange={(event) => setEmail(event.target.value)} type="text" placeholder='آدرس ایمیل' className='border text-Body-SM font-Regular border-neutral-300 py-2 px-2 outline-none ' />
                        <input value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} type="text" placeholder={userData.phoneNumber} className='border text-Body-SM font-Regular border-neutral-300 py-2 px-2 outline-none ' />
                        <input value={birthDay} onChange={(event) => setBirthDay(event.target.value)} type="text" placeholder='تاریخ تولد (اختیاری)' className='border text-Body-SM font-Regular border-neutral-300 py-2 px-2 outline-none ' />
                        <input value={username} onChange={(event) => setUserName(event.target.value)} type="text" placeholder='نام نمایشی' className='border text-Body-SM font-Regular border-neutral-300 py-2 px-2 outline-none ' />

                    </form>
                    <button onClick={updateUserHandler} className='mx-auto py-2.5 px-11 mb-32 text-Button-LG font-Bold text-Primary rounded-md border border-Primary'>ویرایش اطلاعات شخصی</button>
                </div>
            </div>
        </>
    )
}
