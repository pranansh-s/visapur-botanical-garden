import Image from 'next/image';
import Link from 'next/link';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import tw from 'tailwind-styled-components';

import train from '../../../public/train.svg';
import tree from '../../../public/tree.svg';

import Heading from '../common/Heading';

const WhoWeAre = (): React.ReactElement => {
  return (
    <Container>
      <Heading name="Who we are" />
      <Description>
        At{' '}
        <b className="text-base md:text-lg lg:text-xl">
          Shradheya Shri Atal Bihari Vajpayee Botanical Garden
        </b>
        , we are dedicated to inspiring a love for nature and promoting
        environmental stewardship. Established on 15/03/2024, our garden has
        grown into a vibrant sanctuary where visitors can explore a diverse
        collection of plants from around the world. Our mission is to educate,
        conserve, and connect people with the beauty and importance of the
        natural world. Whether you&apos;re here to learn, relax, or simply enjoy
        the scenery, we offer a welcoming space for everyone to experience the
        wonders of nature.
        <Link href="/about" passHref>
          <ReadMore>Read more &gt;</ReadMore>
        </Link>
      </Description>
      <BackgroundImage
        src={tree}
        alt="Tree"
        className="h-[1200px] md:h-[600px] lg:h-[752px] md:-right-lg -right-[42%] md:bottom-6 bottom-[75%]"
      />
      <DotLottieReact
        src="/lottie/astronaut.lottie"
        loop
        autoplay
        className="md:block hidden w-[40rem] lg:w-[50rem] absolute right-0 translate-x-1/4 bottom-0 -mb-4"
      />
      <BackgroundImage
        src={train}
        alt="Train"
        className="w-[300px] md:w-[350px] lg:w-[450px] xl:-left-lg 2xl -left-md bottom-[calc(100%+5rem)] sm:bottom-12"
      />
      <VideoWrapper>
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/8iGS0FKH_vk"
          title="Shraddhey Shree Atal Bihari Vajpayee Botanical Garden"
          className="h-[300px] md:block hidden"
          allowFullScreen
        />
      </VideoWrapper>
    </Container>
  );
};

export default WhoWeAre;

const Container = tw.div`
  h-max sm:!mt-[350px] !mt-[250px] sm:pb-96 pb-36 flex flex-col justify-center relative
`;

const VideoWrapper = tw.div`
  absolute w-1/2 min-w-[500px] top-1/2 translate-y-3
`;

const Description = tw.p`
  font-serif text-tertiary-300 w-full md:w-[75%] lg:w-[60%] leading-6 md:leading-7 text-base md:text-lg lg:text-xl
`;

const ReadMore = tw.span`
  block w-max mt-8 md:mt-12 lg:mt-16 text-tertiary-100 font-bold text-sm md:text-base
`;

const BackgroundImage = tw(Image)`
  absolute -z-10
`;
