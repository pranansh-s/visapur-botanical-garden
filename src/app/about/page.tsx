'use client';

import { NextPage } from 'next';
import Image from 'next/image';

import { useTranslation } from 'react-i18next';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import tw from 'tailwind-styled-components';

import treeImage from '../../../public/footer-tree.svg';
import ministerImage from '../../../public/minister-1.svg';

import FAQs from '@/components/About/FAQs';
import NewsUpdates from '@/components/About/NewsUpdates';
import TeamsGuides from '@/components/About/TeamsGuides';
import Topics from '@/components/About/Topics';
import Carousel from '@/components/Carousel';
import Heading from '@/components/common/Heading';

import { inaugurationItems, zoneItems } from '@/constants/carousels';

const AboutUs: NextPage = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <HeroSection id="about">
        <StoryText>
          <Heading name={t('aboutUs.ourStory')} />
          <p>
            {t('aboutUs.ourStoryText.part1')}
            <strong>{t('aboutUs.ourStoryText.bold1')}</strong>
            {t('aboutUs.ourStoryText.part2')}
            <strong>{t('aboutUs.ourStoryText.bold2')}</strong>
            {t('aboutUs.ourStoryText.part3')}
            <strong>{t('aboutUs.ourStoryText.bold3')}</strong>
            {t('aboutUs.ourStoryText.part4')}
            <strong>{t('aboutUs.ourStoryText.bold4')}</strong>
            {t('aboutUs.ourStoryText.part5')}
            <strong>{t('aboutUs.ourStoryText.bold5')}</strong>
            {t('aboutUs.ourStoryText.part6')}
          </p>
        </StoryText>
        <MinisterSection>
          <TreeImage src={treeImage} alt="" />
          <MinisterImage src={ministerImage} quality={50} alt="Ganesh Naik" />
          <MinisterName>
            {t('aboutUs.ministerName')}
            <br />
            {t('aboutUs.ministerTitle')}
          </MinisterName>
        </MinisterSection>
      </HeroSection>
      <Carousel variant="rotateScale" showArrows={false} items={zoneItems} />
      <Topics />
      <VideoWrapper>
        <LiteYouTubeEmbed
          id="8iGS0FKH_vk"
          title="Shraddhey Shree Atal Bihari Vajpayee Botanical Garden"
        />
      </VideoWrapper>
      <TeamsGuides />
      <div className="space-y-10">
        <Heading name={t('aboutUs.inauguration')} />
        <Carousel dots={false} items={inaugurationItems} />
      </div>
      <NewsUpdates />
      <FAQs />
    </Container>
  );
};

export default AboutUs;

const Container = tw.div`
  xl:px-lg lg:px-md px-sm
  md:mt-[28rem] sm:mt-[12rem] mt-[7rem]
  space-y-24
`;

const HeroSection = tw.section`
  flex md:flex-row flex-col-reverse
  md:space-x-24 -mb-24 md:-mb-72
`;

const StoryText = tw.div`
  font-serif text-tertiary-200 md:w-2/3 w-full
  leading-[2rem] md:-mt-20 mt-10
  space-y-4
`;

const MinisterSection = tw.div`
  text-center flex flex-col md:-translate-y-1/3
  space-y-5 font-serif font-bold text-secondary
`;

const MinisterName = tw.span`
  text-lg
`;

const MinisterImage = tw(Image)`
  w-[20rem] md:w-[35rem]
  mx-auto
`;

const TreeImage = tw(Image)`
  absolute -z-10 top-0
  md:block hidden
  -right-[10rem] aspect-square h-[40rem]
`;

const VideoWrapper = tw.div`
  relative w-full
`;
