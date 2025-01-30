import "./globals.css"
// import { cookies } from "next/headers";
import Navbar from "./components/modules/Navbar";
import Footer from "./components/modules/Footer";


export default function RootLayout({ children }) {

  // const cookie = cookies();
  // const token = cookie.has("token");

  return (
    <html lang="en" dir="rtl">
      <body>

        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  );
}
