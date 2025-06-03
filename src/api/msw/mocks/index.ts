// arquivo para colocar os mocks de chamadas a API
import { http, HttpResponse } from 'msw';

import type { IGames } from '@/@types/IGames';

export const handlers = [
  // rota mockada para listar os jogos
  http.get<never, never, IGames[]>(
    `${process.env.NEXT_PUBLIC_API_KEY}game`,
    async () => {
      return HttpResponse.json(
        [
          {
            id: 59,
            name: 'Dark Souls II',
            image_url:
              'https://cdn2.steamgriddb.com/thumb/d2e1e5fd6a5a31160cc7846fa3201fb9.jpg',
            category: 'RPG',
            developer: 'From Software',
            price: 19.99,
            release_date: '2014-05-04',
          },
          {
            id: 60,
            name: 'Dark Souls III',
            image_url:
              'https://cdn2.steamgriddb.com/thumb/1a4234bfb7b99374539c2cf496ed73af.jpg',
            category: 'RPG',
            developer: 'From Software',
            price: 19.99,
            release_date: '2016-06-04',
          },
        ],
        {
          status: 200,
        }
      );
    }
  ),
  // rota mockada para caso venha de uma URL errada ou não tenha nada no retorno
  http.get(`${process.env.NEXT_PUBLIC_API_KEY}gamek`, async () => {
    return HttpResponse.json(null, {
      status: 404,
    });
  }),
];
