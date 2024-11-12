import { ILocation } from '@/types';
import Image from 'next/image';
import { memo } from 'react';
import tw from 'tailwind-styled-components';

import place from '../../../public/icons/place.svg';

const Location = memo(({ left, top, name }: ILocation) => (
  <LocationContainer style={{ left: `${left}%`, top: `${top}%` }}>
    <Icon src={place} alt="Location Icon" />
    <HoverCardContainer>
      <span>{name}</span>
      <Image src={'/'} width={190} height={100} alt={`${name} Thumbnail`} />
    </HoverCardContainer>
  </LocationContainer>
));

Location.displayName = 'Location';
export default Location;

const LocationContainer = tw.div`
  absolute cursor-pointer group
`;

const HoverCardContainer = tw.div`
  bg-white z-[30] w-72 h-48 group-hover:block hidden relative -translate-y-[calc(100%+3.5rem)] -left-2 p-4 rounded-lg shadow-sm
`;

const Icon = tw(Image)`
  w-12 h-12 brightness-150
`;
