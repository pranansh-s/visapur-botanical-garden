import Heading from '../common/Heading';
import tw from 'tailwind-styled-components';
import ImageCard from '../common/ImageCard';
import { activities } from '@/constants';
import Image from 'next/image';

import honey2 from '../../../public/honey-2.svg';
import tree3 from '../../../public/tree-3.svg';

const Activities = (): React.ReactElement => {
  return (
    <ActivitiesContainer>
      <Heading name="Unforgettable Events | Activities" />
      <CardContainer>
        <ImageCard {...activities[0]} />
        <ImageCard className="row-span-2 col-span-2" {...activities[1]} />
        <ImageCard className="row-span-2" {...activities[2]} />
        <ImageCard className="w-[calc(100%+3rem)]" {...activities[3]} />
        <ImageCard className="w-[calc(100%-3rem)] ml-12" {...activities[4]} />
      </CardContainer>
      <BackgroundImage
        src={honey2}
        alt="honey-2"
        className="w-[120px] md:w-[160px] lg:w-[250px] -top-10 xl:-right-lg lg:-right-md -right-sm"
      />
      <BackgroundImage
        src={tree3}
        alt="tree-3"
        className="w-[160px] md:w-[200px] lg:w-[250px] bottom-0 xl:-left-lg lg:-left-md -left-sm"
      />
    </ActivitiesContainer>
  );
};

export default Activities;

const ActivitiesContainer = tw.div`
  flex flex-col space-y-2 h-[820px] relative
`;

const CardContainer = tw.ul`
  grid grid-rows-3 grid-cols-3 gap-8 h-[700px] pt-12
`;

const BackgroundImage = tw(Image)`
  absolute -z-10
`;
