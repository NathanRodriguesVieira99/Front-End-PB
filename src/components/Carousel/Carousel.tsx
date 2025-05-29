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
  // LÓGICA DE FETCH dos games
  const fetchGames = async () => {
    try {
      const response = await api.get<IGames[]>('game');
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
            {data?.map((game_data: IGames) => (
              <CarouselItem
                key={game_data.id}
                className="m-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card.Root className="">
                  <Card.Image alt={game_data.name} src={game_data.image_url} />

                  <Card.Header>
                    <Card.Title title={game_data.name} />
                  </Card.Header>

                  <Card.Content>
                    <Card.Price price={game_data.price} />
                  </Card.Content>

                  <Card.Footer>
                    <Card.FooterItem text={game_data.developer} />
                    <Card.FooterItem text={game_data.release_date} />
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
            {data?.map((game_data: IGames) => (
              <CarouselItem
                key={game_data.id}
                className="m-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card.Root className="">
                  <Card.Image alt={game_data.name} src={game_data.image_url} />

                  <Card.Header>
                    <Card.Title title={game_data.name} />
                  </Card.Header>

                  <Card.Content>
                    <Card.Price price={game_data.price} />
                  </Card.Content>

                  <Card.Footer>
                    <Card.FooterItem text={game_data.developer} />
                    <Card.FooterItem text={game_data.release_date} />
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
            {data?.map((game_data: IGames) => (
              <CarouselItem
                key={game_data.id}
                className="m-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card.Root className="">
                  <Card.Image alt={game_data.name} src={game_data.image_url} />

                  <Card.Header>
                    <Card.Title title={game_data.name} />
                  </Card.Header>

                  <Card.Content>
                    <Card.Price price={game_data.price} />
                  </Card.Content>

                  <Card.Footer>
                    <Card.FooterItem text={game_data.developer} />
                    <Card.FooterItem text={game_data.release_date} />
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
