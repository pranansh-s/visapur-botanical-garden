import { memo } from 'react';
import Image from 'next/image';

import { ILocation } from '@/types';
import tw from 'tailwind-styled-components';

import markerHover from '../../../public/marker-hover.svg';

import MarkerIcon from '../common/MarkerIcon';

const Location = memo(
  ({ name, left, top, value, color, direction }: ILocation) => {
    const flippedStyle = { transform: `scaleX(${direction ? -1 : 1})` };
    return (
      <LocationContainer style={{ left: `${left}%`, top: `${top}%` }}>
        <MarkerIcon
          fill={typeof value === 'string' ? color! : '#C90B02'}
          style={flippedStyle}
        />
        {typeof value === 'string' ? (
          <Icon src={value} width={21} height={0} alt="" />
        ) : (
          <TextIcon className="w-">{value}</TextIcon>
        )}
        <HoverCardContainer
          style={direction ? { left: '10%' } : { right: '10%' }}
        >
          <HoverBackground style={flippedStyle} src={markerHover} alt="" />
          <div
            className="flex h-[90px] py-3 space-x-3 mb-1"
            style={{
              paddingLeft: direction ? 17 : 12,
              paddingRight: direction ? 12 : 17,
            }}
          >
            <div
              className="flex items-center rounded-lg relative justify-center h-[57.5px] aspect-square z-10"
              style={{
                backgroundColor: typeof value === 'string' ? color! : '#D9D9D9',
              }}
            >
              {typeof value === 'string' ? (
                <Icon
                  src={value}
                  width={36}
                  height={36}
                  className="max-h-none"
                  alt=""
                />
              ) : (
                <TextIcon className="static text-5xl text-tertiary-200">
                  {value}
                </TextIcon>
              )}
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
      </LocationContainer>
    );
  }
);

Location.displayName = 'Location';
export default Location;

const LocationContainer = tw.div`
  absolute cursor-pointer group w-max rounded-md flex items-center justify-center
`;

const HoverBackground = tw(Image)`
  rounded-lg absolute w-[200px]
`;

const LocationName = tw.p`
  font-serif font-bold text-white mt-1 mb-auto z-0 w-[110px] uppercase break-words
`;

const HoverCardContainer = tw.div`
  z-[30] group-hover:block hidden absolute w-[200px] bottom-[70%]
`;

const Icon = tw(Image)`
  invert brightness-0 pb-2 max-h-8
`;

const TextIcon = tw.span`
  text-2xl font-serif font-bold text-white relative mb-1
`;
