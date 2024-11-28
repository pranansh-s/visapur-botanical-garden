import { HTMLAttributes } from 'react';
import Image from 'next/image';

import { IVisitLocation } from '@/types';
import tw from 'tailwind-styled-components';

interface VisitLocation extends HTMLAttributes<HTMLDivElement>, IVisitLocation {
  active: boolean;
}

const Location: React.FC<VisitLocation> = ({
  name,
  bgColor,
  text,
  imageSrc,
  active,
  ...props
}) => {
  return (
    <LocationContainer
      style={{
        background: active ? bgColor + '40' : 'rgba(1, 1, 1, 0)',
        ...props.style,
      }}
    >
      <Image
        src={imageSrc}
        priority
        width={300}
        height={300}
        className={`max-h-[200px] min-w-[15rem] w-[65%] origin-left ${active ? 'scale-100' : 'scale-[2.0]'} transition-all duration-500`}
        alt=""
      />
      <LocationText $active={active}>
        Welcome to the
        <span className="text-4xl my-3 text-tertiary-300">{name}</span>
        {text}
      </LocationText>
    </LocationContainer>
  );
};

export default Location;

const LocationContainer = tw.div`
  xl:scale-100 md:scale-[0.8] scale-[0.5] sm:translate-x-0 -translate-x-[5%] origin-left min-w-[45rem] w-[65%] flex absolute -translate-y-1/2 p-7 sm:p-12 transition-all duration-500 rounded-xl
`;

const LocationText = tw.p<{ $active: boolean }>`
  ${({ $active }) => ($active ? 'opacity-100' : 'opacity-0')}
  flex flex-col text-xl font-sans my-auto transition-opacity duration-500 ml-10
`;
