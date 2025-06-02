'use client';

import { FaLinkedin, FaGithub } from 'react-icons/fa';

import { FooterComponent } from './components';

const creators = [
  {
    id: 1,
    name: 'Nathan Rodrigues',
    linkedin: 'https://www.linkedin.com/in/nathan-rodrigues-vieira-207747252/',
    github: 'https://github.com/NathanRodriguesVieira99',
  },
  {
    id: 2,
    name: 'Natan Robers',
    linkedin: 'https://www.linkedin.com/in/natan-de-andrade-robers-6843652bb/',
    github: 'https://github.com/NatanRobers',
  },
  {
    id: 3,
    name: 'Victor Hugo',
    linkedin: 'https://www.linkedin.com/in/victor-moraes-026567213/',
    github: 'https://github.com/victormoraes0',
  },
];

export function Footer() {
  return (
    <footer className="w-full bg-[var(--Background-Highlight,#1E2329)] md:h-80">
      <FooterComponent.Root>
        <FooterComponent.Content>
          <FooterComponent.Logo
            src="/images/logo_footer.png" // TODO adicionar logo real
            alt="logo do site"
            width={250}
            height={250}
          />
          <FooterComponent.CopyrightText>
            <p className="text-2xl text-[#76808C] md:text-base">
              © اتّق دم البريء <br /> لا شيء مطلق، كل شيء ممكن <br /> اختبئ وسط
              الزّحام <br /> نحن من ائتمنك، لا تخن من ائتمنك.
            </p>
          </FooterComponent.CopyrightText>

          <FooterComponent.CreatorsList>
            {creators.map((creator) => (
              <div key={creator.id}>
                <FooterComponent.Creators name={creator.name} />
                <FooterComponent.IconsContainer>
                  <FooterComponent.Icon
                    icon={FaLinkedin}
                    href={creator.linkedin}
                    target="_blank"
                    title={`Perfil no ${creator.linkedin} de ${creator.name}`}
                  />
                  <FooterComponent.Icon
                    icon={FaGithub}
                    href={creator.github}
                    target="_blank"
                    title={`Perfil no ${creator.github} de ${creator.name}`}
                  />
                </FooterComponent.IconsContainer>
              </div>
            ))}
          </FooterComponent.CreatorsList>
        </FooterComponent.Content>
      </FooterComponent.Root>
    </footer>
  );
}
