'use client'
import React, { useState } from 'react'
import AddBranchSection from '@/components/templates/AddBranchSection'

export default function addBranch() {


    const [image, setImage] = useState({})
    const [branchName, setBranchName] = useState()
    const [address, setAddress] = useState()
    const [workTime, setWorkTime] = useState()

    const addBranchHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('branchName', branchName)
        formData.append('address', address)
        formData.append('workTime', workTime)
        formData.append('image', image)

        const response = await fetch('/api/createbranch', {
            method: "POST",
            body: formData
        })


    }

    return (
        <>
            <AddBranchSection />
        </>

    )
}
