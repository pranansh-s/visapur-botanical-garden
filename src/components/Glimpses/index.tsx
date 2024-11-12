import Image from 'next/image';

import { glimpsesItems } from '@/constants';
import tw from 'tailwind-styled-components';

import honey1 from '../../../public/honey-1.svg';

import Carousel from '../Carousel';
import Heading from '../common/Heading';

const Glimpses = (): React.ReactElement => {
  return (
    <GlimpsesContainer>
      <Heading name="Glimpses" />
      <Carousel items={glimpsesItems} />
      <BackgroundImage
        src={honey1}
        alt="honey-1"
        className="w-[150px] md:w-[200px] lg:w-[250px] -top-1/4 xl:-left-lg -left-md"
      />
    </GlimpsesContainer>
  );
};

export default Glimpses;

const GlimpsesContainer = tw.div`
  flex flex-col space-y-2 h-max relative
`;

const BackgroundImage = tw(Image)`
  absolute -z-10
`;
