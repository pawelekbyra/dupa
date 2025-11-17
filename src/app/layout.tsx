import './globals.css';

export const metadata = {
  title: 'Ting Tong',
  description: 'Ting Tong — pionowy feed wideo z prefetchingiem i trybem HLS/CDN-ready.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
