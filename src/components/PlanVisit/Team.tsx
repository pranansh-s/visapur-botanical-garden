import { memo } from 'react';

import { TeamMembers } from '@/constants';
import tw from 'tailwind-styled-components';

import Carousel from '../Carousel';
import Heading from '../common/Heading';

const Team: React.FC = memo(() => {
  return (
    <TeamContainer>
      <Heading name="Our Team" />
      <p className="text-tertiary-300 font-serif md:text-base text-sm">
        Our dedicated team of higher authorities, horticulturists, botanists,
        and nature enthusiasts work together to cultivate and preserve the
        beauty of our garden. With a deep love for plants and the environment,
        we are committed to nurturing biodiversity, educating the community, and
        creating a tranquil space for visitors to connect with nature
      </p>
      <Carousel
        className="my-12"
        variant="team"
        itemsVisible={4}
        items={TeamMembers}
      />
    </TeamContainer>
  );
});

Team.displayName = 'Team';
export default Team;

const TeamContainer = tw.div`
    flex flex-col mb-12 mt-3
`;
