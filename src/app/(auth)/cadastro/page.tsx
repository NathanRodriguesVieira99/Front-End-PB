'use client';

import { Suspense, lazy } from 'react';
const CadastroForm = lazy(() => import('./components/cadastroForm'));

export default function CadastroPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-store-darker font-main">
      <Suspense
        fallback={
          <div>
            <p className="text-2xl text-text-main">loading...</p>
          </div>
        }
      >
        <CadastroForm />
      </Suspense>
    </div>
  );
}
