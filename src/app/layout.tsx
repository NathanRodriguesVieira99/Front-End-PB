// Styles
import './globals.css';

// Fonts
import { Mona_Sans } from 'next/font/google';

const monaSans = Mona_Sans({
  subsets: ['latin'],
});

// metadata
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Projeto De Bloco (Front-end)',
  description: 'Front-end do nosso projeto de bloco',
  icons: {
    icon: '/icon.webp',
  },
};

// Providers
import { AppProvider } from '@/_contexts/appProvider';

// Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${monaSans.className}`}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
