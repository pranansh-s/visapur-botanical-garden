'use client';

import React, {
  forwardRef,
  useEffect,
  useRef,
  HTMLAttributes,
  useCallback,
} from 'react';
import { motion } from 'framer-motion';
import { ICarouselItem } from '@/types';
import tw from 'tailwind-styled-components';
import { cva } from 'class-variance-authority';

export interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  items: ICarouselItem[];
  itemsToShow?: number;
  autoplay?: boolean;
  interval?: number;
  variant?: 'basic' | 'rotateScale' | 'instagram';
  showArrows?: boolean;
}

const carouselVariants = cva('', {
  variants: {
    variant: {
      basic: '',
      rotateScale: 'drop-shadow-xl',
      instagram: 'px-0',
    },
  },
  defaultVariants: {
    variant: 'basic',
  },
});

const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      items,
      className,
      itemsToShow = 3,
      autoplay = true,
      interval = 4000,
      showArrows = true,
      variant = 'basic',
      ...props
    },
    ref
  ) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const itemWidth = 100 / itemsToShow;

    const nextSlide = useCallback(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % items.length);
    }, [items.length]);

    const prevSlide = useCallback(() => {
      setCurrentIndex(
        prevIndex => (prevIndex - 1 + items.length) % items.length
      );
    }, [items.length]);

    useEffect(() => {
      if (autoplay) {
        const intervalId = setInterval(nextSlide, interval);
        return () => clearInterval(intervalId);
      }
    }, [autoplay, interval, nextSlide]);

    return (
      <CarouselContainer
        className={className}
        ref={ref || carouselRef}
        {...props}
      >
        <CarouselTrack
          style={{
            transform: `translateX(-${currentIndex * itemWidth}%)`,
          }}
        >
          {items
            .concat(items)
            .map((item, index) =>
              renderCarouselItem(
                index,
                currentIndex,
                itemWidth,
                itemsToShow,
                variant,
                item
              )
            )}
        </CarouselTrack>

        {showArrows && (
          <>
            <ArrowButton className="left-5" onClick={prevSlide}>
              &lt;
            </ArrowButton>
            <ArrowButton className="right-5" onClick={nextSlide}>
              &gt;
            </ArrowButton>
          </>
        )}
      </CarouselContainer>
    );
  }
);

const renderCarouselItem = (
  index: number,
  currentIndex: number,
  itemWidth: number,
  itemsToShow: number,
  variant: any,
  item: ICarouselItem
) => {
  const distanceFromCenter = Math.abs(
    index - (currentIndex + Math.floor(itemsToShow / 2))
  );

  const scaleFactor = Math.max(0.5, 1 - distanceFromCenter * 0.2);
  const overlayOpacity = Math.min(0.8, distanceFromCenter * 0.2);

  return (
    <CarouselItem
      key={index}
      style={{
        width: `${itemWidth}%`,
        transform:
          variant === 'rotateScale'
            ? index === currentIndex + Math.floor(itemsToShow / 2)
              ? 'scale(1.1)'
              : 'rotate(-5deg)'
            : variant === 'instagram'
              ? `scale(${scaleFactor})`
              : 'scale(1)',
        transition: 'transform 0.5s ease',
        position: 'relative',
      }}
      className={carouselVariants({ variant })}
    >
      {variant === 'instagram' ? (
        <>
          <iframe
            src={`https://www.instagram.com/p/${item.src}/embed`}
            height="275px"
            width="100%"
            allow="encrypted-media"
            sandbox="allow-scripts allow-same-origin allow-popups"
            style={{ overflow: 'hidden', border: 'none' }}
            scrolling="no"
          />
          <Overlay style={{ opacity: overlayOpacity }} />
        </>
      ) : (
        <>
          <Image src={item.src} alt={item.title} />
          <Title>{item.title}</Title>
        </>
      )}
    </CarouselItem>
  );
};

Carousel.displayName = 'Carousel';
export default Carousel;

const CarouselContainer = tw.div`
  w-screen -translate-x-lg relative
`;

const CarouselTrack = tw.div`
  flex transition-transform duration-500
`;

const CarouselItem = tw.div`
  flex-none space-y-3 px-6 transition-all ease
`;

const Image = tw.img`
  object-cover w-full h-full rounded-xl
`;

const Title = tw.p`
  text-black text-center text-2xl font-sans
`;

const ArrowButton = tw.button`
  absolute z-50 text-tertiary-100 text-4xl font-bold scale-y-[3] px-5 top-1/2 -translate-y-1/2
`;

const Overlay = tw.div`
  absolute inset-0 -top-4 bg-black transition-opacity duration-500
`;
