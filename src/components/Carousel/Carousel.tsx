'use client';

import { useQuery } from '@tanstack/react-query';

import { IGames } from '@/@types/IGames';
import { Card } from '@/components/Card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { api } from '@/lib/axios';

import { CategoryTitle } from './components/CategoryTitle';

export function CarouselSize() {
  // Dados mockados para testes
  const cards: IGames[] = [
    {
      id: 1,
      image_url: '/ac_shadows.jpg',
      name: 'Assassin´s Creed Shadows',
      price: 49.99,
      developer: 'Ubisoft',
      release_date: '20/03/2025',
      category: 'Releases',
    },
    {
      id: 2,
      image_url: '/cyberpunk.jpg',
      name: 'Cyberpunk 2077',
      price: 39.99,
      developer: 'CD Project Red',
      release_date: '20/12/2020',
      category: 'Releases',
    },
    {
      id: 3,
      image_url: '/elden_ring.jpg',
      name: 'Elden Ring',
      price: 59.99,
      developer: 'Miazaki',
      release_date: '22/12/2022',
      category: 'Releases',
    },
    {
      id: 4,
      image_url: '/god_of_war.jpg',
      name: 'God of War Ragnarök',
      price: 54.99,
      developer: 'Santa Monica',
      release_date: '21/12/2021',
      category: 'Releases',
    },
    {
      id: 5,
      image_url: '/horizon.jpg',
      name: 'Horizon Forbidden West',
      price: 49.99,
      developer: 'Sony',
      release_date: '19/12/2019',
      category: 'Releases',
    },
    {
      id: 6,
      image_url: '/tlou2.jpg',
      name: 'The Last of Us Part II',
      price: 44.99,
      developer: 'Naughty Dog',
      release_date: '20/12/2022',
      category: 'Releases',
    },
  ];

  // LÓGICA DE FETCH dos games
  const fetchGames = async () => {
    try {
      const response = await api.get<IGames[]>('API URL');
      return response.data;
    } catch (error) {
      throw new Error('Erro ao buscar os jogos');
    }
  };

  const { data, isLoading } = useQuery({
    queryKey: ['games'],
    queryFn: fetchGames,
  });

  return (
    <>
      {/* Carrousel dos jogos Lançamentos */}

      <Carousel
        opts={{
          align: 'start',
          loop: true,
          dragFree: false,
        }}
        className="mt-44 w-[90%]"
      >
        <CategoryTitle>Releases</CategoryTitle>
        {isLoading ? (
          <div>Carregando...</div>
        ) : (
          <CarouselContent className="flex w-full">
            {cards.map((card: IGames) => (
              <CarouselItem
                key={card.id}
                className="m-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card.Root className="">
                  <Card.Image alt={card.name} src={card.image_url} />

                  <Card.Header>
                    <Card.Title title={card.name} />
                  </Card.Header>

                  <Card.Content>
                    <Card.Price price={card.price} />
                  </Card.Content>

                  <Card.Footer>
                    <Card.FooterItem text={card.developer} />
                    <Card.FooterItem text={card.release_date} />
                  </Card.Footer>
                </Card.Root>
              </CarouselItem>
            ))}
          </CarouselContent>
        )}
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Carrousel dos jogos Mais Vendidos */}

      <Carousel
        opts={{
          align: 'start',
          loop: true,
          dragFree: false,
        }}
        className="mt-32 w-[90%]"
      >
        <CategoryTitle>Most Sold</CategoryTitle>
        {isLoading ? (
          <div>Carregando...</div>
        ) : (
          <CarouselContent className="flex w-full">
            {cards.map((card: IGames) => (
              <CarouselItem
                key={card.id}
                className="m-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card.Root className="">
                  <Card.Image alt={card.name} src={card.image_url} />

                  <Card.Header>
                    <Card.Title title={card.name} />
                  </Card.Header>

                  <Card.Content>
                    <Card.Price price={card.price} />
                  </Card.Content>

                  <Card.Footer>
                    <Card.FooterItem text={card.developer} />
                    <Card.FooterItem text={card.release_date} />
                  </Card.Footer>
                </Card.Root>
              </CarouselItem>
            ))}
          </CarouselContent>
        )}
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Carrousel dos jogos Mais Jogados */}

      <Carousel
        opts={{
          align: 'start',
          loop: true,
          dragFree: false,
        }}
        className="mt-32 mb-12 w-[90%]"
      >
        <CategoryTitle>Most Played</CategoryTitle>
        {isLoading ? (
          <div>Carregando...</div>
        ) : (
          <CarouselContent className="flex w-full">
            {cards.map((card: IGames) => (
              <CarouselItem
                key={card.id}
                className="m-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card.Root className="">
                  <Card.Image alt={card.name} src={card.image_url} />

                  <Card.Header>
                    <Card.Title title={card.name} />
                  </Card.Header>

                  <Card.Content>
                    <Card.Price price={card.price} />
                  </Card.Content>

                  <Card.Footer>
                    <Card.FooterItem text={card.developer} />
                    <Card.FooterItem text={card.release_date} />
                  </Card.Footer>
                </Card.Root>
              </CarouselItem>
            ))}
          </CarouselContent>
        )}
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
