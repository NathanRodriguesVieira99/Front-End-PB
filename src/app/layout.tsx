import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';

// Styles
import './globals.css';

// Fonts
const notoSans = Noto_Sans({
    subsets: ['latin'],
    variable: '--font-dynalight',
    weight: ['400', '700', '900'],
});

// metadata
export const metadata: Metadata = {
    title: 'Projeto De Bloco (Front-end0',
    description: 'Front-end do nosso projeto de bloco',
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
        <html lang="pt-BR">
            <body className={`${notoSans.className}`}>
                <AppProvider>{children}</AppProvider>
            </body>
        </html>
    );
}
