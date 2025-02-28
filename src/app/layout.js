'use client'
import "./globals.css"
import Navbar from "@/components/modules/Navbar";
import Footer from "@/components/modules/Footer";
import { useState, useEffect } from "react";
import { AppWrapper } from "@/context"


export default function RootLayout({ children }) {

  const [token, setToken] = useState(false)

  useEffect(() => {
    const getUserData = async () => {
      const response = await fetch("/api/user");
      const data = await response.json();
      if (data) {
        setToken(true)
      } else {
        setToken(false)
      }

    };
    getUserData();
  }, []);


  return (
    <html lang="en" dir="rtl">
      <body>
        <AppWrapper>
          <Navbar token={token} />
          {children}
          <Footer />
        </AppWrapper>

      </body>
    </html>
  );
}
