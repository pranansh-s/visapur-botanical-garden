import { memo } from 'react';
import Image from 'next/image';

import { useTranslation } from 'react-i18next';
import tw from 'tailwind-styled-components';

import reach1 from '../../../public/reach/reach-1.svg';
import reach2 from '../../../public/reach/reach-2.svg';
import reach3 from '../../../public/reach/reach-3.svg';
import reach4 from '../../../public/reach/reach-4.svg';
import reach from '../../../public/reach/reach.svg';

const HowToReach: React.FC = memo(() => {
  const { t } = useTranslation();
  return (
    <HowToReachContainer>
      <Title>
        {t('table.howToReach')}&nbsp;
        <Image width={40} src={reach} alt="" />
      </Title>
      <ReachPath src={reach1} alt="Chandrapur Railyway-Auto Path" />
      <ReachPath src={reach2} alt="Ballarshah Railway-Auto Path" />
      <ReachPath src={reach3} alt="Chandrapur Car Path" />
      <ReachPath src={reach4} alt="Badshaheb Airport-Bus Path" />
    </HowToReachContainer>
  );
});

HowToReach.displayName = 'HowToReach';
export default HowToReach;

const HowToReachContainer = tw.div`
  sm:px-36 px-14 font-sans font-bold space-y-12
`;

const Title = tw.h4`
  flex items-center text-5xl text-[#711F00] mt-6 py-6 border-b-[1px] border-tertiary-200
`;

const ReachPath = tw(Image)`
  w-full sm:scale-100 scale-110
`;
