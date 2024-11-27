'use client';

import { NextPage } from 'next';
import Image from 'next/image';

import { support } from '@/constants';
import { IImageCard } from '@/types';
import tw from 'tailwind-styled-components';

import contactIcon from '../../../public/icons/call.svg';
import mailIcon from '../../../public/icons/mail.svg';
import placeIcon from '../../../public/icons/place.svg';
import heroImage from '../../../public/support/support-hero.webp';

import ImageCard from '@/components/common/ImageCard';

import { strings } from '@/constants/strings';

const Support: NextPage = () => {
  const renderGetInTouch = () => (
    <Section>
      <SupportHeading>{strings.support.getInTouch}</SupportHeading>
      <SupportBody>{strings.support.supportText}</SupportBody>
      <ContactContainer>
        <ContactGroup className="flex-1">
          <SupportSubHeading>{strings.support.queries}</SupportSubHeading>
          <ContactField>
            <Image src={mailIcon} alt="Mail Icon" />
            <p className="text-lg">
              {strings.support.contact.mailUs}
              <ContactValue>{strings.mailUsText}</ContactValue>
            </p>
          </ContactField>
          <ContactField>
            <Image src={contactIcon} alt="Contact Icon" className="mb-auto" />
            <p className="text-lg">
              {strings.support.contact.contactNo}
              <ContactValue>{strings.contactNoText.phone1}</ContactValue>
              <ContactValue className="block text-end">
                {strings.contactNoText.phone2}
              </ContactValue>
            </p>
          </ContactField>
        </ContactGroup>
        <ContactGroup>
          <SupportSubHeading>
            {strings.support.howToReach}
            <Image src={placeIcon} alt="Location Icon" className="w-12 h-12" />
          </SupportSubHeading>
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3752.0101573359116!2d79.338103!3d19.881793!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd2d3005670f54d%3A0x5edb33057eed6c4f!2sBotanical%20Garden%20visapur!5e0!3m2!1sen!2sin!4v1729695839735!5m2!1sen!2sin"
            title="Google Maps Location"
          />
          <Address>
            {strings.support.address.part1}
            <br />
            {strings.support.address.part2}
          </Address>
        </ContactGroup>
      </ContactContainer>
    </Section>
  );

  const renderCards = () => (
    <CardGrid>
      {support.map((supportCard: IImageCard, idx: number) => (
        <ImageCard
          className="hover:brightness-75 cursor-pointer transition-all duration-300"
          key={idx}
          {...supportCard}
        />
      ))}
    </CardGrid>
  );

  return (
    <Container>
      <HeroImage src={heroImage} alt="Support Hero Image" />
      {renderGetInTouch()}
      {renderCards()}
    </Container>
  );
};

export default Support;

const Container = tw.div`
  xl:px-lg lg:px-md px-sm
  sm:mt-48 mt-28
  space-y-12
`;

const Section = tw.section`
  flex flex-col space-y-6
`;

const SupportHeading = tw.h2`
  font-bold text-sans text-4xl sm:text-5xl md:text-6xl text-tertiary-200
`;

const SupportBody = tw.p`
  text-black text-base sm:text-lg md:text-xl font-serif
`;

const ContactContainer = tw.div`
  flex flex-col md:flex-row pt-12 space-y-10 md:space-y-0 md:space-x-12
`;

const ContactGroup = tw.div`
  flex flex-col space-y-6
`;

const SupportSubHeading = tw.h3`
  text-sans font-bold text-2xl sm:text-3xl text-secondary flex items-center space-x-2
`;

const ContactField = tw.div`
  flex items-center space-x-4 text-black font-bold font-sans text-base sm:text-lg md:text-xl
`;

const ContactValue = tw.span`
  font-serif text-sm sm:text-base md:text-lg
`;

const Iframe = tw.iframe`
  w-full sm:w-[333px] h-[134px] pt-4 border-0
`;

const Address = tw.span`
  font-sans font-bold text-sm sm:text-base mt-4 block
`;

const HeroImage = tw(Image)`
  w-full
`;

const CardGrid = tw.ul`
  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6
`;
