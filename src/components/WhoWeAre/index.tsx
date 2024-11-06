'use client';

import Link from 'next/link';
import Heading from '../common/Heading';
import Image from 'next/image';
import tw from 'tailwind-styled-components';

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
        src={train}
        alt="Train"
        className="h-[812px] -right-lg bottom-6"
      />
      <BackgroundImage
        src={astronaut}
        alt="Astronaut"
        className="w-[512px] right-0 bottom-0"
      />
      <BackgroundImage
        src={tree}
        alt="Tree"
        className="w-[450px] -left-lg bottom-12"
      />
    </Container>
  );
};

export default WhoWeAre;

const Container = tw.div`
  h-screen flex flex-col justify-center relative
`;

const Description = tw.p`
  font-serif text-sm text-tertiary-300 w-1/2 leading-7
`;

const ReadMore = tw.span`
  block w-max mt-16 text-tertiary-100 font-bold
`;

const BackgroundImage = tw(Image)`
  absolute
`;
