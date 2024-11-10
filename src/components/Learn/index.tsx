'use client';

import React from 'react';
import Heading from '../common/Heading';
import tw from 'tailwind-styled-components';
import ImageCard from '../common/ImageCard';
import { learnCards } from '@/constants';
import { IImageCard } from '@/types';

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
          <ImageCard key={idx} {...learnCard} />
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
  flex justify-between pt-12 space-x-5
`;
