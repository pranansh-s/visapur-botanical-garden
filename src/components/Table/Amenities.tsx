'use client';

import Image from 'next/image';
import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import tw from 'tailwind-styled-components';

import { amenities } from '@/constants';
import { IAmenity } from '@/types';

const Amenities: React.FC = memo(() => {
  const [page, setPage] = useState<number>(0);

  const togglePage = () => setPage(prevPage => (prevPage === 0 ? 1 : 0));

  return (
    <Wrapper
      animate={{ x: page === 0 ? 0 : '-100%' }}
      transition={{ duration: 0.6 }}
    >
      <Container>
        {amenities.slice(0, 7).map((amenity: IAmenity, idx: number) => (
          <AmenityContainer key={idx}>
            <Image width={48} height={48} src={amenity.icon} alt="" />
            <Arrow>
              <Head />
            </Arrow>
            <Text>{amenity.name}</Text>
          </AmenityContainer>
        ))}
      </Container>

      <OtherContainer>
        {amenities.slice(7).map((amenity: IAmenity, idx: number) => (
          <AmenityContainer key={idx}>
            <Image width={48} height={48} src={amenity.icon} alt="" />
            <Arrow>
              <Head />
            </Arrow>
            <Text>{amenity.name}</Text>
          </AmenityContainer>
        ))}
      </OtherContainer>

      <RightArrow onClick={togglePage}>&gt;</RightArrow>
      <LeftArrow onClick={togglePage}>&lt;</LeftArrow>
    </Wrapper>
  );
});

Amenities.displayName = 'Amenities';
export default Amenities;

const Wrapper = tw(motion.div)`
  flex px-36 pt-12 space-x-12 relative
`;

const Container = tw.div`
  flex flex-col space-y-12 w-full
`;

const OtherContainer = tw(Container)`
  absolute -right-full px-36 space-y-16
`;

const AmenityContainer = tw.div`
  flex items-center space-x-3
`;

const Text = tw.span`
 font-serif uppercase text-3xl text-tertiary-200
`;

const Arrow = tw.div`
  flex-1 h-1 bg-gradient-to-r from-transparent to-tertiary-300 opacity-40 relative flex items-center
`;

const Head = tw.div`
  absolute bg-tertiary-300 w-4 h-4 rounded-full right-0
`;

const ButtonArrow = tw.button`
  absolute top-1/2 -translate-y-1/2 text-4xl text-tertiary-300 font-bold hover:text-tertiary-200 transition-all duration-200 scale-y-[3]
`;

const RightArrow = tw(ButtonArrow)`
  right-16
`;

const LeftArrow = tw(ButtonArrow)`
  left-full
`;
