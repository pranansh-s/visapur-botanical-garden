import tw from 'tailwind-styled-components';
import Carousel from '../Carousel';
import Heading from '../common/Heading';
import { glimpsesItems } from '@/constants';

import honey1 from '../../../public/honey-1.svg';
import Image from 'next/image';

const Glimpses = (): React.ReactElement => {
  return (
    <GlimpsesContainer>
      <Heading name="Glimpses" />
      <Carousel items={glimpsesItems} />
      <BackgroundImage
        src={honey1}
        alt="honey-1"
        className="w-[80px] md:w-[120px] lg:w-[160px] -top-1/3 xl:-left-lg lg:-left-md -left-sm"
      />
    </GlimpsesContainer>
  );
};

export default Glimpses;

const GlimpsesContainer = tw.div`
  flex flex-col space-y-2 h-[575px] relative
`;

const BackgroundImage = tw(Image)`
  absolute -z-10
`;
