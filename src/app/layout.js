import "./globals.css"
import { cookies } from "next/headers";
import Navbar from "@/components/modules/Navbar";
import Footer from "@/components/modules/Footer";


export default async function RootLayout({ children }) {

  const cookie = cookies();
  const token = await cookie.has("token");


  return (
    <html lang="en" dir="rtl">
      <body>

        <Navbar token={token} />
        {children}
        <Footer />

      </body>
    </html>
  );
}
