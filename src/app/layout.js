"use client"
import React, { useState } from "react";
import "./globals.css"
import Navbar from "./components/modules/Navbar";
import Footer from "./components/modules/Footer";
import Search from "./components/modules/Search";
import Login from "./components/modules/Login";

export default function RootLayout({ children }) {


  const [loginModal, setLoginModal] = useState(false)
  const [serachModal, setSearchModal] = useState(false)

  const showLoginModal = () => {
    setLoginModal(true)
  }

  const closeLoginModal = () => {
    setLoginModal(false)
  }

  return (
    <html lang="en" dir="rtl">
      <body>
        {serachModal && (<Search setModal={setSearchModal} />)}
        {loginModal && (<Login onCloseModal={closeLoginModal} />)}
        <Navbar setSearchModal={setSearchModal} onShowModal={showLoginModal} />
        {children}
        <Footer />
        {loginModal || serachModal ? (<div className=' fixed top-0 bg-black/70 w-full h-[100vh]'>

        </div>) : ("")}
      </body>
    </html>
  );
}
