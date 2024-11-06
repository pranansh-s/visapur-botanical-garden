import Heading from '../common/Heading';
import tw from 'tailwind-styled-components';
import ImageCard from '../common/ImageCard';
import { activities } from '@/constants';

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
    </ActivitiesContainer>
  );
};

export default Activities;

const ActivitiesContainer = tw.div`
  flex flex-col space-y-2 h-[820px] overflow-hidden
`;

const CardContainer = tw.ul`
  grid grid-rows-3 grid-cols-3 gap-8 h-[700px] pt-12
`;
