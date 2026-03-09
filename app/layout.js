import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: "King Lion Gym — Sri Lanka's #1 Premium Fitness Destination",
  description: "Transform your body. Forge your legend. King Lion Gym — Negombo, Sri Lanka.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Manrope:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Manrope', sans-serif" }}>
        <div className="scan-line" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
