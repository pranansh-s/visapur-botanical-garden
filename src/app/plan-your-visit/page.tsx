'use client';

import { useState } from 'react';
import Image from 'next/image';

import { bookingGroups } from '@/constants';
import { IExpandGroup } from '@/types';
import tw from 'tailwind-styled-components';

import offers from '../../../public/offers.png';
import hero from '../../../public/plan-visit-hero.png';

import Heading from '@/components/common/Heading';
import ExpandGroup from '@/components/ExpandGroup';
import AnimatedBuggy from '@/components/PlanYourVisit/AnimatedBuggy';

const PlanYourVisit: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState<number>(-1);
  const renderWelcomeSection = () => {
    return (
      <div>
        <Heading name="Welcome to Atal Botanical Garden" />
        <HeadingSubText>A Wonderland for everyone!</HeadingSubText>
        <WelcomeBody>
          Step into a world of natural beauty at our botanical garden, where
          every visitor can explore, learn, and connect with the wonders of
          nature. Whether you&apos;re visiting with friends, family, or
          colleagues, we offer group tours, workshops, and customized activities
          for an unforgettable experience. Students can engage in hands-on
          learning, discovering vibrant ecosystems and sustainable practices.
          Seniors can enjoy peaceful walking paths and low-impact gardening
          workshops, while kids can embark on interactive adventures through
          scavenger hunts and planting activities. <br />
          For influencers, the garden offers stunning backdrops, perfect for
          creating content, while nature enthusiasts will find a haven of rare
          species, themed gardens, and seasonal blooms. If you&apos;re seeking a
          moment of calm, our serene landscapes provide the ideal retreat from
          daily life. With accessible paths, an interactive map, and various
          activities, there&apos;s something for everyone to enjoy at our
          botanical garden.
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
      </div>
    );
  };

  const renderWhatWeOfferSection = () => {
    return (
      <div>
        <Heading name="What we offer" />
        <HeadingSubText>Main Attractions</HeadingSubText>
        <Image className="mt-12" src={offers} alt="" />
        <MapContainer>
          <AnimatedBuggy />
        </MapContainer>
      </div>
    );
  };

  return (
    <div className="xl:px-lg lg:px-md px-sm sm:mt-64 mt-32 space-y-24 overflow-hidden">
      <Image src={hero} alt="" />
      {renderWelcomeSection()}
      {renderWhatWeOfferSection()}
    </div>
  );
};

export default PlanYourVisit;

const WelcomeBody = tw.p`
    font-serif sm:text-lg text-base text-black sm:pt-8 pt-4
`;

const HeadingSubText = tw.span`
    font-sans font-bold sm:text-base text-sm text-secondary
`;

const BookingGroupsContainer = tw.ul`
    flex flex-col my-24 md:px-24 sm:px-12 px-0 items-center sm:space-y-5 space-y-2
`;

const MapContainer = tw.div`
    flex flex-col mx-0 mt-10 relative
`;

const ThankYouText = tw.span`
    uppercase text-tertiary-200 font-bold font-sans text-8xl tracking-[3.8rem]
`;

const ThankYouBody = tw.p`
    text-lg px-12 py-6 w-4/5 text-white font-sans bg-tertiary-300 rounded-md
`;
