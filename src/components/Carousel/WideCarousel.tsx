'use client';

import { memo, useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { IWideCarouselItem } from '@/types';
import Slider from 'react-slick';
import tw from 'tailwind-styled-components';

import place from '../../../public/icons/white-place.svg';
import tree2 from '../../../public/tree-2.svg';

import Button from '../common/Button';
import { NextArrow, PrevArrow } from './Arrows';

const WideCarousel: React.FC<{ items: IWideCarouselItem[] }> = memo(
  ({ items }) => {
    const router = useRouter();

    const settings = {
      dots: false,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };

    const renderCarouselItem = useCallback(
      (item: IWideCarouselItem, index: number) => {
        return (
          <CarouselItem key={index}>
            <Image src={item.imageSrc} className="object-cover" fill alt="" />
            <div className="absolute inset-0 md:bg-gradient-to-l bg-gradient-to-r from-black/40 to-transparent z-0" />
            <Tag onClick={() => router.replace(item.direction)}>
              <Image
                className="mr-2 mb-1"
                width={20}
                height={20}
                src={place.src}
                alt=""
              />
              GET GARDEN&apos;S DIRECTION
            </Tag>

            <Text>
              <TextTitle>{item.title}</TextTitle>
              <p>&quot;{item.description}&quot;</p>
            </Text>
          </CarouselItem>
        );
      },
      [router]
    );

    return (
      <>
        <CarouselContainer>
          <Slider {...settings}>
            {items.map((item, index) => renderCarouselItem(item, index))}
          </Slider>
        </CarouselContainer>
        <PlanVisit>
          <PlanText>
            We offer a serene escape into the world of flora and fauna. Discover
            rare plants, enjoy scenic walks, and immerse yourself in the beauty
            of nature.
          </PlanText>
          <Button
            className="sm:px-12 md:px-7 md:py-5 px-4 py-4 md:text-base text-sm h-max shadow-md"
            onClick={() => router.push('/plan-your-visit')}
            variant="base"
          >
            Plan Your Visit
          </Button>
          <BackgroundImage
            src={tree2}
            alt="tree-2"
            className="w-[180px] md:w-[200px] lg:w-[270px] xl:-top-52 -top-32 !mx-0 xl:-left-lg lg:-left-md -left-sm sm:block hidden"
          />
        </PlanVisit>
      </>
    );
  }
);

WideCarousel.displayName = 'WideCarousel';
export default WideCarousel;

const PlanText = tw.p`
  font-serif md:text-lg text-base flex-1 max-w-[700px] text-tertiary-200
`;

const PlanVisit = tw.div`
  flex flex-row items-center justify-between !mb-24 !mt-16 relative md:space-x-8 space-x-4
`;

const CarouselContainer = tw.div`
  relative w-screen max-w-[1536px] sm:!mt-0 xl:-ml-lg lg:-ml-md -ml-sm overflow-hidden
`;

const Tag = tw.span`
  bg-tertiary-200 cursor-pointer text-white flex items-center font-serif font-bold tracking-[0.2rem] md:text-xl sm:text-lg text-base uppercase sm:py-3 py-2 sm:px-7 px-5 rounded-b-xl absolute top-0 z-[10] ml-12
`;

const Text = tw.div`
  absolute sm:bottom-16 bottom-12 md:right-36 md:left-auto left-12 text-white font-serif w-[300px]
`;

const TextTitle = tw.span`
  text-2xl font-sans font-bold
`;

const CarouselItem = tw.div`
  w-full relative sm:h-[500px] h-[400px]
`;

const BackgroundImage = tw(Image)`
  absolute -z-10
`;
