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

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const activeIndex = useMemo(() => {
    return navbarLinks.findIndex(
      (value: INamedLink) => value.href === pathname
    );
  }, [pathname]);

  const renderNavLinks = () => {
    return (
      <NavLinkContainer>
        {navbarLinks.map((value: INamedLink, idx: number) => (
          <StyledNavLink
            selected={activeIndex === idx}
            key={idx}
            href={value.href}
          >
            {value.name}
          </StyledNavLink>
        ))}
        <Button variant="base" iconSize={16} preIconNode={book}>
          Buy Ticket
        </Button>
      </NavLinkContainer>
    );
  };

  return (
    <nav className="px-lg font-sans w-full fixed top-0 space-y-4 z-[100] bg-primary">
      <div className="flex items-end text-sm">
        <div className="flex space-x-2 items-end">
          <Image src={govtLogo1} alt="" width={40} />
          <div className="h-12 border-l-[1px] border-tertiary-200" />
          <Image src={govtLogo2} alt="" width={35} />
          <h2 className="text-secondary font-serif font-semibold w-48">
            Shradheya Shri Atal Bihari Vajpayee Botanical Garden
          </h2>
        </div>
        <Header>
          <select className="bg-transparent focus:outline-none py-2">
            {languageOptions.map((value: ILanguageOption, idx: number) => (
              <option key={idx} value={value.code}>
                {value.name}
              </option>
            ))}
          </select>
          <Button className="text-sm" iconSize={10} postIconNode={user}>
            Membership&apos;s Login
          </Button>
        </Header>
      </div>
      <Divider />
      {renderNavLinks()}
      <Divider />
    </nav>
  );
};

export default memo(Navbar);

const Divider = tw.hr`
  border-tertiary-200 opacity-40
`;

const Header = tw.ul`
  ml-auto text-sm flex text-tertiary-200 font-sans font-bold space-x-3
`;

const NavLinkContainer = tw.ul`
  flex justify-between items-center px-6 text-xl
`;

const StyledNavLink = tw(Link)<{ selected: boolean }>`
  ${props => (props.selected ? 'text-black' : 'text-secondary')}
  font-bold p-2 hover:opacity-80 transition-opacity duration-100
`;
