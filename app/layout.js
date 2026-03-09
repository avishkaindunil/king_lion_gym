import { Oswald, Barlow } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['300', '400', '500', '600', '700'],
});

const barlow = Barlow({
  subsets: ['latin'],
  variable: '--font-barlow',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
  title: 'King Lion Gym — Sri Lanka\'s Premier Fitness Destination',
  description: 'Transform your body. Forge your legacy. King Lion Gym — Sri Lanka\'s most elite fitness experience featuring world-class equipment, expert trainers, and a premium environment.',
  keywords: 'gym, fitness, Sri Lanka, King Lion Gym, premium gym, workout, personal training',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${oswald.variable} ${barlow.variable} bg-lion-black text-lion-text antialiased`}>
        <div className="scan-line" />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
