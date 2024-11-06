'use client';

import Image from 'next/image';
import tw from 'tailwind-styled-components';

import hero from '../../public/hero.png';
import WhoWeAre from '@/components/WhoWeAre';
import ButterflyCarousel from '@/components/Carousel/ButterflyCarousel';
import Heading from '@/components/common/Heading';
import Map from '@/components/Map';
import Learn from '@/components/Learn';
import Activities from '@/components/Activities';
import Instagram from '@/components/Instagram';
import Glimpses from '@/components/Glimpses';
import ShopPlayDine from '@/components/ShopPlayDine';

export default function Home() {
  return (
    <PageContainer>
      <HeroSection>
        <HeroContent>
          <HeroSubtitle>
            Shradheya Shri Atal Bihari Vajpayee Botanical Garden
          </HeroSubtitle>
          <HeroTitle>
            Garden of <HeroMainTitle>Wonders</HeroMainTitle>
          </HeroTitle>
        </HeroContent>
        <StyledImage src={hero} alt="" />
      </HeroSection>

      <WhoWeAre />
      <ButterflyCarousel />
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
  px-lg h-full space-y-6
`;

const HeroSection = tw.div`
  flex flex-col items-center justify-center h-screen text-center
`;

const HeroContent = tw.div`
  space-y-5 -mt-[15%]
`;

const HeroSubtitle = tw.h2`
  text-3xl font-serif text-secondary
`;

const HeroTitle = tw.h1`
  text-8xl uppercase font-sans text-tertiary-300 font-bold tracking-widest drop-shadow-hero
`;

const HeroMainTitle = tw.p`
  block text-9xl tracking-[6rem]
`;

const StyledImage = tw(Image)`
  absolute -bottom-24
`;
