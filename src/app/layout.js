import "./globals.css";
import Navbar from '../../components/modules/Navbar';


export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
