// componente criado para por todos os providers de contexts para o layout não ficar poluído
'use client';

import { MSWProvider } from './providers/msw-provider';
import ReactQueryProviders from './providers/react-query-provider';

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MSWProvider />
      <ReactQueryProviders>{children}</ReactQueryProviders>
    </>
  );
}
