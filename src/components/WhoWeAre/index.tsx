import Link from 'next/link';
import Image from 'next/image';
import tw from 'tailwind-styled-components';

import Heading from '../common/Heading';

import astronaut from '../../../public/astronaut.svg';
import tree from '../../../public/tree.svg';
import train from '../../../public/train.svg';

const WhoWeAre = (): React.ReactElement => {
  return (
    <Container>
      <Heading name="Who we are" />
      <Description>
        At <b>Shradheya Shri Atal Bihari Vajpayee Botanical Garden</b>, we are
        dedicated to inspiring a love for nature and promoting environmental
        stewardship. Established on 15/03/2024, our garden has grown into a
        vibrant sanctuary where visitors can explore a diverse collection of
        plants from around the world. Our mission is to educate, conserve, and
        connect people with the beauty and importance of the natural world.
        Whether you&apos;re here to learn, relax, or simply enjoy the scenery,
        we offer a welcoming space for everyone to experience the wonders of
        nature.
        <Link href="/" passHref>
          <ReadMore>Read more &gt;</ReadMore>
        </Link>
      </Description>
      <BackgroundImage
        src={tree}
        alt="Tree"
        className="h-[400px] md:h-[600px] lg:h-[752px] -right-lg bottom-6"
      />
      <BackgroundImage
        src={astronaut}
        alt="Astronaut"
        className="w-[300px] md:w-[384px] lg:w-[512px] sm:-right-0 -right-sm bottom-0"
      />
      <BackgroundImage
        src={train}
        alt="Train"
        className="w-[200px] md:w-[350px] lg:w-[450px] xl:-left-lg lg:-left-md -left-sm bottom-6 md:bottom-12"
      />
    </Container>
  );
};

export default WhoWeAre;

const Container = tw.div`
  h-screen flex flex-col justify-center relative
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
