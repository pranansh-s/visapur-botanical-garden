import Image from 'next/image';
import tw from 'tailwind-styled-components';
import { memo } from 'react';
import govtLogo1 from '../../../public/icons/govt-logo-1.svg';
import govtLogo2 from '../../../public/icons/govt-logo-2.svg';
import call from '../../../public/icons/call.svg';
import mail from '../../../public/icons/mail.svg';
import place from '../../../public/icons/place.svg';
import tree from '../../../public/footer-tree.svg';
import ContactField from './ContactField';
import ContactLink from './ContactLink';
import { careerLinks, importants, quickLinks, socialLinks } from '@/constants';
import { IImportant, INamedLink } from '@/types';
import Link from 'next/link';
import ImportantCard from './ImportantCard';

const Footer: React.FC = memo(() => {
  return (
    <div className="px-lg h-max relative">
      <FooterContainer>
        <ConnectContainer>
          <span className="font-sans text-3xl font-bold uppercase">
            Welcome To
          </span>
          <div className="flex space-x-3">
            <Image src={govtLogo2} alt="" height={75} />
            <Image src={govtLogo1} alt="" height={75} />
          </div>
          <p className="text-sm font-bold font-sans">
            Shradheya Atal Bihari Vajpayee Botanical Garden, Ballarshah Rd,
            Visapur, Maharashtra 442701
          </p>
          {renderContactInfo()}
          {renderConnectOptions()}
        </ConnectContainer>
        {renderFooterLinks()}
      </FooterContainer>
      <Image
        className="absolute -left-16 -z-10 bottom-0 h-[600px]"
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
          <FLink href={link.href} key={idx}>
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
          className="w-[333px] h-[134px] pt-4"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3752.0101573359116!2d79.338103!3d19.881793!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd2d3005670f54d%3A0x5edb33057eed6c4f!2sBotanical%20Garden%20visapur!5e0!3m2!1sen!2sin!4v1729695839735!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </HowToReach>
      <Important>
        <LinkHeading className="text-4xl">Important</LinkHeading>
        {importants.map((important: IImportant, idx: number) => (
          <ImportantCard key={idx} {...important} />
        ))}
      </Important>
    </LinksContainer>
  );
};

const renderConnectOptions = () => {
  return (
    <>
      <p className="text-tertiary-200 text-xl font-sans font-bold pt-5">
        Connect
      </p>
      <ConnectOptions>
        {socialLinks.map((socialLink: INamedLink, idx: number) => (
          <ContactLink key={idx} {...socialLink} />
        ))}
      </ConnectOptions>
    </>
  );
};

const renderContactInfo = () => {
  return (
    <ContactInfo>
      <ContactField
        name="Contact No"
        icon={call}
        type="tel"
        value="+919264901704"
      />
      <ContactField
        name="Mail Us"
        icon={mail}
        type="mailto"
        value="prananshsingh@gmail.com"
      />
      <ContactField
        name="Direction"
        icon={place}
        value="https://maps.app.goo.gl/PevcTKxPUWTrHL39A"
      />
    </ContactInfo>
  );
};

Footer.displayName = 'Footer';
export default Footer;

const RightsReserved = tw.p`
  w-screen absolute left-0 text-[#EBFF00] font-serif font-extrabold py-6 tracking-[0.2rem] text-sm bg-hotpink text-center
`;

const FooterContainer = tw.div`
  flex text-secondary space-x-48 h-max mt-24
`;

const ConnectContainer = tw.div`
  flex-1 space-y-5
`;

const ConnectOptions = tw.div`
  grid grid-cols-3 grid-rows-2 gap-5 w-max
`;

const ContactInfo = tw.ul`
  flex flex-col space-y-2 justify-center
`;

const LinksContainer = tw.div`
  flex-[3] grid grid-cols-2 grid-rows-4 gap-8 h-[500px]
`;

const LinkHeading = tw.h4`
  font-sans font-bold text-secondary col-span-2 text-xl uppercase mb-2 w-full
`;

const FLink = tw(Link)`
  font-serif text-sm font-bold text-tertiary-200 hover:text-tertiary-100
`;

const CareerLinks = tw.ul`
  flex flex-col space-y-3 col-start-2 row-start-1 row-end-2
`;

const QuickLinks = tw.ul`
  grid grid-cols-2 gap-3 row-span-2 col-span-1
`;

const HowToReach = tw.div`
  col-start-2 row-start-2 row-end-3
`;

const Important = tw.div`
  col-span-2 row-span-2 flex flex-wrap h-max space-y-5
`;
