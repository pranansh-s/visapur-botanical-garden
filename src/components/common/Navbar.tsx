'use client';

import { memo, useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { importants, languageOptions } from '@/constants';
import i18n from '@/i18n';
import { IImportant, ILanguageOption, INamedLink } from '@/types';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import tw from 'tailwind-styled-components';

import govtLogo1 from '../../../public/icons/govt-logo-1.svg';
import govtLogo2 from '../../../public/icons/govt-logo-2.svg';

import {
  burgerLinks,
  navLinks,
  otherBurgerLinks,
  socialLinks,
} from '@/constants/links';
import { animationPreset } from '@/utils/anim';
import ContactLink from '../Footer/ContactLink';
import ImportantCard from '../Footer/ImportantCard';
import BurgerMenu from './BurgerMenu';
import Button from './Button';
import BuyTicket from './BuyTicket';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useTranslation();
  const activeIndex = useMemo(() => {
    return navLinks.findIndex((value: INamedLink) => value.href === pathname);
  }, [pathname]);

  const [active, setActive] = useState<boolean>(false);
  const [hideNews, setHideNews] = useState<boolean>(false);
  const hasMounted = useRef(pathname === '/' ? false : true);

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      document.body.classList.remove('body-no-scroll');
      hasMounted.current = true;
    }, 1500);

    return () => clearTimeout(initialDelay);
  }, []);

  useEffect(() => {
    if (!hasMounted.current) return;

    if (active) {
      document.body.classList.add('body-no-scroll');
    } else {
      document.body.classList.remove('body-no-scroll');
    }
    return () => document.body.classList.remove('body-no-scroll');
  }, [active]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

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
      {!hideNews && (
        <div className="bg-hotpink relative w-screen font-serif text-[#EBFF00] tracking-widest text-xs sm:text-sm uppercase font-bold py-1 px-3 text-center">
          OFFERS AND NEWS ABOUT THE GARDEN
          <span
            className="absolute sm:right-6 right-4 text-xl sm:text-2xl text-white cursor-pointer top-1/2 -translate-y-1/2 -translate-x-1/2"
            onClick={() => setHideNews(true)}
          >
            &times;
          </span>
        </div>
      )}
      <TopSection>
        <LogoSection onClick={() => router.push('/')}>
          <StyledImage
            src={govtLogo1}
            alt="Government of Maharashta"
            width={35}
          />
          <DividerVertical />
          <StyledImage src={govtLogo2} alt="Garden Logo" width={30} />
          <Title>{t('name')}</Title>
        </LogoSection>
        <HeaderOptions className="sm:flex hidden">
          <LanguageSelect
            id="language"
            defaultValue={i18n.resolvedLanguage}
            onChange={e => changeLanguage(e.target.value)}
          >
            {languageOptions.map((value: ILanguageOption, idx: number) => (
              <option key={idx} value={value.code}>
                {value.name}
              </option>
            ))}
          </LanguageSelect>
          <Button
            aria-label="education-program"
            className="text-sm"
            iconSize={10}
          >
            {t('navbar.educationProgram')}
          </Button>
        </HeaderOptions>
        <BurgerMenu active={active} setActive={setActive} />
      </TopSection>
      <HorizontalDivider />
      {renderDesktopNavbar(activeIndex, t)}
      {renderBurgerNavbar(active, activeIndex, setActive, hideNews, t)}
    </NavbarContainer>
  );
};

const renderBurgerNavbar = (
  active: boolean,
  activeIndex: number,
  setActive: any,
  hideNews: boolean,
  t: any
) => {
  return (
    <BurgerMenuContainer
      className={`${hideNews ? 'top-[5rem]' : 'top-[5.5rem]'} overflow-hidden ${active ? 'h-screen' : 'h-0'}`}
    >
      <div className="grid grid-cols-2 w-full">
        <BurgerNavLinkContainer>
          {navLinks.map((value: INamedLink, idx: number) => (
            <StyledBurgerLink
              key={idx}
              href={value.href}
              onClick={() => setActive(false)}
              selected={activeIndex == idx}
            >
              {t(value.name)}
            </StyledBurgerLink>
          ))}
        </BurgerNavLinkContainer>
        <BurgerNavLinkContainer>
          {burgerLinks.map((value: INamedLink, idx: number) => (
            <BurgerLink
              onClick={() => setActive(false)}
              key={idx}
              href={value.href}
            >
              {t(value.name)}
            </BurgerLink>
          ))}
        </BurgerNavLinkContainer>
      </div>
      <BurgerNavLinkContainer className="grid grid-cols-2">
        {otherBurgerLinks.map((value: INamedLink, idx: number) => (
          <BurgerLink
            className="text-sm font-semibold"
            key={idx}
            onClick={() => setActive(false)}
            href={value.href}
          >
            {t(value.name)}
          </BurgerLink>
        ))}
      </BurgerNavLinkContainer>
      <Importants>
        {importants.map((value: IImportant, idx: number) => (
          <ImportantCard
            className="flex flex-row space-x-3 w-screen"
            {...value}
            key={idx}
          />
        ))}
      </Importants>
      <ContactLinks>
        <span className="w-full text-tertiary-200 text-lg font-semibold">
          {t('navbar.contactUs')}
        </span>
        {socialLinks.map((socialLink: INamedLink, idx: number) => (
          <ContactLink key={idx} {...socialLink} />
        ))}
      </ContactLinks>
    </BurgerMenuContainer>
  );
};

