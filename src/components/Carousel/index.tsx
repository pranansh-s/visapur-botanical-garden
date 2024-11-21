'use client';

import React, { HTMLAttributes, useEffect, useMemo, useState } from 'react';

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
  interval = 4000,
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
    console.log(settings.slidesToShow);
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
              className={`${variant === 'rotateScale' && !isCenterItem ? '-rotate-3 scale-75' : 'rotate-0 scale-100'} transition-transform duration-300 ease-out`}
            >
              {variant === 'instagram' ? (
                <IframeContainer>
                  <iframe
                    width="100%"
                    height="400px"
                    src={`https://www.instagram.com/p/${item.src}/embed`}
                    allow="encrypted-media"
                    sandbox="allow-scripts allow-same-origin allow-popups"
                    scrolling="no"
                  />
                </IframeContainer>
              ) : (
                <div
                  className={`${variant === 'rotateScale' ? 'h-[450px] rounded-lg' : variant === 'team' ? 'h-max mb-10 mt-12 !mx-4' : 'h-full mx-1'} flex flex-col justify-center rounded-2xl`}
                >
                  <Image src={item.src} alt={item.title} />
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

const Image = tw.img`
  object-fill w-full h-full max-h-[290px]
`;

const IframeContainer = tw.div`
  relative xl:w-[250px] md:w-[235px] w-[170px] h-[230px] md:h-[300px] xl:h-[350px]
`;
