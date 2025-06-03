describe('API tests', () => {
  it('should GET games array from API', async () => {
    // faz o fetch da rota mockada com MSW
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}game`);
    // converte para JSON
    const data = await response.json();

    // verifica se retorna o array de jogos mockados
    expect(data).toEqual([
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
    ]);
  });

  it('should return success status 200', async () => {
    // faz o fetch da rota mockada com MSW
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}game`);

    // espera que retorne status 200 (ok)
    expect(response.status).toBe(200);
  });

  it('should return null when 404 error', async () => {
    // faz o fetch da rota de erro mockada com MSW
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}gamek`);
    // converte para JSON
    const data = await response.json();

    // verifica se deu erro 404 (not found)
    expect(response.status).toBe(404);
    // verifica se o retorno é null (array vazio)
    expect(data).toBeNull();
  });
});
