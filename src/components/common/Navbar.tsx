'use client';

import { memo, useMemo } from 'react';
import { languageOptions, navbarLinks } from '@/constants';
import { ILanguageOption, INamedLink } from '@/types';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import tw from 'tailwind-styled-components';
import Button from './Button';

import book from '../../../public/icons/book.svg';
import govtLogo1 from '../../../public/icons/govt-logo-1.svg';
import govtLogo2 from '../../../public/icons/govt-logo-2.svg';
import user from '../../../public/icons/user.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { animationPreset } from '@/utils/anim';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const activeIndex = useMemo(() => {
    return navbarLinks.findIndex(
      (value: INamedLink) => value.href === pathname
    );
  }, [pathname]);

  return (
    <NavbarContainer
      style={{
        background:
          'linear-gradient(to bottom, var(--primary) 0%, var(--primary) 90%, transparent 100%)',
      }}
      initial={{ y: pathname === '/' ? -50 : 0 }}
      animate={{ y: 0 }}
      transition={{ ...animationPreset }}
    >
      <TopSection>
        <LogoSection>
          <StyledImage src={govtLogo1} alt="" width={40} />
          <DividerVertical />
          <StyledImage src={govtLogo2} alt="" width={35} />
          <Title>Shradheya Shri Atal Bihari Vajpayee Botanical Garden</Title>
        </LogoSection>
        <HeaderOptions>
          <LanguageSelect>
            {languageOptions.map((value: ILanguageOption, idx: number) => (
              <option key={idx} value={value.code}>
                {value.name}
              </option>
            ))}
          </LanguageSelect>
          <Button className="text-sm" iconSize={10} postIconNode={user}>
            Membership&apos;s Login
          </Button>
        </HeaderOptions>
      </TopSection>
      <HorizontalDivider />
      <NavLinkContainer>
        {navbarLinks.map((value: INamedLink, idx: number) => (
          <StyledNavLink
            key={idx}
            href={value.href}
            selected={activeIndex === idx}
          >
            {value.name}
          </StyledNavLink>
        ))}
        <Button variant="base" iconSize={16} preIconNode={book}>
          Buy Ticket
        </Button>
      </NavLinkContainer>
      <HorizontalDivider />
    </NavbarContainer>
  );
};

export default memo(Navbar);

const NavbarContainer = tw(motion.nav)`
  2xl:px-[20vw] xl:px-lg lg:px-md px-0 pb-4 font-sans w-full fixed top-0 space-y-2 z-[100] bg-primary
`;

const TopSection = tw.div`
  flex items-end text-sm
`;

const LogoSection = tw.div`
  flex space-x-2 items-end
`;

const StyledImage = tw(Image)`
  h-auto
`;

const DividerVertical = tw.div`
  border-l-[1px] border-tertiary-200
`;

const Title = tw.h2`
  text-secondary font-serif font-medium w-[200px]
`;

const HeaderOptions = tw.ul`
  ml-auto text-sm flex text-tertiary-200 font-sans font-bold space-x-3
`;

const LanguageSelect = tw.select`
  bg-transparent focus:outline-none py-2
`;

const HorizontalDivider = tw.hr`
  border-tertiary-200 opacity-40
`;

const NavLinkContainer = tw.ul`
  flex justify-between items-center px-6 text-xl whitespace-nowrap
`;

const StyledNavLink = tw(Link)<{ selected: boolean }>`
  ${props => (props.selected ? 'text-black' : 'text-secondary')}
  font-bold p-1 hover:opacity-80 transition-opacity duration-100
`;
