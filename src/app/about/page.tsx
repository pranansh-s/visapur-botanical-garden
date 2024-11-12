import Image from 'next/image';

import { zoneItems } from '@/constants';
import tw from 'tailwind-styled-components';

import tree from '../../../public/footer-tree.svg';
import minister from '../../../public/minister.png';

import Carousel from '@/components/Carousel';
import Heading from '@/components/common/Heading';

const AboutUs: React.FC = () => {
  return (
    <div className="px-lg mt-96">
      <Heading name="Our Story" />
      <div className="flex space-x-24">
        <OurStoryText>
          Discover the transformative tale of the{' '}
          <b>Shraddhey Shree Atal Bihari Vajpayee Botanical Garden</b>, a
          visionary initiative by the{' '}
          <b>Forest Department of Central Chanda, Maharashtra,</b> spearheaded
          by <b>Forest Minister Shri. Sudhir Mungantiwar.</b> In a bid to
          safeguard the delicate balance between human livelihoods and wildlife
          conservation, this expansive <b>104-hectare Botanical Garden</b> was
          established, featuring a Conservation Zone nurturing indigenous flora
          and fauna, and a Recreation Zone offering educational and recreational
          experiences. Embracing eco-tourism and sustainable practices, this
          botanical marvel symbolizes India&apos;s commitment to harmonious
          coexistence, weaving together development, preservation, and
          environmental stewardship under PM Modi&apos;s &apos;Viksit
          Bharat&apos; vision. It&apos;s a story of{' '}
          <b>unity, progress, and the nurturing of a sustainable future</b>{' '}
          amidst nature&apos;s embraces.
        </OurStoryText>
        <MinisterInfo>
          <Image
            className="absolute -z-10 -top-12 -right-full"
            src={tree}
            alt=""
          />
          <Image className="h-[60vh] w-full" src={minister} alt="" />
          <span>
            Shri. Sudhir Mungantiwar <br />
            (Forest Minister)
          </span>
        </MinisterInfo>
      </div>
      <Carousel variant="rotateScale" showArrows={false} items={zoneItems} />
    </div>
  );
};

export default AboutUs;

const MinisterInfo = tw.div`
    text-center flex flex-col -translate-y-1/3 space-y-5 font-serif font-bold text-secondary
`;

const OurStoryText = tw.p`
    font-serif text-tertiary-200 w-2/3 leading-[2rem]
`;
