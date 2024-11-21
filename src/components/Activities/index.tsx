import Image from 'next/image';

import { activities } from '@/constants';
import useToggleIndex from '@/hooks/useToggleIndex';
import tw from 'tailwind-styled-components';

import honey1 from '../../../public/honey-1.svg';
import tree1 from '../../../public/tree-1.svg';

import Heading from '../common/Heading';
import ImageCard from '../common/ImageCard';

const Activities = (): React.ReactElement => {
  const { activeIndex, toggleIndex } = useToggleIndex();

  return (
    <ActivitiesContainer>
      <Heading name="Unforgettable Events | Activities" />
      <CardContainer>
        <ImageCard onClick={() => toggleIndex(0)} {...activities[0]} />
        <ImageCard
          onClick={() => toggleIndex(1)}
          className="row-span-2 col-span-2"
          {...activities[1]}
        />
        <ImageCard
          onClick={() => toggleIndex(2)}
          className="row-span-2"
          {...activities[2]}
        />
        <ImageCard
          onClick={() => toggleIndex(3)}
          className="w-[calc(100%+3rem)]"
          {...activities[3]}
        />
        <ImageCard
          onClick={() => toggleIndex(4)}
          className="w-[calc(100%-3rem)] ml-12"
          {...activities[4]}
        />
      </CardContainer>
      {/* <div className='fixed bg-black inset-0 w-screen h-full left-0 z-[500]'>
        <iframe src={activities[activeIndex].video} width="100%" height="800px"/>
      </div> */}
      <BackgroundImage
        src={honey1}
        alt="honey-1"
        className="w-[120px] md:w-[160px] lg:w-[250px] -top-10 xl:-right-lg lg:-right-md -right-sm"
      />
      <BackgroundImage
        src={tree1}
        alt="tree-1"
        className="w-[300px] md:w-[350px] lg:w-[400px] -bottom-[140px] -left-[300px]"
      />
    </ActivitiesContainer>
  );
};

export default Activities;

const ActivitiesContainer = tw.div`
  flex flex-col space-y-2 md:h-[850px] sm:h-[450px] relative sm:pb-24 pb-0 sm:!mb-0 !-mb-16 z-10
`;

const CardContainer = tw.ul`
  grid grid-rows-3 grid-cols-3 sm:gap-8 gap-3 h-full sm:scale-100 sm:w-full w-[112.5%] scale-[0.9] origin-top-left
`;

const BackgroundImage = tw(Image)`
  absolute -z-10
`;
