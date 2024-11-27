import Image from 'next/image';

import { shopPlayDineItems } from '@/constants';
import { IVideoLink } from '@/types';
import tw from 'tailwind-styled-components';

import Heading from '../common/Heading';

const ShopPlayDine = (): React.ReactElement => {
  return (
    <ShopContainer>
      <Heading name="Shop, Play & Dine" />
      <CardContainer>
        {shopPlayDineItems.map((item: IVideoLink, idx: number) => (
          <Image
            className="rounded-xl h-[20rem]"
            width={375}
            height={300}
            src={item.src}
            key={idx}
            alt=""
          />
        ))}
      </CardContainer>
    </ShopContainer>
  );
};

export default ShopPlayDine;

const ShopContainer = tw.div`
  flex flex-col space-y-2 h-max
`;

const CardContainer = tw.ul`
  flex sm:gap-3 gap-2 items-center justify-center lg:flex-nowrap flex-wrap
`;
