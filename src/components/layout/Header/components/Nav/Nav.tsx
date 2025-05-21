import { Search } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { HeaderButton } from '../HeaderButton';
import { SearchInput } from '../SearchInput';

export const Nav = () => {
  return (
    <nav className="flex h-14 w-full items-center justify-around gap-2.5 space-x-3 bg-store-dark pl-2.5">
      <section className="flex">
        <HeaderButton.Root className="rounded-sm bg-primary-light p-2 duration-300 ease-in hover:bg-secondary">
          <HeaderButton.Content>
            <HeaderButton.Text>Home</HeaderButton.Text>
          </HeaderButton.Content>
        </HeaderButton.Root>

        <HeaderButton.Root>
          <HeaderButton.Content>
            <HeaderButton.Text>Browse</HeaderButton.Text>
          </HeaderButton.Content>
        </HeaderButton.Root>

        <HeaderButton.Root>
          <HeaderButton.Content>
            <HeaderButton.Text>Points Shop</HeaderButton.Text>
          </HeaderButton.Content>
        </HeaderButton.Root>

        <HeaderButton.Root>
          <HeaderButton.Content>
            <HeaderButton.Text>Gift Cards</HeaderButton.Text>
          </HeaderButton.Content>
        </HeaderButton.Root>

        <HeaderButton.Root>
          <HeaderButton.Content>
            <HeaderButton.Text>Curators</HeaderButton.Text>
          </HeaderButton.Content>
        </HeaderButton.Root>

        <HeaderButton.Root>
          <HeaderButton.Content>
            <HeaderButton.Text>News</HeaderButton.Text>
          </HeaderButton.Content>
        </HeaderButton.Root>
      </section>

      <div className="flex w-full items-center justify-around">
        <SearchInput.Root>
          <SearchInput.Content>
            <SearchInput.Input
              type="text"
              placeholder="search..."
              name="search"
            />
            <SearchInput.Icon
              icon={Search}
              className="absolute z-50 ml-[475px] size-4 cursor-pointer text-secondary"
            />
          </SearchInput.Content>
        </SearchInput.Root>
      </div>

      <section className="ml-[-180px] flex w-full items-center">
        <HeaderButton.Root className="">
          <HeaderButton.Content>
            <HeaderButton.Text>Wishlist</HeaderButton.Text>
          </HeaderButton.Content>
        </HeaderButton.Root>

        <HeaderButton.Root>
          <HeaderButton.Content>
            <HeaderButton.Text>Cart</HeaderButton.Text>
          </HeaderButton.Content>
        </HeaderButton.Root>

        <Avatar className="mt-5 ml-[50px] h-14 w-14 cursor-pointer">
          <AvatarFallback>NT</AvatarFallback>
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
      </section>
    </nav>
  );
};
