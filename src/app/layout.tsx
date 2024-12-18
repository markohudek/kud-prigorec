import './globals.css';
import '@/styles/_index.scss';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KUD Prigorec',
  description: 'Službena stranica KUD-a Prigorec',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <body>{children}</body>
    </html>
  );
}
