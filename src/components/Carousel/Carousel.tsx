'use client';

import { useQuery } from '@tanstack/react-query';

import { IGames } from '@/@types/IGames';
import { fetchGames } from '@/api/get-games';
import { Card } from '@/components/Card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { CategoryTitle } from './components/CategoryTitle';

export function CarouselSize() {
  const { data, isLoading } = useQuery({
    queryKey: ['games'],
    queryFn: fetchGames,
  });

  return (
    <>
      {/* Carrousel dos jogos Pré Venda */}
      <Carousel
        opts={{
          align: 'start',
          loop: true,
          dragFree: false,
        }}
        className="mt-32 w-[90%]"
      >
        <CategoryTitle>Mais Aguardados</CategoryTitle>
        {isLoading ? (
          <div className="text-text-main">Carregando...</div>
        ) : (
          <CarouselContent className="flex w-full">
            {data
              ?.filter(
                (game_data: IGames) => game_data.category === 'Pre Order'
              )
              .map((game_data: IGames) => (
                <CarouselItem
                  key={game_data.id}
                  className="m-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Card.Root className="">
                    <Card.Image
                      alt={game_data.name}
                      src={game_data.image_url}
                    />

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

      {/* Carrousel dos jogos FPS */}

      <Carousel
        opts={{
          align: 'start',
          loop: true,
          dragFree: false,
        }}
        className="mt-32 w-[90%]"
      >
        <CategoryTitle>FPS</CategoryTitle>
        {isLoading ? (
          <div className="text-text-main">Carregando...</div>
        ) : (
          <CarouselContent className="flex w-full">
            {data
              ?.filter((game_data: IGames) => game_data.category === 'FPS')
              .map((game_data: IGames) => (
                <CarouselItem
                  key={game_data.id}
                  className="m-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Card.Root className="">
                    <Card.Image
                      alt={game_data.name}
                      src={game_data.image_url}
                    />

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

      {/* Carrousel dos jogos de mundo aberto */}

      <Carousel
        opts={{
          align: 'start',
          loop: true,
          dragFree: false,
        }}
        className="mt-32 w-[90%]"
      >
        <CategoryTitle>Mundo Aberto</CategoryTitle>
        {isLoading ? (
          <div className="text-text-main">Carregando...</div>
        ) : (
          <CarouselContent className="flex w-full">
            {data
              ?.filter(
                (game_data: IGames) => game_data.category === 'Open World'
              )
              .map((game_data: IGames) => (
                <CarouselItem
                  key={game_data.id}
                  className="m-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Card.Root className="">
                    <Card.Image
                      alt={game_data.name}
                      src={game_data.image_url}
                    />

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

      {/* Carrousel dos jogos RPG */}

      <Carousel
        opts={{
          align: 'start',
          loop: true,
          dragFree: false,
        }}
        className="mt-32 mb-12 w-[90%]"
      >
        <CategoryTitle>RPG</CategoryTitle>
        {isLoading ? (
          <div className="text-text-main">Carregando...</div>
        ) : (
          <CarouselContent className="flex w-full">
            {data
              ?.filter((game_data: IGames) => game_data.category === 'RPG')
              .map((game_data: IGames) => (
                <CarouselItem
                  key={game_data.id}
                  className="m-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Card.Root className="">
                    <Card.Image
                      alt={game_data.name}
                      src={game_data.image_url}
                    />

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
