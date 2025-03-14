'use client';

import React from 'react';

import { learnCards } from '@/constants';
import { IImageCard } from '@/types';
import { useTranslation } from 'react-i18next';
import tw from 'tailwind-styled-components';

import Heading from '../common/Heading';
import ImageCard from '../common/ImageCard';

const Learn = (): React.ReactElement => {
  const { t } = useTranslation();
  return (
    <LearnContainer>
      <Heading name={t('learn.name')} />
      <BodyText>{t('learn.body')}</BodyText>
      <CardContainer>
        {learnCards.map((learnCard: IImageCard, idx: number) => (
          <ImageCard className="sm:w-full w-[140px]" key={idx} {...learnCard} />
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
  flex pt-12 md:gap-4 gap-2 items-center justify-center sm:flex-nowrap flex-wrap
`;
