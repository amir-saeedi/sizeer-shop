import 'bootstrap/dist/css/bootstrap.css';
import "../styles/main.scss";
import { Inter } from 'next/font/google';
import Footer from "../components/Footer"
import Navbar from '../components/Navbar'
import localFont from 'next/font/local';
import { Providers } from "../redux/provider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const inter = Inter({ subsets: ['latin'] })
const myFont = localFont({ src: '../fonts/Borel-Regular.ttf' })
// const inter = Inter({ subsets: ['Lato'] })
// <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet">
// <link rel="shortcut icon" type="image/png" href="img/favicon.png">

// Font files can be colocated inside of `pages`

export const metadata = {
  title: 'Sizeer Shop',
  description: 'Created by Amir Saeedi',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
