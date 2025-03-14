'use client';

import { useState } from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import { bookingGroups } from '@/constants';
import { IExpandGroup } from '@/types';
import { useTranslation } from 'react-i18next';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import tw from 'tailwind-styled-components';

import buggyImage from '../../../public/Buggy.svg';

import BuyTicket from '@/components/common/BuyTicket';
import Heading from '@/components/common/Heading';
import ExpandGroup from '@/components/PlanYourVisit/ExapndGroup';

const AnimatedBuggy = dynamic(
  () => import('@/components/PlanYourVisit/AnimatedBuggy'),
  { ssr: false }
);

const PlanYourVisit: NextPage = () => {
  const [activeGroup, setActiveGroup] = useState<number>(-1);
  const { t } = useTranslation();

  const renderWelcomeSection = () => (
    <Section id="welcome">
      <Heading name={t('visit.welcome.title')} />
      <HeadingSubText>{t('visit.welcome.subText')}</HeadingSubText>
      <WelcomeBody>
        {t('visit.welcome.body.part1')}
        <br />
        {t('visit.welcome.body.part2')}
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
      <Heading name={t('visit.whatWeOffer.title')} />
      <HeadingSubText>{t('visit.whatWeOffer.subText')}</HeadingSubText>
      <LiteYouTubeEmbed id="2jNh2S2LGiI" title="Main Attractions" />
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
            {t('visit.whatWeOffer.thankYou')}
          </ThankYouText>
          <ThankBody>{t('visit.whatWeOffer.thankYouText')}</ThankBody>
          <BuyTicket className="sm:flex hidden" />
        </ThankYouSection>
        <SideText className="top-[15%] sm:top-[10%] left-full -translate-x-1/2 pb-3">
          Science Zone
        </SideText>
        <SideText className="top-[45%] sm:top-[35%] left-0 -translate-x-1/2 pt-3">
          Life Zone
        </SideText>
        <SideText className="top-[75%] sm:top-[65%] left-full -translate-x-1/2 pb-3">
          Water Zone
        </SideText>
      </MapContainer>
    </Section>
  );

  return (
    <Container>
      <LiteYouTubeEmbed id="4yMqC9KDTak" title="Introduction Video" />
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

const SideText = tw.span`
  absolute tracking-[5rem] uppercase font-medium -rotate-90 whitespace-nowrap font-sans text-6xl md:text-8xl xl:text-9xl text-tertiary-300 opacity-20
`;
