import type { Metadata } from 'next';
import { Braah_One, Merriweather, Merriweather_Sans } from 'next/font/google';

import Navbar from '@/components/common/Navbar';
import SplashScreen from '@/components/common/SplashScreen';
import Footer from '@/components/Footer';

import './globals.css';

const merriweather = Merriweather({
  subsets: ['latin'],
  variable: '--font-merriweather',
  weight: ['400', '700', '900'],
});

const merriweatherSans = Merriweather_Sans({
  subsets: ['latin'],
  variable: '--font-merriweather-sans',
  weight: ['400'],
});

const braahOne = Braah_One({
  subsets: ['latin'],
  variable: '--font-braah-one',
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Visapur Botanical Garden',
  description: 'Shradheya Atal Bihari Vajpayee Botanical Garden',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <body
        className={`${merriweather.variable} ${merriweatherSans.variable} ${braahOne.variable} body-no-scroll bg-primary max-w-[1536px] mx-auto overflow-x-clip antialiased`}
      >
        <SplashScreen />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
