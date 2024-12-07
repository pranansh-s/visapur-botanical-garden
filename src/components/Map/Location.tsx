'use client';

import { memo, useState } from 'react';
import Image from 'next/image';

import { ILocation } from '@/types';
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
        <div className="flex items-center justify-center">
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
                className="flex flex-col h-[90px] py-3 space-x-3 mb-1 group"
                style={{
                  paddingLeft: 12,
                  paddingRight: 12,
                }}
              >
                <div
                  className="flex items-center rounded-lg relative justify-center h-[130px] w-[122px] aspect-square z-10"
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
                    width={72}
                    height={72}
                    className={`max-h-none rounded-md text-3xl font-serif ${typeof value === 'string' ? 'invert brightness-0 py-2 max-h-8' : 'w-full h-full'}`}
                    alt={value.toString()}
                  />
                </div>
                <LocationName>{name}</LocationName>
              </div>
            </HoverCardContainer>
          )}
        </div>
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
  rounded-lg absolute w-[145px] h-[190px] object-cover
`;

const LocationName = tw.p`
  font-serif font-bold text-white mb-auto z-0 text-lg uppercase -translate-x-3 max-w-[130px]
`;

const HoverCardContainer = tw.div`
  absolute translate-y-1/2 z-[9999] sm:scale-125 scale-100 origin-center w-[170px]
`;

const TextIcon = tw.span`
  text-2xl font-serif font-bold text-white relative mb-1
`;
