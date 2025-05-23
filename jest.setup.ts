// setup da React Testing Library
import '@testing-library/jest-dom';

// setup do MSW
import { server } from '@/api/msw/setup/node';
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// limpa todos os mocks a cada teste
afterEach(() => {
  jest.clearAllMocks();
});
