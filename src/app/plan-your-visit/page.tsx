'use client';

import { useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';

import { bookingGroups } from '@/constants';
import { IExpandGroup } from '@/types';
import tw from 'tailwind-styled-components';

import buggy from '../../../public/Buggy.svg';

import BuyTicket from '@/components/common/BuyTicket';
import Heading from '@/components/common/Heading';
import AnimatedBuggy from '@/components/PlanYourVisit/AnimatedBuggy';
import ExpandGroup from '@/components/PlanYourVisit/ExapndGroup';

const PlanYourVisit: NextPage = () => {
  const [activeGroup, setActiveGroup] = useState<number>(-1);
  const renderWelcomeSection = () => {
    return (
      <section id="welcome">
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
      </section>
    );
  };

  const renderWhatWeOfferSection = () => {
    return (
      <section className="space-y-5" id="things-to-offer">
        <Heading name="What we offer" />
        <HeadingSubText>Main Attractions</HeadingSubText>
        <iframe
          width="100%"
          height="500px"
          src="https://youtube.com/embed/2jNh2S2LGiI?si=wJZclo6J7g67-ktO"
          className="h-[50vw]"
        />
        <MapContainer>
          <AnimatedBuggy />
          <ThankYouBody>
            <ThankYouText>
              <Image
                width={50}
                height={50}
                src={buggy}
                className="md:w-36 w-28 h-28 md:h-36 absolute -left-5 -translate-x-full translate-y-[25%] bottom-0 sm:block hidden"
                alt=""
              />
              thank you
            </ThankYouText>
            <ThankBody>
              Atal Botanical Garden is not just a place to visit, but a space to
              learn, wonder, and connect with the natural world. We look forward
              to welcoming everyone to this haven of knowledge and exploration!
            </ThankBody>
            <BuyTicket className="sm:flex hidden" />
          </ThankYouBody>
        </MapContainer>
      </section>
    );
  };

  return (
    <div className="xl:px-lg lg:px-md px-sm sm:mt-64 mt-32 space-y-24 overflow-hidden">
      <iframe
        width="100%"
        height="500px"
        src="https://youtube.com/embed/n1dZ6Kv2Lho?si=sxIRXliMxkI4FlXb"
        className="h-[50vw]"
      />
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
    font-sans font-bold sm:text-base text-sm text-secondary !pb-5
`;

const BookingGroupsContainer = tw.ul`
    flex flex-col my-24 md:px-24 sm:px-12 px-0 items-center sm:space-y-5 space-y-2
`;

const MapContainer = tw.div`
    flex flex-col mx-0 mt-10 relative
`;

const ThankYouBody = tw.div`
  max-w-[375px] md:max-w-[600px] lg:max-w-[768px] flex flex-col space-y-3 items-end ml-auto
`;

const ThankBody = tw.p`
  bg-tertiary-300 text-white md:px-12 md:py-6 px-8 py-4 rounded-lg text-sm md:text-lg font-sans
`;

const ThankYouText = tw.span`
  tracking-[0.8rem] md:tracking-[1.75rem] lg:tracking-[2rem] uppercase text-tertiary-200 text-6xl whitespace-nowrap md:text-8xl font-bold relative
`;
