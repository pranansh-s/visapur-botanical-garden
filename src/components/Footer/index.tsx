'use client';

import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { importants } from '@/constants';
import { IImportant, INamedLink } from '@/types';
import tw from 'tailwind-styled-components';

import tree from '../../../public/footer-tree.svg';
import call from '../../../public/icons/call.svg';
import govtLogo1 from '../../../public/icons/govt-logo-1.svg';
import govtLogo2 from '../../../public/icons/govt-logo-2.svg';
import mail from '../../../public/icons/mail.svg';

import { careerLinks, quickLinks, socialLinks } from '@/constants/links';
import BuyTicket from '../common/BuyTicket';
import ContactField from './ContactField';
import ContactLink from './ContactLink';
import ImportantCard from './ImportantCard';

const Footer: React.FC = memo(() => {
  return (
    <div className="xl:px-lg lg:px-md px-sm h-max relative">
      <FooterContainer>
        <ConnectContainer>
          <span className="font-sans text-3xl font-bold uppercase">
            Welcome To
          </span>
          <div className="flex space-x-3">
            <Image src={govtLogo2} alt="" height={75} />
            <Image src={govtLogo1} alt="" height={75} />
          </div>
          <p className="sm:text-sm text-lg font-bold font-sans">
            Shradheya Atal Bihari Vajpayee Botanical Garden, Ballarshah Rd,
            Visapur, Maharashtra 442701
          </p>
          {renderContactInfo()}
          {renderConnectOptions()}
          <BuyTicket className="fixed bottom-[5%] left-1/2 -translate-x-1/2 shadow-xl z-[50] sm:hidden flex !mt-24" />
        </ConnectContainer>
        {renderFooterLinks()}
      </FooterContainer>
      <Image
        className="absolute left-0 -translate-x-1/3 -z-10 bottom-0 h-[600px]"
        src={tree}
        alt=""
      />
      <RightsReserved>
        Copyright 2024. Shradheya Atal Bihari Vajpayee Botanical Garden, All
        Rights Reserved.
      </RightsReserved>
    </div>
  );
});

const renderFooterLinks = () => {
  return (
    <LinksContainer>
      <QuickLinks>
        <LinkHeading>Quick Links</LinkHeading>
        {quickLinks.map((link: INamedLink, idx: number) => (
          <FLink
            href={link.href}
            target={link.href.startsWith('https') ? '_blank' : '_self'}
            key={idx}
          >
            {link.name}
          </FLink>
        ))}
      </QuickLinks>
      <CareerLinks>
        <LinkHeading>Career</LinkHeading>
        {careerLinks.map((link: INamedLink, idx: number) => (
          <FLink href={link.href} key={idx}>
            {link.name}
          </FLink>
        ))}
      </CareerLinks>
      <HowToReach>
        <LinkHeading>How To Reach</LinkHeading>
        <iframe
          className="lg:w-[333px] w-[220px] lg:h-[134px] h-[100px]"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3752.0101573359116!2d79.338103!3d19.881793!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd2d3005670f54d%3A0x5edb33057eed6c4f!2sBotanical%20Garden%20visapur!5e0!3m2!1sen!2sin!4v1729695839735!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </HowToReach>
      <Important>
        <LinkHeading className="text-4xl">Important</LinkHeading>
        {importants.map((important: IImportant, idx: number) => (
          <ImportantCard
            className="max-w-[110px] w-full"
            key={idx}
            {...important}
          />
        ))}
      </Important>
    </LinksContainer>
  );
};

const renderConnectOptions = () => {
  return (
    <ConntectOptionsContainer>
      <p className="text-tertiary-200 text-xl font-sans font-bold">Connect</p>
      <ConnectOptions>
        {socialLinks.map((socialLink: INamedLink, idx: number) => (
          <ContactLink key={idx} {...socialLink} />
        ))}
      </ConnectOptions>
    </ConntectOptionsContainer>
  );
};

const renderContactInfo = () => {
  return (
    <ContactInfo>
      <div className="flex flex-row sm:flex-col sm:items-start items-center">
        <ContactField
          name="Contact No"
          icon={call}
          type="tel"
          value="+91 94050 66433"
        />
        <strong className="text-3xl sm:hidden block">&nbsp;/</strong>
        <Link
          href={'tel:+917172458671'}
          className="font-sans font-semibold sm:text-base text-lg w-max underline ml-auto sm:-translate-x-[117.5%] whitespace-nowrap"
        >
          +91 71724 58671
        </Link>
      </div>
      <ContactField
        name="Mail Us"
        icon={mail}
        type="mailto"
        value="atalbotanicalgarden@mahaforest.gov.in"
      />
    </ContactInfo>
  );
};

Footer.displayName = 'Footer';
export default Footer;

const RightsReserved = tw.p`
  w-screen absolute left-1/2 -translate-x-1/2 text-[#EBFF00] font-serif font-extrabold py-6 tracking-[0.2rem] text-xs sm:text-sm bg-hotpink text-center
`;

const FooterContainer = tw.div`
  flex text-secondary lg:space-x-16 md:space-x-8 sm:space-x-5 h-max mt-48 max-h-[500px]
`;

const ConnectContainer = tw.div`
  w-full flex-1 space-y-5 flex flex-col sm:items-start items-center sm:text-start text-center sm:mb-0 mb-72 sm:px-16 px-0
`;

const ConntectOptionsContainer = tw.div`
  space-y-3 sm:block hidden
`;

const ConnectOptions = tw.div`
  grid-cols-3 grid-rows-2 gap-2 w-max grid
`;

const ContactInfo = tw.ul`
  flex flex-col space-y-2 justify-center
`;

const LinksContainer = tw.div`
  grid-cols-2 grid-rows-4 gap-8 sm:grid hidden
`;

const LinkHeading = tw.h4`
  font-sans font-bold text-secondary col-span-2 text-xl uppercase mb-2 w-full
`;

const FLink = tw(Link)`
  font-serif text-sm font-bold text-tertiary-200 hover:text-tertiary-100 h-max w-max p-3 -ml-3
`;

const CareerLinks = tw.ul`
  flex-col col-start-2 row-start-1 row-end-2 md:flex hidden
`;

const QuickLinks = tw.ul`
  grid md:grid-cols-2 row-span-2 gap-x-12
`;

const HowToReach = tw.div`
  col-start-2 row-start-2 row-end-3 md:block hidden overflow-hidden -mb-20
`;

const Important = tw.div`
  col-span-2 flex flex-wrap items-start lg:scale-100 scale-[0.75] origin-top-left mt-3 md:w-full w-[20rem]
`;
