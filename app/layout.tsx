import './globals.css';
import type { Metadata } from 'next';
import { Anton } from 'next/font/google';

const display = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Muhammad Fadhil Pradipta | Portfolio',
  description: 'Portfolio of Muhammad Fadhil Pradipta, an Informatics Engineering student focused on AI, machine learning, data science, and full-stack development.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={display.variable}>
      <body>{children}</body>
    </html>
  );
}
