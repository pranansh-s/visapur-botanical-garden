import { memo } from 'react';
import tw from 'tailwind-styled-components';

import reach from '../../../public/reach/reach.svg';
import reach1 from '../../../public/reach/reach-1.svg';
import reach2 from '../../../public/reach/reach-2.svg';
import reach3 from '../../../public/reach/reach-3.svg';
import reach4 from '../../../public/reach/reach-4.svg';
import Image from 'next/image';

const HowToReach: React.FC = memo(() => {
  return (
    <HowToReachContainer>
      <Title>
        How To Reach &nbsp;
        <Image width={40} src={reach} alt="" />
      </Title>
      <Image src={reach1} alt="" />
      <Image src={reach2} alt="" />
      <Image src={reach3} alt="" />
      <Image src={reach4} alt="" />
    </HowToReachContainer>
  );
});

HowToReach.displayName = 'HowToReach';
export default HowToReach;

const HowToReachContainer = tw.div`
  px-36 font-sans font-bold space-y-12
`;

const Title = tw.h4`
  flex items-center text-5xl text-[#711F00] mt-6 py-6 border-b-[1px] border-tertiary-200
`;
