'use client';

import { amenities } from '@/constants';
import { IAmenity } from '@/types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { memo, useState } from 'react';
import tw from 'tailwind-styled-components';

import { animationPreset } from '../../utils/anim';

const Amenities: React.FC = memo(() => {
  const [page, setPage] = useState<number>(0);

  const togglePage = () => setPage(prevPage => (prevPage === 0 ? 1 : 0));

  return (
    <Wrapper
      animate={{ x: page === 0 ? 0 : '-100%' }}
      transition={{ animationPreset, delay: 0, duration: 0.6 }}
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

      <RightArrow onClick={togglePage}>
        <svg
          height="20px"
          viewBox="0 0 512 512"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M298.3,256L298.3,256L298.3,256L131.1,81.9c-4.2-4.3-4.1-11.4,0.2-15.8l29.9-30.6c4.3-4.4,11.3-4.5,15.5-0.2l204.2,212.7  c2.2,2.2,3.2,5.2,3,8.1c0.1,3-0.9,5.9-3,8.1L176.7,476.8c-4.2,4.3-11.2,4.2-15.5-0.2L131.3,446c-4.3-4.4-4.4-11.5-0.2-15.8  L298.3,256z" />
        </svg>
      </RightArrow>
      <LeftArrow onClick={togglePage}>
        <svg
          height="20px"
          viewBox="0 0 512 512"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M213.7,256L213.7,256L213.7,256L380.9,81.9c4.2-4.3,4.1-11.4-0.2-15.8l-29.9-30.6c-4.3-4.4-11.3-4.5-15.5-0.2L131.1,247.9  c-2.2,2.2-3.2,5.2-3,8.1c-0.1,3,0.9,5.9,3,8.1l204.2,212.7c4.2,4.3,11.2,4.2,15.5-0.2l29.9-30.6c4.3-4.4,4.4-11.5,0.2-15.8  L213.7,256z" />
        </svg>
      </LeftArrow>
    </Wrapper>
  );
});

Amenities.displayName = 'Amenities';
export default Amenities;

const Wrapper = tw(motion.div)`
  flex sm:px-36 px-16 pt-12 space-x-12 relative
`;

const Container = tw.div`
  flex flex-col space-y-12 w-full
`;

const OtherContainer = tw(Container)`
  absolute -right-full sm:px-36 px-16 space-y-16
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
  sm:block hidden p-2 absolute top-1/2 -translate-y-[150%] rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black/5 scale-[2] via-transparent to-transparent
`;

const RightArrow = tw(ButtonArrow)`
  right-3
`;

const LeftArrow = tw(ButtonArrow)`
  left-[calc(100%-2rem)]
`;
