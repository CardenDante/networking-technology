import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Initialize fonts
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['500', '600', '700', '800'],
});

// Default metadata
export const metadata: Metadata = {
  title: {
    template: '%s | Networking Technology',
    default: 'Networking Technology - Affordable Internet at Your Doorstep',
  },
  description: 'Get affordable high-speed internet connectivity at your doorstep within a 2km radius of VOK.',
  keywords: ['internet service provider', 'affordable internet', 'VOK internet', 'fast connectivity', 'fiber internet'],
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://networkingtechnology.com/',
    siteName: 'Networking Technology',
    title: 'Networking Technology - Affordable Internet at Your Doorstep',
    description: 'Get affordable high-speed internet connectivity at your doorstep within a 2km radius of VOK.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Networking Technology - Affordable Internet',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}