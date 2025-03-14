import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import tw from 'tailwind-styled-components';

import { teamMembers } from '@/constants/carousels';
import Carousel from '../Carousel';
import Heading from '../common/Heading';
import Guides from './Guides';

const TeamsGuides: React.FC = memo(() => {
  const { t } = useTranslation();
  return (
    <TeamContainer id="team">
      <Heading name={t('aboutUs.team.title')} />
      <p className="text-tertiary-300 font-serif md:text-base text-sm">
        {t('aboutUs.team.body')}
      </p>
      <Carousel
        className="!my-12"
        variant="team"
        itemsVisible={4}
        items={teamMembers}
      />
      <Guides />
      <div className="bg-tertiary-300 text-white font-sans p-12 sm:p-24 h-[300px] sm:h-[250px] flex md:flex-row flex-col items-center md:space-y-0 space-y-12 space-x-0 md:space-x-24 lg:space-x-48 leading-[2rem] my-12 relative">
        <p className="text-2xl mr-auto">{t('aboutUs.team.join.title')}</p>
        <p className="md:w-1/3 w-full">{t('aboutUs.team.join.body')}</p>
        <button aria-label="join-us" className="absolute bottom-10 right-10">
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

TeamsGuides.displayName = 'Team';
export default TeamsGuides;

const TeamContainer = tw.section`
    flex flex-col space-y-3
`;
