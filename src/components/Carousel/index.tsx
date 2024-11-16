'use client';

import React, { HTMLAttributes, useState } from 'react';

import { ICarouselItem } from '@/types';
import Slider from 'react-slick';
import tw from 'tailwind-styled-components';

import { NextArrow, PrevArrow } from './Arrows';

export interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  items: ICarouselItem[];
  itemsVisible?: number;
  autoplay?: boolean;
  interval?: number;
  variant?: 'basic' | 'rotateScale' | 'instagram';
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
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(itemsVisible / 2)
  );

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: itemsVisible,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: interval,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_: number, newIndex: number) => {
      setCurrentIndex((newIndex + Math.floor(itemsVisible / 2)) % items.length);
    },
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
          slidesToShow: Math.max(itemsVisible - 1, 1),
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.max(
            itemsVisible - 1.5,
            variant === 'instagram' ? 3 : 1
          ),
        },
      },
    ],
  };

  return (
    <CarouselContainer className={className} {...props}>
      <Slider {...settings}>
        {items.map((item, index) => {
          const isCenterItem = index === currentIndex;
          const distanceFromCenter = Math.min(
            Math.abs(currentIndex - index),
            items.length - Math.abs(currentIndex - index)
          );
          const scaleValue = Math.max(0.75, 1 - distanceFromCenter * 0.1);
          return (
            <CarouselItem
              key={index}
              className={`${variant === 'rotateScale' && !isCenterItem ? 'rotate-6 scale-75' : 'rotate-0 scale-100'} transition-transform duration-300 ease-out`}
            >
              {variant === 'instagram' ? (
                <IframeContainer style={{ transform: `scale(${scaleValue})` }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.instagram.com/p/${item.src}/embed`}
                    allow="encrypted-media"
                    sandbox="allow-scripts allow-same-origin allow-popups"
                    scrolling="no"
                  />
                  <Overlay />
                </IframeContainer>
              ) : (
                <>
                  <Image
                    className="w-full h-full aspect-auto max-h-[400px]"
                    src={item.src}
                    alt={item.title}
                  />
                  {item.title && <Title>{item.title}</Title>}
                </>
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
  object-cover rounded-xl
`;

const Title = tw.p`
  text-black text-center text-2xl font-sans
`;

const IframeContainer = tw.div`
  relative w-[300px] h-[350px] aspect-w-4 aspect-h-5
`;

const Overlay = tw.div`
  absolute inset-0 bg-black opacity-20 pointer-events-none
`;
