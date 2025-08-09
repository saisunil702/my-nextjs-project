import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Raj Kumar - ITR Tax Filing Services AY 2025-26',
  description: 'Professional ITR tax filing services by qualified auditor Raj Kumar. Stop tax worries with accurate, compliant, and timely filing for AY 2025-26.',
  keywords: 'ITR filing, tax services, income tax return, AY 2025-26, qualified auditor, tax compliance',
  authors: [{ name: 'Raj Kumar' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>{children}<Analytics /></body>
    </html>
  );
}