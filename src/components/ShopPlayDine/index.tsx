import tw from 'tailwind-styled-components';
import Heading from '../common/Heading';
import Carousel from '../Carousel';
import { shopPlayDineItems } from '@/constants';

const ShopPlayDine = (): React.ReactElement => {
  return (
    <ShopContainer>
      <Heading name="Shop, Play & Dine" />
      <Carousel items={shopPlayDineItems} />
    </ShopContainer>
  );
};

export default ShopPlayDine;

const ShopContainer = tw.div`
  flex flex-col space-y-2 h-[400px]
`;
