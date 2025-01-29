import "./globals.css"
import { cookies } from "next/headers";
import Navbar from "./components/modules/Navbar";
import Footer from "./components/modules/Footer";


export default function RootLayout({ children }) {
  const cookieStore = cookies();
  const hasToken = !!cookieStore.get('token')?.value;

  return (
    <html lang="en" dir="rtl">
      <body>

        <Navbar token={hasToken} />
        {children}
        <Footer />

      </body>
    </html>
  );
}
