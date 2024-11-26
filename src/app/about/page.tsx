'use client';

import { NextPage } from 'next';
import Image from 'next/image';

import { zoneItems } from '@/constants';
import tw from 'tailwind-styled-components';

import tree from '../../../public/footer-tree.svg';
import minister from '../../../public/minister.png';

import FAQs from '@/components/About/FAQs';
import NewsUpdates from '@/components/About/NewsUpdates';
import Team from '@/components/About/Team';
import Topics from '@/components/About/Topics';
import Carousel from '@/components/Carousel';
import Heading from '@/components/common/Heading';

const AboutUs: NextPage = () => {
  return (
    <div className="xl:px-lg lg:px-md px-sm md:mt-[28rem] sm:mt-[12rem] mt-[7rem] space-y-24">
      <div className="flex md:flex-row flex-col-reverse md:space-x-24 -mb-24 md:-mb-72">
        <OurStoryText>
          <Heading name="Our Story" />
          Discover the transformative tale of the{' '}
          <b>Shraddhey Shree Atal Bihari Vajpayee Botanical Garden</b>, a
          visionary initiative by the{' '}
          <b>Forest Department of Central Chanda, Maharashtra,</b> spearheaded
          by <b>Forest Minister Shri. Sudhir Mungantiwar.</b> In a bid to
          safeguard the delicate balance between human livelihoods and wildlife
          conservation, this expansive <b>104-hectare Botanical Garden</b> was
          established, featuring a Conservation Zone nurturing indigenous flora
          and fauna, and a Recreation Zone offering educational and recreational
          experiences. Embracing eco-tourism and sustainable practices, this
          botanical marvel symbolizes India&apos;s commitment to harmonious
          coexistence, weaving together development, preservation, and
          environmental stewardship under PM Modi&apos;s &apos;Viksit
          Bharat&apos; vision. It&apos;s a story of{' '}
          <b>unity, progress, and the nurturing of a sustainable future</b>{' '}
          amidst nature&apos;s embraces.
        </OurStoryText>
        <MinisterInfo>
          <Image
            className="absolute -z-10 top-0 md:block hidden -right-[10rem] aspect-square h-[40rem]"
            src={tree}
            alt=""
          />
          <Image
            className="w-[20rem] md:w-[35rem] mx-auto aspect-[9/12]"
            src={minister}
            alt=""
          />
          <span>
            Shri. Sudhir Mungantiwar <br />
            (Forest Minister)
          </span>
        </MinisterInfo>
      </div>
      <Carousel variant="rotateScale" showArrows={false} items={zoneItems} />
      <Topics />
      <iframe
        width="100%"
        height="500px"
        src="https://www.youtube.com/embed/8iGS0FKH_vk"
        className="h-[50vw]"
      />
      <Team />
      <NewsUpdates />
      <FAQs />
    </div>
  );
};

export default AboutUs;

const MinisterInfo = tw.div`
    text-center flex flex-col md:-translate-y-1/3 space-y-5 font-serif font-bold text-secondary
`;

const OurStoryText = tw.p`
    font-serif text-tertiary-200 md:w-2/3 w-full leading-[2rem] md:-mt-20 mt-10
`;
