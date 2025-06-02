import { setupWorker } from 'msw/browser';

import { handlers } from '../mocks';

export const worker = setupWorker(...handlers);

// Inicializa o MSW apenas no browser e em ambiente de desenvolvimento ou teste
if (
  typeof window !== 'undefined' &&
  (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test')
) {
}
