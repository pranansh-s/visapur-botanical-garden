'use client';

import { memo, useState } from 'react';
import Image from 'next/image';

import { ILocation } from '@/types';
import { KeepScale } from 'react-zoom-pan-pinch';
import tw from 'tailwind-styled-components';

import markerHover from '../../../public/marker-hover.svg';

import MarkerIcon from '../common/MarkerIcon';

const Location = memo(
  ({ name, left, top, value, color, direction }: ILocation) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const flippedStyle = { transform: `scaleX(${direction ? -1 : 1})` };
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    const handleTouchStart = () => setIsHovered(true);
    const handleTouchEnd = () => setIsHovered(false);

    return (
      <LocationContainer
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{
          left: `${left}%`,
          top: `${top}%`,
          zIndex: isHovered ? 50 : 'auto',
        }}
      >
        <KeepScale className="flex items-center justify-center">
          <MarkerIcon
            fill={typeof value === 'string' ? color! : '#C90B02'}
            style={flippedStyle}
          />
          {typeof value === 'string' ? (
            <Image
              src={value}
              width={21}
              height={0}
              alt={value}
              className="invert brightness-0 max-h-8 pb-2"
            />
          ) : (
            <TextIcon>{value}</TextIcon>
          )}
          {isHovered && (
            <HoverCardContainer
              style={{ right: direction ? '-200px' : '20px' }}
            >
              <HoverBackground style={flippedStyle} src={markerHover} alt="" />
              <div
                className="flex h-[90px] py-3 space-x-3 mb-1 group"
                style={{
                  paddingLeft: direction ? 17 : 12,
                  paddingRight: direction ? 12 : 17,
                }}
              >
                <div
                  className="flex items-center rounded-lg relative justify-center h-[57.5px] aspect-square z-10"
                  style={{
                    backgroundColor:
                      typeof value === 'string' ? color! : '#D9D9D9',
                  }}
                >
                  <Image
                    src={
                      typeof value === 'string'
                        ? value
                        : `/map-icons/${value}.webp`
                    }
                    priority={true}
                    width={36}
                    height={36}
                    className={`max-h-none rounded-md text-3xl font-serif ${typeof value === 'string' ? 'invert brightness-0 py-2 max-h-8' : 'w-full h-full'}`}
                    alt={value.toString()}
                  />
                </div>
                <LocationName
                  style={{
                    fontSize: `${typeof value !== 'string' ? '1' : Math.max(1.3, 2.7 - 0.1 * name.length)}rem`,
                    lineHeight: typeof value === 'string' ? '2rem' : '1.45rem',
                    wordSpacing: '999px',
                  }}
                >
                  {name}
                </LocationName>
              </div>
            </HoverCardContainer>
          )}
        </KeepScale>
      </LocationContainer>
    );
  }
);

Location.displayName = 'Location';
export default Location;

const LocationContainer = tw.div`
  cursor-pointer w-max rounded-md absolute scale-[0.7] md:scale-100
`;

const HoverBackground = tw(Image)`
  rounded-lg absolute w-[200px]
`;

const LocationName = tw.p`
  font-serif font-bold text-white mt-1 mb-auto z-0 w-[110px] uppercase break-words
`;

const HoverCardContainer = tw.div`
  w-[200px] absolute -translate-y-1/2 z-[9999] sm:scale-100 scale-125 origin-center
`;

const TextIcon = tw.span`
  text-2xl font-serif font-bold text-white relative mb-1
`;
