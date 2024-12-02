import tw from 'tailwind-styled-components';

import { instagramPosts } from '@/constants/carousels';
import Carousel from '../Carousel';

const Instagram = (): React.ReactElement => {
  return (
    <InstagramPostsContainer>
      <Heading>Follow Us</Heading>
      <Carousel
        itemsVisible={3}
        variant="instagram"
        className="max-w-[1200px] !left-1/2 -translate-x-1/2 overflow-hidden"
        items={instagramPosts}
      />
    </InstagramPostsContainer>
  );
};

export default Instagram;

const Heading = tw.h3`
  text-center text-tertiary-300 font-bold font-sans text-3xl
`;

const InstagramPostsContainer = tw.div`
  flex flex-col justify-center py-12 space-y-6
`;
