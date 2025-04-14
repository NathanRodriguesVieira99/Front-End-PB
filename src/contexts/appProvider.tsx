'use client';

// componente criado para por todos os providers de contexts para o layout não ficar poluído

import ReactQueryProviders from './_providers/react-query-provider';

export function AppProvider({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ReactQueryProviders>{children}</ReactQueryProviders>
        </>
    );
}
