import tw from 'tailwind-styled-components';
import Carousel from '../Carousel';
import Heading from '../common/Heading';
import { glimpsesItems } from '@/constants';

const Glimpses = (): React.ReactElement => {
  return (
    <GlimpsesContainer>
      <Heading name="Glimpses" />
      <Carousel items={glimpsesItems} />
    </GlimpsesContainer>
  );
};

export default Glimpses;

const GlimpsesContainer = tw.div`
  flex flex-col space-y-2 h-[575px]
`;
