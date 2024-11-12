'use client';

import ExpandGroup from '@/components/ExpandGroup';
import Button from '@/components/common/Button';
import Heading from '@/components/common/Heading';
import { bookingGroups } from '@/constants';
import { IExpandGroup } from '@/types';
import Image from 'next/image';
import { useState } from 'react';
import tw from 'tailwind-styled-components';

import buggy from '../../../public/Buggy.svg';
import book from '../../../public/icons/book.svg';
import offers from '../../../public/offers.png';
import hero from '../../../public/plan-visit-hero.png';
import map from '../../../public/plan-visit-map.svg';

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
      <div className="h-[535vw]">
        <Heading name="What we offer" />
        <HeadingSubText>Main Attractions</HeadingSubText>
        <Image className="mt-12" src={offers} alt="" />
        <MapContainer>
          <Image src={map} alt="" />
          <div className="flex px-lg space-x-5 ml-24 h-36 whitespace-nowrap">
            <Image className="w-48 h-48 -translate-y-10" src={buggy} alt="" />
            <ThankYouText>Thank You</ThankYouText>
          </div>
          <div className="px-lg flex flex-col space-y-5 items-end">
            <ThankYouBody>
              Atal Botanical Garden is not just a place to visit, but a space to
              learn, wonder, and connect with the natural world. We look forward
              to welcoming everyone to this haven of knowledge and exploration!
            </ThankYouBody>
            <Button variant="base" iconSize={16} preIconNode={book}>
              Buy Ticket
            </Button>
          </div>
        </MapContainer>
      </div>
    );
  };

  return (
    <div className="px-lg mt-64 space-y-24">
      <Image src={hero} alt="" />
      {renderWelcomeSection()}
      {renderWhatWeOfferSection()}
    </div>
  );
};

export default PlanYourVisit;

const WelcomeBody = tw.p`
    font-serif text-lg text-black mt-12
`;

const HeadingSubText = tw.span`
    font-sans font-bold text-base text-secondary
`;

const BookingGroupsContainer = tw.ul`
    flex flex-col my-24 px-24 space-y-5
`;

const MapContainer = tw.div`
    absolute left-0 -mt-36
`;

const ThankYouText = tw.span`
    uppercase text-tertiary-200 font-bold font-sans text-8xl tracking-[3.8rem]
`;

const ThankYouBody = tw.p`
    text-lg px-12 py-6 w-4/5 text-white font-sans bg-tertiary-300 rounded-md
`;
