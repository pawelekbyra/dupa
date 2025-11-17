import './globals.css';
import AppProvider from '@/components/AppProvider';

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
    <html lang="en">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
