import { memo } from 'react';

import tw from 'tailwind-styled-components';

import { guides } from '@/constants/carousels';
import Carousel from '../Carousel';
import Heading from '../common/Heading';

const Guides: React.FC = memo(() => {
  return (
    <GuidesContainer id="guides">
      <Heading name="Our Guides" />
      <p className="text-tertiary-300 font-serif md:text-base text-sm">
        Our passionate and knowledgeable guides are dedicated to enhancing your
        experience by sharing their expertise and love for nature. With a deep
        understanding of the garden&apos;s flora, history, and ecology, they are
        here to educate, inspire, and help you connect with the beauty and
        serenity of our natural spaces.
      </p>
      <Carousel
        className="!my-12"
        variant="guides"
        itemsVisible={6}
        items={guides}
      />
    </GuidesContainer>
  );
});

Guides.displayName = 'Guides';
export default Guides;

const GuidesContainer = tw.section`
    flex flex-col space-y-3 !mb-24
`;
