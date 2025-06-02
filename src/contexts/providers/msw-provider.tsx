// Inicializa o MSW no client durante desenvolvimento/testes para mockar requisições HTTP.
'use client';

import { useEffect } from 'react';

export function MSWProvider() {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      (process.env.NODE_ENV === 'development' ||
        process.env.NODE_ENV === 'test')
    ) {
      import('@/api/msw/setup/browser').then(({ worker }) => {
        worker.start({ onUnhandledRequest: 'bypass' });
      });
    }
  }, []);
  return null;
}
