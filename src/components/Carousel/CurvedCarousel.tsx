'use client';

import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';

import { ICurvedCarouselInfo } from '@/types';
import { useTranslation } from 'react-i18next';
import tw from 'tailwind-styled-components';

import train1 from '../../../public/train-1.svg';
import tree1 from '../../../public/tree-1.svg';

import { attractions } from '@/constants/attractions';
import { butterflies } from '@/constants/butterflies';
import { fishes } from '@/constants/fishes';
import Button from '../common/Button';

const options = [butterflies, fishes, attractions];

const CurvedCarousel: React.FC = memo(() => {
  const [currentState, setCurrentState] = useState<number>(0);
  const { t } = useTranslation();
  const totalItems = useMemo(
    () => options[currentState].length,
    [currentState]
  );
  const [currentItemIndex, setCurrentItemIndex] = useState<number>(
    Math.floor(totalItems / 2)
  );
  const [radius, setRadius] = useState<number>(0);
  const [throttling, setThrottling] = useState<boolean>(false);

  useEffect(() => {
    const updateRadius = () => setRadius(Math.min(window.innerWidth / 2, 750));
    updateRadius();

    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  const getTransformStyles = useCallback(
    (index: number) => {
      const angleStep = (2 * Math.PI) / Math.min(totalItems, 14);
      const angle =
        angleStep *
          ((index - currentItemIndex + Math.min(totalItems, 14)) %
            Math.min(totalItems, 14)) -
        Math.PI / 2;

      const distance = Math.min(
        Math.abs(index - currentItemIndex),
        totalItems - Math.abs(index - currentItemIndex)
      );

      let scale = 1 - 0.1 * distance;

      let x = radius * Math.cos(angle);
      const y = radius * 0.7 * Math.sin(angle);

      if (index === currentItemIndex) scale = 2.15;
      if (y >= 0) scale = 0;
      if (distance > 3) scale = 0;

      return {
        transform: `translate(${x}px, ${y}px) scale(${scale})`,
      };
    },
    [currentItemIndex, radius, totalItems]
  );

  const updateCarousel = (direction: string) => {
    if (!throttling) {
      setThrottling(true);
      setTimeout(() => setThrottling(false), 300);

      setCurrentItemIndex(prevIndex =>
        direction === 'right'
          ? (prevIndex + 1) % totalItems
          : (prevIndex - 1 + totalItems) % totalItems
      );
    }
  };

  return (
    <CarouselContainer style={{ height: radius }}>
      <Options>
        <Button
          aria-label="butterflies"
          onClick={() => setCurrentState(0)}
          className="text-base"
          variant={currentState == 0 ? 'base' : 'light'}
        >
          {t('carousel.options.butterflies')}
        </Button>
        <Button
          aria-label="fishes"
          onClick={() => setCurrentState(1)}
          className="text-base"
          variant={currentState == 1 ? 'base' : 'light'}
        >
          {t('carousel.options.fishes')}
        </Button>
        <Button
          aria-label="attractions"
          onClick={() => setCurrentState(2)}
          className="text-base"
          variant={currentState == 2 ? 'base' : 'light'}
        >
          {t('carousel.options.points')}
        </Button>
      </Options>
      <CardContainer>
        {options[currentState] &&
          options[currentState].map(
            (item: ICurvedCarouselInfo, index: number) => (
              <Card
                key={index}
                style={getTransformStyles(index)}
                width={100}
                height={100}
                src={item.src}
                alt={item.latinName}
              />
            )
          )}
      </CardContainer>
      <Controls>
        <Arrow className="sm:left-10 left-1/4 sm:top-0 top-[80%] sm:translate-y-0 translate-y-1/2">
          <ArrowBackground
            aria-label="previous-arrow"
            onClick={() => updateCarousel('left')}
          />
          <ArrowText>
            <svg
              fill="white"
              height="20px"
              viewBox="0 0 512 512"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M213.7,256L213.7,256L213.7,256L380.9,81.9c4.2-4.3,4.1-11.4-0.2-15.8l-29.9-30.6c-4.3-4.4-11.3-4.5-15.5-0.2L131.1,247.9  c-2.2,2.2-3.2,5.2-3,8.1c-0.1,3,0.9,5.9,3,8.1l204.2,212.7c4.2,4.3,11.2,4.2,15.5-0.2l29.9-30.6c4.3-4.4,4.4-11.5,0.2-15.8  L213.7,256z" />
            </svg>
          </ArrowText>
        </Arrow>
        <ButterflyDescription>
          <h3 className="font-braah lg:text-5xl sm:text-4xl text-3xl">
            {t(options[currentState][currentItemIndex]!.text)}
          </h3>
          <span className="lg:text-lg sm:text-sm">
            <i>{options[currentState][currentItemIndex]!.latinName}</i>
          </span>
          <p className="lg:text-base text-sm">
            {t(options[currentState][currentItemIndex]!.descrp)}
          </p>
        </ButterflyDescription>
        <Arrow className="sm:right-10 right-1/4 sm:top-0 top-[80%] sm:translate-y-0 translate-y-1/2">
          <ArrowBackground
            aria-label="next-arrow"
            onClick={() => updateCarousel('right')}
          />
          <ArrowText>
            <svg
              fill="white"
              height="20px"
              viewBox="0 0 512 512"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M298.3,256L298.3,256L298.3,256L131.1,81.9c-4.2-4.3-4.1-11.4,0.2-15.8l29.9-30.6c4.3-4.4,11.3-4.5,15.5-0.2l204.2,212.7  c2.2,2.2,3.2,5.2,3,8.1c0.1,3-0.9,5.9-3,8.1L176.7,476.8c-4.2,4.3-11.2,4.2-15.5-0.2L131.3,446c-4.3-4.4-4.4-11.5-0.2-15.8  L298.3,256z" />
            </svg>
          </ArrowText>
        </Arrow>
      </Controls>
      <BackgroundImage
        src={tree1}
        alt="tree1"
        className="h-[300px] lg:h-[350px] bottom-0 -left-[400px] sm:block hidden"
      />
      <BackgroundImage
        src={train1}
        alt="train-1"
        className="w-[200px] lg:w-[270px] bottom-1/4 right-0 sm:block hidden"
      />
    </CarouselContainer>
  );
});

CurvedCarousel.displayName = 'CurvedCarousel';
export default CurvedCarousel;

const CarouselContainer = tw.div`
  flex items-center justify-center relative w-screen md:!mb-0 sm:!mb-28 !mb-56 max-w-[1536px] xl:-left-lg lg:-left-md -left-sm !mt-36
`;

const ArrowBackground = tw.button`
  hover:via-tertiary-100 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-tertiary-200 via-tertiary-200 to-primary blur-sm lg:w-16 lg:h-16 w-12 h-12 rounded-full
`;

const Arrow = tw.div`
  text-white z-[20] cursor-pointer sm:relative absolute
`;

const ArrowText = tw.span`
  absolute inset-0 flex items-center justify-center pointer-events-none -translate-y-1
`;

const ButterflyDescription = tw.div`
  flex flex-col items-center text-center font-serif space-y-3 text-tertiary-300 md:w-[400px] sm:w-[450px] w-[80vw]
`;

const Controls = tw.div`
  flex items-center sm:space-x-20 space-x-4 absolute xl:bottom-[16%] lg:bottom-[18%] md:bottom-[5%] sm:bottom-[-5%] top-[50%] h-[200px]
`;

const CardContainer = tw.div`
  absolute flex justify-center items-center w-full md:bottom-0 sm:bottom-6 bottom-3 z-10
`;

const Card = tw(Image)`
  text-black rounded-lg absolute transition-all ease-in-out duration-500 w-[17vw] min-w-[60px] max-w-[175px]
`;

const Options = tw.div`
  flex space-x-3 items-center absolute top-0 z-50 md:-translate-y-10 -translate-y-32
`;

const BackgroundImage = tw(Image)`
  absolute
`;
