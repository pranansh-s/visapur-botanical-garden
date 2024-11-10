'use client';

import { useState, useEffect, useCallback, memo } from 'react';
import Image from 'next/image';
import tw from 'tailwind-styled-components';

import { IButterflyInfo } from '@/types';
import { butteryflies } from '@/constants/butterflies';

import tree1 from '../../../public/tree-1.svg';
import train1 from '../../../public/train-1.svg';

const ButterflyCarousel: React.FC = memo(() => {
  const totalButterflies = butteryflies.length;
  const [currentButterflyIndex, setCurrentButterflyIndex] = useState<number>(
    Math.floor(totalButterflies / 2)
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
      const angleStep = (2 * Math.PI) / totalButterflies;
      const angle =
        angleStep *
          ((index - currentButterflyIndex + totalButterflies) %
            totalButterflies) -
        Math.PI / 2;

      const x = radius * Math.cos(angle);
      const y = radius * 0.7 * Math.sin(angle);

      const distance = Math.min(
        Math.abs(index - currentButterflyIndex),
        totalButterflies - Math.abs(index - currentButterflyIndex)
      );

      let scale = 1 - 0.1 * distance;
      if (index === currentButterflyIndex) {
        scale = 2;
      }

      if (y >= 0) scale = 0;

      return {
        transform: `translate(${x}px, ${y}px) scale(${scale})`,
      };
    },
    [currentButterflyIndex, radius, totalButterflies]
  );

  const updateCarousel = (direction: string) => {
    if (!throttling) {
      setThrottling(true);
      setTimeout(() => setThrottling(false), 300);

      setCurrentButterflyIndex(prevIndex =>
        direction === 'right'
          ? (prevIndex + 1) % totalButterflies
          : (prevIndex - 1 + totalButterflies) % totalButterflies
      );
    }
  };

  return (
    <CarouselContainer>
      <CardContainer>
        {butteryflies.map((butterfly: IButterflyInfo, index: number) => (
          <Butterfly
            key={index}
            style={getTransformStyles(index)}
            width={200}
            height={200}
            src={butterfly.src}
            alt=""
          />
        ))}
      </CardContainer>
      <ShadowContainer
        style={{ height: radius, boxShadow: '0 -8px 12px rgba(0, 0, 0, 0.1)' }}
      />
      <Controls>
        <ArrowButton onClick={() => updateCarousel('left')}>
          &#10094;
        </ArrowButton>
        <ButterflyDescription>
          <h3 className="font-braah whitespace-nowrap lg:text-5xl text-4xl">
            {butteryflies[currentButterflyIndex].text}
          </h3>
          <span className="lg:text-lg text-base">
            <i>({butteryflies[currentButterflyIndex].latinName})</i>
          </span>
          <p className="lg:text-base text-sm">
            {butteryflies[currentButterflyIndex].descrp}
          </p>
        </ButterflyDescription>
        <ArrowButton onClick={() => updateCarousel('right')}>
          &#10095;
        </ArrowButton>
      </Controls>
      <BackgroundImage
        src={tree1}
        alt="tree1"
        className="h-[200px] md:h-[300px] lg:h-[350px] -bottom-36 sm:-left-[400px] -left-[280px]"
      />
      <BackgroundImage
        src={train1}
        alt="train-1"
        className="w-[180px] md:w-[200px] lg:w-[270px] bottom-1/4 right-0"
      />
    </CarouselContainer>
  );
});

ButterflyCarousel.displayName = 'ButterflyCarousel';
export default ButterflyCarousel;

const CarouselContainer = tw.div`
  flex items-center justify-center relative w-screen max-w-[1536px] xl:-left-lg lg:-left-md -left-sm !mb-36
`;

const ShadowContainer = tw.div`
  w-full bg-primary rounded-t-full scale-y-[0.7] origin-bottom z-0 relative mt-auto
`;

const ArrowButton = tw.button`
  text-3xl cursor-pointer hover:via-tertiary-100 text-white rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-tertiary-200 via-tertiary-200 to-primary z-20 lg:w-16 lg:h-16 w-12 h-12
`;

const ButterflyDescription = tw.div`
  flex flex-col items-center text-center font-serif space-y-3 text-tertiary-300 lg:w-[400px] w-[300px]
`;

const Controls = tw.div`
  flex items-center sm:space-x-20 space-x-4 absolute lg:bottom-[16vh] md:bottom-[5vh] sm:bottom-[-3vh] bottom-[-10vh] h-[200px]
`;

const CardContainer = tw.div`
  absolute flex justify-center items-center w-full bottom-0 z-10
`;

const Butterfly = tw(Image)`
  text-black rounded-lg absolute transition-all ease-in-out duration-500 lg:w-48 sm:w-32 w-24
`;

const BackgroundImage = tw(Image)`
  absolute
`;
