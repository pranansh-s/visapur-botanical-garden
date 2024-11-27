'use client';

import { useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';

import { bookingGroups } from '@/constants';
import { IExpandGroup } from '@/types';
import tw from 'tailwind-styled-components';

import buggyImage from '../../../public/Buggy.svg';

import BuyTicket from '@/components/common/BuyTicket';
import Heading from '@/components/common/Heading';
import AnimatedBuggy from '@/components/PlanYourVisit/AnimatedBuggy';
import ExpandGroup from '@/components/PlanYourVisit/ExapndGroup';

import { strings } from '@/constants/strings';

const PlanYourVisit: NextPage = () => {
  const [activeGroup, setActiveGroup] = useState<number>(-1);

  const renderWelcomeSection = () => (
    <Section id="welcome">
      <Heading name={strings.visit.welcome.title} />
      <HeadingSubText>{strings.visit.welcome.subText}</HeadingSubText>
      <WelcomeBody>
        {strings.visit.welcome.body.part1}
        <br />
        {strings.visit.welcome.body.part2}
      </WelcomeBody>
      <BookingGroupsContainer>
        {bookingGroups.map((group: IExpandGroup, idx: number) => (
          <ExpandGroup
            key={idx}
            activeIndex={activeGroup}
            index={idx}
            setActive={setActiveGroup}
            {...group}
          />
        ))}
      </BookingGroupsContainer>
    </Section>
  );

  const renderWhatWeOfferSection = () => (
    <Section id="things-to-offer">
      <Heading name={strings.visit.whatWeOffer.title} />
      <HeadingSubText>{strings.visit.whatWeOffer.subText}</HeadingSubText>
      <Iframe
        src="https://youtube.com/embed/2jNh2S2LGiI?si=wJZclo6J7g67-ktO"
        className="sm:h-[600px] h-[50vw]"
        title="Main Attractions"
      />
      <MapContainer>
        <AnimatedBuggy />
        <ThankYouSection>
          <ThankYouText>
            <Image
              src={buggyImage}
              width={50}
              height={50}
              alt="Buggy"
              className="md:w-36 w-28 h-28 md:h-36 absolute -left-5 -translate-x-full translate-y-[25%] bottom-0 sm:block hidden"
            />
            {strings.visit.whatWeOffer.thankYou}
          </ThankYouText>
          <ThankBody>{strings.visit.whatWeOffer.thankYouText}</ThankBody>
          <BuyTicket className="sm:flex hidden" />
        </ThankYouSection>
      </MapContainer>
    </Section>
  );

  return (
    <Container>
      <Iframe
        src="https://youtube.com/embed/n1dZ6Kv2Lho?si=sxIRXliMxkI4FlXb"
        className="sm:h-[600px] h-[50vw]"
        title="Introduction Video"
      />
      {renderWelcomeSection()}
      {renderWhatWeOfferSection()}
    </Container>
  );
};

export default PlanYourVisit;

const Container = tw.div`
  xl:px-lg lg:px-md px-sm
  sm:mt-48 mt-32
  space-y-24 overflow-hidden
`;

const Section = tw.section`
  space-y-8
`;

const WelcomeBody = tw.p`
  font-serif sm:text-lg text-base text-black
`;

const HeadingSubText = tw.span`
  font-sans font-bold sm:text-base text-sm text-secondary
`;

const BookingGroupsContainer = tw.ul`
  flex flex-col my-24 md:px-24 sm:px-12 px-0
  items-center sm:space-y-5 space-y-2
`;

const MapContainer = tw.div`
  flex flex-col mx-0 mt-10 relative
`;

const ThankYouSection = tw.div`
  max-w-[375px] md:max-w-[600px] lg:max-w-[768px]
  flex flex-col space-y-3 items-end ml-auto
`;

const ThankBody = tw.p`
  bg-tertiary-300 text-sm md:text-lg font-sans text-white
  md:px-12 md:py-6 px-8 py-4 rounded-lg
`;

const ThankYouText = tw.span`
  tracking-[0.8rem] md:tracking-[1.75rem] lg:tracking-[2rem]
  uppercase text-tertiary-200 text-6xl whitespace-nowrap md:text-8xl font-bold 
  relative
`;

const Iframe = tw.iframe`
  w-full h-[500px] border-0
`;
