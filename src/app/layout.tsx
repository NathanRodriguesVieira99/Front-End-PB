// Styles
import './globals.css';

// Fonts
import type { Metadata } from 'next';
import { Mona_Sans } from 'next/font/google';

// metadata

// Providers
import { AppProvider } from '@/_contexts/appProvider';

const monaSans = Mona_Sans({
  subsets: ['latin'],
});
export const metadata: Metadata = {
  title: 'Projeto De Bloco (Front-end)',
  description: 'Front-end do nosso projeto de bloco',
  icons: {
    icon: '/icon.webp',
  },
};

// MSW
if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('@/_lib/msw/setup');
}

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
