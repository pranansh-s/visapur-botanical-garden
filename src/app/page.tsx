'use client';

import Image from 'next/image';

import { wideCarouselItems } from '@/constants';
import { motion, useScroll, useTransform } from 'framer-motion';
import tw from 'tailwind-styled-components';

import hero from '../../public/hero.png';

import Activities from '@/components/Activities';
import ButterflyCarousel from '@/components/Carousel/ButterflyCarousel';
import WideCarousel from '@/components/Carousel/WideCarousel';
import Glimpses from '@/components/Glimpses';
import Instagram from '@/components/Instagram';
import Learn from '@/components/Learn';
import Map from '@/components/Map';
import ShopPlayDine from '@/components/ShopPlayDine';
import Table from '@/components/Table';
import WhoWeAre from '@/components/WhoWeAre';

import { animationPreset } from '@/utils/anim';

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <PageContainer>
      <HeroSection>
        <HeroContent>
          <HeroSubtitle
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={animationPreset}
          >
            Shradheya Shri Atal Bihari Vajpayee Botanical Garden
          </HeroSubtitle>
          <HeroTitle
            initial={{ y: -110 }}
            animate={{ y: 0 }}
            transition={animationPreset}
          >
            Garden of <HeroMainTitle>Wonders</HeroMainTitle>
          </HeroTitle>
        </HeroContent>
        <StyledImage
          src={hero}
          alt=""
          style={{ y: heroY }}
          initial={{ y: -150 }}
          animate={{ y: 0 }}
          transition={animationPreset}
        />
      </HeroSection>

      <WhoWeAre />
      <ButterflyCarousel />
      <WideCarousel items={wideCarouselItems} />
      <Table />
      <Glimpses />
      <Activities />
      <ShopPlayDine />
      <Learn />
      <Map />
      <Instagram />
    </PageContainer>
  );
}

const PageContainer = tw.div`
  xl:px-lg lg:px-md px-sm h-full space-y-16 max-w-[1536px] mx-auto
`;

const HeroSection = tw.div`
  flex flex-col items-center justify-center h-screen text-center
`;

const HeroSubtitle = tw(motion.h2)`
  text-lg sm:text-2xl md:text-3xl lg:text-4xl font-serif text-secondary
`;

const HeroTitle = tw(motion.h1)`
  text-4xl sm:text-5xl md:text-7xl lg:text-8xl uppercase font-sans text-tertiary-300 font-bold tracking-widest drop-shadow-hero
`;

const HeroMainTitle = tw.p`
  text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[1.2rem] sm:tracking-[3rem] md:tracking-[4.5rem] md:ml-[3.5rem] lg:ml-[5rem] lg:tracking-[6rem]
`;

const StyledImage = tw(motion.create(Image))`
  absolute w-screen !min-w-[1650px] min-w-screen max-w-none top-[47%] z-[10]
`;

const HeroContent = tw.div`
  space-y-3 sm:space-y-4 md:space-y-5 -translate-y-[10vh]
`;
