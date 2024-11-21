import { memo } from 'react';

import { teamMembers } from '@/constants';
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
        className="!my-12"
        variant="team"
        itemsVisible={4}
        items={teamMembers}
      />
      <div className="bg-tertiary-300 text-white font-sans p-24 h-[250px] flex items-center space-x-48 leading-[2rem] my-12 relative">
        <p className="text-2xl">
          We&apos;re looking for talented people to join us!
        </p>
        <p className="w-1/3">
          Join the team of Visapur Garden and become a part of a dynamic
          community that values creativity, innovation and preservation of our
          rich heritage.
        </p>
        <button className="absolute bottom-10 right-10">
          <svg
            fill="white"
            height="25px"
            viewBox="0 0 512 512"
            width="40px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M298.3,256L298.3,256L298.3,256L131.1,81.9c-4.2-4.3-4.1-11.4,0.2-15.8l29.9-30.6c4.3-4.4,11.3-4.5,15.5-0.2l204.2,212.7  c2.2,2.2,3.2,5.2,3,8.1c0.1,3-0.9,5.9-3,8.1L176.7,476.8c-4.2,4.3-11.2,4.2-15.5-0.2L131.3,446c-4.3-4.4-4.4-11.5-0.2-15.8  L298.3,256z" />
          </svg>
        </button>
      </div>
    </TeamContainer>
  );
});

Team.displayName = 'Team';
export default Team;

const TeamContainer = tw.div`
    flex flex-col space-y-3
`;
