'use client';

import React, { HTMLAttributes, useEffect, useState } from 'react';
import Image from 'next/image';

import { ICarouselItem } from '@/types';
import Slider from 'react-slick';
import tw from 'tailwind-styled-components';

import { NextArrow, PrevArrow } from './Arrows';

export interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  items: ICarouselItem[];
  itemsVisible?: number;
  autoplay?: boolean;
  interval?: number;
  variant?: 'basic' | 'rotateScale' | 'instagram' | 'team';
  showArrows?: boolean;
}

const Carousel = ({
  items,
  className,
  itemsVisible = 3,
  autoplay = true,
  interval = 3000,
  showArrows = true,
  variant = 'basic',
  ...props
}: CarouselProps) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: itemsVisible,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: interval,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: itemsVisible,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: variant === 'rotateScale' ? 1 : itemsVisible - 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: variant === 'rotateScale' ? 1 : itemsVisible - 2,
          dots: true,
        },
      },
    ],
    beforeChange: (_: number, newIndex: number) => {
      setCurrentIndex(
        (newIndex + Math.floor(settings.slidesToShow / 2)) % items.length
      );
    },
  };

  const [currentIndex, setCurrentIndex] = useState<number>(
    Math.floor(settings.slidesToShow / 2)
  );

  useEffect(() => {
    setCurrentIndex(Math.floor(settings.slidesToShow / 2));
  }, [settings.slidesToShow]);

  return (
    <CarouselContainer className={className} {...props}>
      <Slider {...settings}>
        {items.map((item, index) => {
          const isCenterItem = index === currentIndex;
          return (
            <CarouselItem
              key={index}
              className={`${variant === 'rotateScale' && !isCenterItem ? '-rotate-3 scale-75' : 'rotate-0 scale-100'} ${variant === 'basic' ? ' xl:h-[40rem] h-[30rem] sm:h-[29rem]' : ''} transition-transform duration-300 ease-out`}
            >
              {variant === 'instagram' ? (
                <IframeContainer>
                  <iframe
                    width="100%"
                    height="700px"
                    src={`https://www.instagram.com/p/${item.src}/embed`}
                    allow="encrypted-media"
                    sandbox="allow-scripts allow-same-origin allow-popups"
                    className="pb-[35vw] sm:pb-[22vw] md:pb-32 lg:pb-24 xl:pb-0"
                    scrolling="no"
                  />
                </IframeContainer>
              ) : (
                <div
                  className={`${variant === 'rotateScale' ? 'h-[350px] rounded-2xl' : variant === 'team' ? 'h-max -translate-y-12 mt-12 !mx-4' : 'h-full mx-1'} flex flex-col justify-start rounded-2xl`}
                >
                  <StyledImage
                    src={item.src}
                    alt={item.title ?? ''}
                    loading="eager"
                    width={300}
                    height={300}
                    className={`object-cover object-top rounded-lg ${variant === 'rotateScale' ? 'shadow-lg' : 'shadow-none'}`}
                  />
                  <p className="text-tertiary-200 mt-2 font-semibold md:text-lg text-base font-serif uppercase text-center">
                    {item.title}
                  </p>
                  <span className="font-bold md:text-sm text-xs text-tertiary-300 font-serif uppercase text-center">
                    {item.subText}
                  </span>
                </div>
              )}
            </CarouselItem>
          );
        })}
      </Slider>
    </CarouselContainer>
  );
};

export default Carousel;

const CarouselContainer = tw.div`
  max-w-[2000px] w-screen left-1/2 -translate-x-1/2 relative right-0
`;

const CarouselItem = tw.div`
  flex-none space-y-3 transition-all ease sm:px-2 px-1 outline-none w-full
`;

const StyledImage = tw(Image)`
  object-fill w-full h-full
`;

const IframeContainer = tw.div`
  relative w-full -mt-72 scale-[0.5] w-[200%] overflow-hidden sm:-mb-[20rem] -mb-[50rem]
`;
