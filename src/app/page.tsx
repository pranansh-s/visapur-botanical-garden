'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import tw from 'tailwind-styled-components';

import hero from '../../public/hero.png';
import ministerImage from '../../public/minister-1.svg';
import ministerImage2 from '../../public/minister-2.svg';

import Activities from '@/components/Activities';
import CurvedCarousel from '@/components/Carousel/CurvedCarousel';
import WideCarousel from '@/components/Carousel/WideCarousel';
import Glimpses from '@/components/Glimpses';
import Learn from '@/components/Learn';
import ShopPlayDine from '@/components/ShopPlayDine';
import Table from '@/components/Table';
import WhoWeAre from '@/components/WhoWeAre';

import { wideCarouselItems } from '@/constants/carousels';
import { strings } from '@/constants/strings';
import { animationPreset } from '@/utils/anim';

const Map = dynamic(() => import('@/components/Map'), { ssr: false });
const Instagram = dynamic(() => import('@/components/Instagram'), {
  ssr: false,
});

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <PageContainer>
      {renderHeroSection(heroY)}
      <WhoWeAre />
      <CurvedCarousel />
      <WideCarousel items={wideCarouselItems} />
      <Table />
      <Glimpses />
      <Map />
      <Activities />
      <ShopPlayDine />
      <Learn />
      <Instagram />
    </PageContainer>
  );
}

const renderHeroSection = (heroY: any) => (
  <HeroSection>
    <HeroContent>
      <HeroSubtitle
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={animationPreset}
      >
        {strings.name}
      </HeroSubtitle>
      <HeroTitle
        initial={{ y: -110 }}
        animate={{ y: 0 }}
        transition={animationPreset}
      >
        {strings.title.part1}
        <HeroMainTitle>{strings.title.part2}</HeroMainTitle>
        <Image
          className="absolute right-1/2 translate-x-[45vw] sm:translate-x-[28rem] lg:translate-x-[45rem] 2xl:-top-48 xl:-top-24 sm:-top-20 -top-12 2xl:w-72 2xl:h-72 xl:w-48 xl:h-48 sm:h-36 sm:w-36 h-28 w-28"
          src={ministerImage}
          priority
          loading="eager"
          alt="Ganesh Naik"
        />
        <Image
          className="absolute left-1/2 -translate-x-[45vw] sm:-translate-x-[28rem] lg:-translate-x-[45rem] 2xl:-top-48 xl:-top-24 sm:-top-20 -top-12 2xl:w-72 2xl:h-72 xl:w-48 xl:h-48 sm:h-36 sm:w-36 w-28 h-28"
          src={ministerImage2}
          priority
          loading="eager"
          alt="Devendra Fadnavis"
        />
      </HeroTitle>
    </HeroContent>
    <StyledImage
      src={hero}
      style={{ y: heroY }}
      initial={{ y: -150 }}
      animate={{ y: 0 }}
      transition={animationPreset}
      alt="Hero Image"
      loading="eager"
      priority
    />

    <DotLottieReact
      src="/lottie/cloud.lottie"
      loop
      autoplay
      className="w-screen max-w-[1536px] -translate-y-60 -z-10 absolute"
    />
  </HeroSection>
);

const PageContainer = tw.div`
  xl:px-lg lg:px-md px-sm h-full space-y-16
  xl:overflow-x-visible overflow-x-hidden mx-auto
`;

const HeroSection = tw.section`
  flex flex-col items-center justify-center h-screen
  2xl:max-h-[700px] sm:max-h-[500px] max-h-[450px]
  mt-[25%] sm:mt-[8%] text-center relative
`;

const HeroSubtitle = tw(motion.h2)`
  text-lg sm:text-2xl md:text-3xl lg:text-4xl font-serif text-secondary
  pb-4 w-[70vw] mx-auto sm:font-normal font-semibold
`;

const HeroTitle = tw(motion.h1)`
  text-[7vw] sm:text-6xl md:text-7xl lg:text-8xl
  uppercase font-sans text-tertiary-300 font-bold tracking-widest drop-shadow-hero
`;

const HeroMainTitle = tw.p`
  text-[12vw] sm:text-[6rem] md:text-8xl lg:text-9xl tracking-[1.2rem] sm:tracking-[3rem] md:tracking-[4.5rem]
  ml-[1rem] md:ml-[3.5rem] lg:ml-[5rem] lg:tracking-[6rem]
`;

const StyledImage = tw(motion.create(Image))`
  absolute object-cover max-w-[1800px] lg:w-[1800px] sm:w-[1500px] w-[1000px] h-max top-36 sm:top-16 lg:top-0 2xl:top-36 z-[10]
`;

const HeroContent = tw.div`
  space-y-3 sm:space-y-4 md:space-y-5 md-translate-y-[5.5vh]
`;
