'use client';

import React, {
  forwardRef,
  useEffect,
  useRef,
  HTMLAttributes,
  useCallback,
  useState,
} from 'react';
import { ICarouselItem } from '@/types';
import tw from 'tailwind-styled-components';
import { cva } from 'class-variance-authority';

export interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  items: ICarouselItem[];
  itemsVisible?: number;
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
      itemsVisible = 3,
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
    const [itemsToShow, setItemsToShow] = useState<number>(itemsVisible);
    const itemWidth = 100 / itemsToShow;

    useEffect(() => {
      const updateItemsToShow = () => {
        if (window.innerWidth >= 1024) {
          setItemsToShow(itemsVisible);
        } else if (window.innerWidth >= 768) {
          if (variant !== 'instagram') setItemsToShow(itemsVisible - 1);
        } else {
          setItemsToShow(itemsVisible - 2);
        }
      };
      updateItemsToShow();

      window.addEventListener('resize', updateItemsToShow);
      return () => {
        window.removeEventListener('resize', updateItemsToShow);
      };
    }, [itemsVisible, variant]);

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
            <ArrowButton className="left-[3vw]" onClick={prevSlide}>
              &lt;
            </ArrowButton>
            <ArrowButton className="right-[3vw]" onClick={nextSlide}>
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
            : 'scale(1)',
        position: 'relative',
        zIndex: scaleFactor * 10,
      }}
      className={carouselVariants({ variant })}
      variant={variant}
    >
      {variant === 'instagram' ? (
        <IframeContainer>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.instagram.com/p/${item.src}/embed`}
            allow="encrypted-media"
            sandbox="allow-scripts allow-same-origin allow-popups"
            scrolling="no"
          />
          <Overlay style={{ opacity: overlayOpacity }} />
        </IframeContainer>
      ) : (
        <>
          <Image className="h-[500px] w-full" src={item.src} alt={item.title} />
          <Title>{item.title}</Title>
        </>
      )}
    </CarouselItem>
  );
};

Carousel.displayName = 'Carousel';
export default Carousel;

const CarouselContainer = tw.div`
  w-screen left-[calc(-50vw+50%)] relative
`;

const CarouselTrack = tw.div`
  flex transition-transform duration-500
`;

const CarouselItem = tw.div<{ variant: string }>`
  flex-none space-y-3 transition-all ease
  ${props => props.variant === 'instagram' && `!px-0 lg:!translate-x-0 !sm:-translate-x-18 !-translate-x-24`}
  lg:px-6 md:px-3 px-1
`;

const Image = tw.img`
  object-cover rounded-xl
`;

const Title = tw.p`
  text-black text-center text-2xl font-sans
`;

const ArrowButton = tw.button`
  absolute z-50 text-tertiary-100 text-4xl font-bold scale-y-[3] px-5 top-1/2 -translate-y-1/2
`;

const IframeContainer = tw.div`
  relative w-[300px] h-[350px] aspect-w-4 aspect-h-5
`;

const Overlay = tw.div`
  absolute inset-0 bg-black transition-opacity duration-500 ease pointer-events-none
`;
