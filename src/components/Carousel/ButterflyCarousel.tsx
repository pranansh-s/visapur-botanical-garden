'use client';

import { butteryflies } from '@/constants';
import { IButterflyInfo } from '@/types';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import tw from 'tailwind-styled-components';

const ButterflyCarousel: React.FC = () => {
  const totalButterflies = butteryflies.length;
  const [currentButterflyIndex, setCurrentButterflyIndex] = useState<number>(
    Math.floor(totalButterflies / 2)
  );
  const [radius, setRadius] = useState<number>(0);
  const [throttling, setThrottling] = useState<boolean>(false);

  useEffect(() => {
    const updateRadius = () => setRadius(window.innerWidth / 2);
    updateRadius();

    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  const getTransformStyles = useCallback(
    (index: number) => {
      const halfLength = Math.floor(totalButterflies / 2);
      const offset =
        (index - currentButterflyIndex + totalButterflies) % totalButterflies;
      const adjustedIndex = (offset + halfLength) % totalButterflies;

      const angleStep = Math.PI / (totalButterflies - 1);
      const angle = angleStep * adjustedIndex - Math.PI;

      let x = radius * Math.cos(angle);
      const y = radius * 0.7 * Math.sin(angle);

      const distance = Math.min(
        Math.abs(index - currentButterflyIndex),
        totalButterflies - Math.abs(index - currentButterflyIndex)
      );

      let scale = 1 - 0.1 * distance;
      if (index === currentButterflyIndex) {
        scale = 2.5;
      }

      if (index - currentButterflyIndex !== 0) {
        x -= (1 / (currentButterflyIndex - index)) * 50;
      }

      const rotationAngle =
        (Math.atan2(0.7 * Math.cos(angle), -Math.sin(angle)) * 180) / Math.PI;

      return {
        transform: `translate(${x}px, ${y}px) scale(${scale}) rotate(${rotationAngle}deg)`,
      };
    },
    [currentButterflyIndex, radius, totalButterflies]
  );

  const updateCarousel = (direction: string) => {
    if (!throttling) {
      setThrottling(true);
      setTimeout(() => setThrottling(false), 300);

      setCurrentButterflyIndex(prevIndex => {
        if (direction === 'right') {
          return (prevIndex + 1) % totalButterflies;
        } else {
          return (prevIndex - 1 + totalButterflies) % totalButterflies;
        }
      });
    }
  };

  const renderControls = () => {
    return (
      <Controls>
        <ArrowButton onClick={() => updateCarousel('left')}>
          &#10094;
        </ArrowButton>
        <ButterflyDescription>
          <h3 className="font-braah text-5xl whitespace-nowrap">
            {butteryflies[currentButterflyIndex].text}
          </h3>
          <span>
            <i>({butteryflies[currentButterflyIndex].latinName})</i>
          </span>
          <p>{butteryflies[currentButterflyIndex].descrp}</p>
        </ButterflyDescription>
        <ArrowButton onClick={() => updateCarousel('right')}>
          &#10095;
        </ArrowButton>
      </Controls>
    );
  };

  return (
    <div className="-ml-lg relative w-screen h-full">
      <CarouselContainer>
        <CardContainer>
          {butteryflies.map((butterfly: IButterflyInfo, index: number) => (
            <Butterfly
              key={index}
              className={`${Math.abs(index - currentButterflyIndex) === Math.floor(butteryflies.length / 2) || Math.abs(index - currentButterflyIndex) === Math.ceil(butteryflies.length / 2) ? 'opacity-0' : 'opacity-100'}`}
              style={getTransformStyles(index)}
              width={100}
              height={100}
              src={butterfly.src}
              alt=""
            />
          ))}
        </CardContainer>
        <ShadowContainer style={{ height: radius }} />
        {renderControls()}
      </CarouselContainer>
    </div>
  );
};

export default ButterflyCarousel;

const CarouselContainer = tw.div`
  flex items-center justify-center w-full overflow-hidden
`;

const ShadowContainer = tw.div`
  w-full bg-primary drop-shadow-2xl rounded-t-full scale-y-[0.7] origin-bottom z-0 relative mt-auto
`;

const ArrowButton = tw.button`
  text-3xl cursor-pointer hover:via-tertiary-100 text-white w-16 h-16 rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-tertiary-200 via-tertiary-200 to-primary z-20
`;

const ButterflyDescription = tw.div`
  flex flex-col w-[400px] items-center text-center font-serif space-y-3 text-tertiary-300
`;

const Controls = tw.div`
  flex items-center space-x-20 absolute bottom-48
`;

const CardContainer = tw.div`
  absolute flex justify-center items-center w-full bottom-0 z-10
`;

const Butterfly = tw(Image)`
  w-48 text-black rounded-lg absolute
  flex flex-col justify-center items-center transition-all ease-in-out duration-500
`;