const renderDesktopNavbar = (activeIndex: number, t: any) => {
  return (
    <>
      <NavLinkContainer className="sm:flex hidden">
        {navLinks.map((value: INamedLink, idx: number) => (
          <StyledNavLink
            key={idx}
            href={value.href}
            selected={activeIndex === idx}
            target={value.href.startsWith('https') ? '_blank' : '_self'}
          >
            {t(value.name)}
          </StyledNavLink>
        ))}
        <BuyTicket className="scale-[0.9]">
          <DotLottieReact
            src="/lottie/monkey.lottie"
            loop
            autoplay
            className="h-[15rem] absolute -top-1 group-hover:top-[0.5rem] -z-10 group-hover:opacity-100 opacity-0 transition-all duration-500 pointer-events-none"
          />
        </BuyTicket>
      </NavLinkContainer>
      <HorizontalDivider className="sm:block hidden" />
    </>
  );
};

export default memo(Navbar);

const NavbarContainer = tw(motion.nav)`
  xl:px-lg lg:px-md sm:px-sm sm:pb-6 pb-3 font-sans fixed top-0 space-y-2 -mb-2 z-[70] bg-primary w-screen left-0 flex flex-col items-center
`;

const TopSection = tw.div`
  flex items-center text-sm md:py-0 py-2 px-2 relative max-w-[1536px] w-full
`;

const LogoSection = tw.div`
  flex space-x-2 items-center max-w-[80%] cursor-pointer
`;

const StyledImage = tw(Image)`
  h-auto
`;

const DividerVertical = tw.div`
  border-l-[1px] border-tertiary-200
`;

const Title = tw.h3`
  text-secondary font-serif font-medium w-[200px] sm:text-base text-sm !leading-5
`;

const HeaderOptions = tw.div`
  ml-auto text-sm flex text-tertiary-200 font-sans font-bold space-x-3
`;

const LanguageSelect = tw.select`
  bg-transparent focus:outline-none py-2
`;

const HorizontalDivider = tw.hr`
  border-tertiary-200 opacity-40 max-w-[1536px] w-full
`;

const NavLinkContainer = tw.div`
  flex justify-between items-center px-6 whitespace-nowrap max-w-[1536px] w-full
`;

const BurgerNavLinkContainer = tw(NavLinkContainer)`
  flex-col justify-start items-start w-full border-b-[1px] border-gray-400/40 px-0
`;

const BurgerLink = tw(Link)`
  text-gray-600 font-serif text-base font-bold py-2 pr-5 w-max
`;

const Importants = tw.div`
  grid grid-cols-1 gap-x-[18rem] scale-[0.8] origin-top-left
`;

const ContactLinks = tw.div`
  flex flex-wrap gap-1 items-start py-0 !-mt-10 w-full
`;

const StyledBurgerLink = tw(Link)<{ selected: boolean }>`
  ${props => (props.selected ? 'text-tertiary-200 !font-bold' : 'text-secondary')}
  font-medium text-base font-serif py-2
`;

const StyledNavLink = tw(Link)<{ selected: boolean }>`
  ${props => (props.selected ? 'text-black' : 'text-secondary')}
  font-bold p-1 hover:brightness-75 transition-opacity duration-100 text-lg
`;

const BurgerMenuContainer = tw.div`
  bg-primary transition-all sm:hidden block duration-500 ease w-screen fixed overflow-x-hidden overflow-y-scroll flex items-center flex-col space-y-2 px-4
`;
