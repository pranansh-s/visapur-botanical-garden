import tw from 'tailwind-styled-components';
import Carousel from '../Carousel';
import { instagramPosts } from '@/constants';

const Instagram = (): React.ReactElement => {
  return (
    <InstagramPostsContainer>
      <Heading>Follow Us</Heading>
      <Carousel
        itemsToShow={5}
        variant="instagram"
        className="w-full translate-x-0 overflow-hidden"
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
