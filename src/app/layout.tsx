import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Devesh Sharma | Full-Stack Developer',
  description: 'Full-Stack Web Developer passionate about creating modern, responsive, and user-centric web applications.',
  keywords: 'Devesh Sharma, Portfolio, Full-Stack, Web Developer, React, Next.js, Node.js, MongoDB, Express',
  authors: [{ name: 'Devesh Sharma' }],
  creator: 'Devesh Sharma',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://devesh-portfolio.vercel.app',
    title: 'Devesh Sharma | Full-Stack Developer',
    description: 'Full-Stack Web Developer passionate about creating modern, responsive, and user-centric web applications.',
    siteName: 'Devesh Sharma Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devesh Sharma | Full-Stack Developer',
    description: 'Full-Stack Web Developer passionate about creating modern, responsive, and user-centric web applications.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        {children}
      </body>
    </html>
  );
}
