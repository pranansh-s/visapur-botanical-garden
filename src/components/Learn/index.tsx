'use client';

import { learnCards } from '@/constants';
import { IImageCard } from '@/types';
import React from 'react';
import tw from 'tailwind-styled-components';

import Heading from '../common/Heading';
import ImageCard from '../common/ImageCard';

const Learn = (): React.ReactElement => {
  return (
    <LearnContainer>
      <Heading name="Learn" />
      <BodyText>
        Engage with Visapur&apos;s vibrant community of horticulturists,
        botanists, and environmental educators.
      </BodyText>
      <CardContainer>
        {learnCards.map((learnCard: IImageCard, idx: number) => (
          <ImageCard className="sm:w-full w-[200px]" key={idx} {...learnCard} />
        ))}
      </CardContainer>
    </LearnContainer>
  );
};

export default Learn;

const LearnContainer = tw.div`
  flex flex-col space-y-2 h-max
`;

const BodyText = tw.p`
  text-tertiary-300 font-serif 
`;

const CardContainer = tw.ul`
  flex pt-12 sm:gap-5 gap-2 items-center justify-center sm:flex-nowrap flex-wrap
`;
