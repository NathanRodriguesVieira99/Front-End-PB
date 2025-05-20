import { Card } from '@/components/Card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export function CarouselSize() {
  // TODO buscar os dados dos jogos da API e exibir no map
  // TODO fazer o CSS do Carousel
  // TODO talvez adicionar mais lógica ao Carousel
  // Dados mockados para testes
  const cards = [
    {
      id: 1,
      alt: 'Assassin´s Creed Shadows',
      src: '/ac_shadows.jpg',
      title: 'Assassin´s Creed Shadows',
      price: 49.99,
    },
    {
      id: 2,
      alt: 'Cyberpunk 2077',
      src: '/cyberpunk.jpg',
      title: 'Cyberpunk 2077',
      price: 39.99,
    },
    {
      id: 3,
      alt: 'Elden Ring',
      src: '/elden_ring.jpg',
      title: 'Elden Ring',
      price: 59.99,
    },
    {
      id: 4,
      alt: 'God of War Ragnarök',
      src: '/god_of_war.jpg',
      title: 'God of War Ragnarök',
      price: 54.99,
    },
    {
      id: 5,
      alt: 'Horizon Forbidden West',
      src: '/horizon.jpg',
      title: 'Horizon Forbidden West',
      price: 49.99,
    },
    {
      id: 6,
      alt: 'The Last of Us Part II',
      src: '/tlou2.jpg',
      title: 'The Last of Us Part II',
      price: 44.99,
    },
  ];

  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-[90%]"
    >
      <CarouselContent className="w-full">
        {cards.map((card) => (
          <CarouselItem key={card.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card.Root>
                <Card.Image alt={card.alt} src={card.src} />
                <Card.Content>
                  <Card.Title title={card.title} />
                  <Card.Price price={card.price} />
                </Card.Content>
              </Card.Root>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
