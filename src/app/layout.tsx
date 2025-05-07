import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AK47Fashion',
  description: 'Your stylish fashion hub',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
