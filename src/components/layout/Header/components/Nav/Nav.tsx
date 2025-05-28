'use client';
import { Search } from 'lucide-react';
import { motion } from 'motion/react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { NavLink } from '../NavLink';
import { SearchInput } from '../SearchInput';

export const Nav = () => {
  return (
    <nav className="flex h-20 w-full items-center justify-between bg-store-darkest px-2.5">
      <section className="flex">
        <NavLink.Root className="rounded-sm bg-primary-light p-2 duration-300 ease-in hover:bg-secondary">
          <NavLink.Content>
            <NavLink.Text title="Home" href="#">
              Home
            </NavLink.Text>
          </NavLink.Content>
        </NavLink.Root>

        <NavLink.Root>
          <NavLink.Content>
            <NavLink.Text title="Browse" href="#">
              Browse
            </NavLink.Text>
          </NavLink.Content>
        </NavLink.Root>

        <NavLink.Root>
          <NavLink.Content>
            <NavLink.Text title="Points Shop" href="#">
              Points Shop
            </NavLink.Text>
          </NavLink.Content>
        </NavLink.Root>

        <NavLink.Root>
          <NavLink.Content>
            <NavLink.Text title="Gift Cards" href="#">
              Gift Cards
            </NavLink.Text>
          </NavLink.Content>
        </NavLink.Root>

        <NavLink.Root>
          <NavLink.Content>
            <NavLink.Text title="Curators" href="#">
              Curators
            </NavLink.Text>
          </NavLink.Content>
        </NavLink.Root>

        <NavLink.Root>
          <NavLink.Content>
            <NavLink.Text title="News" href="#">
              News
            </NavLink.Text>
          </NavLink.Content>
        </NavLink.Root>
      </section>

      <div className="mt-2.5">
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

      <section className="flex">
        <NavLink.Root className="cursor-pointer items-center justify-center">
          <NavLink.Content>
            <NavLink.Text title="WishList" href="#">
              Wishlist
            </NavLink.Text>
          </NavLink.Content>
        </NavLink.Root>

        <NavLink.Root>
          <NavLink.Content>
            <NavLink.Text title="Cart" href="#">
              Cart
            </NavLink.Text>
          </NavLink.Content>
        </NavLink.Root>
      </section>

      <motion.div
        initial={{ opacity: 0, x: -5 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -5 }}
        transition={{ duration: 0.5 }}
        className="mt-5 p-2.5"
      >
        <Avatar className="h-14 w-14 cursor-pointer">
          <AvatarFallback>NT</AvatarFallback>
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="Imagem de perfil do usuário"
          />
        </Avatar>
      </motion.div>
    </nav>
  );
};
