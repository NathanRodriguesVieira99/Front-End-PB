// arquivo para colocar os mocks de chamadas a API
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.post('', () => {
    return HttpResponse.json(
      {},
      {
        status: 200,
      }
    );
  }),
  http.get('', () => {
    return HttpResponse.json(
      {},
      {
        status: 200,
      }
    );
  }),
];
