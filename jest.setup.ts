// setup da React Testing Library
import '@testing-library/jest-dom';

// limpa todos os mocks a cada teste
afterEach(() => {
  jest.clearAllMocks();
});

// setup do MSW
import { server } from '@/_tests/mocks/server';
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
