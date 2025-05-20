// setup da React Testing Library
import '@testing-library/jest-dom';

// setup do MSW
import { server } from '@/_lib/msw/setup/node';

// limpa todos os mocks a cada teste
afterEach(() => {
  jest.clearAllMocks();
});
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
