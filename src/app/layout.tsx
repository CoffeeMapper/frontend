import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Header from '@/components/Header/Header';

import './globals.css';

const inter = Inter({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
  title: 'Coffee Mapper',
  description: 'Ваш гид по кофейням',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
