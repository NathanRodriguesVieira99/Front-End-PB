import type { Metadata } from 'next';

// Styles
import './globals.css';

// Fonts
import localFont from 'next/font/local';

export const fontMotivaSans = localFont({
  src: '../../assets/fonts/MotivaSansRegular.woff.ttf',
  variable: '--font-motivaSans',
});

// metadata
export const metadata: Metadata = {
  title: 'Projeto De Bloco (Front-end)',
  description: 'Front-end do nosso projeto de bloco',
};

// Providers
import { AppProvider } from '@/contexts/appProvider';

// Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${fontMotivaSans.variable}`}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
