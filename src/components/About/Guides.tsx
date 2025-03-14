import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import tw from 'tailwind-styled-components';

import { guides } from '@/constants/carousels';
import Carousel from '../Carousel';
import Heading from '../common/Heading';

const Guides: React.FC = memo(() => {
  const { t } = useTranslation();
  return (
    <GuidesContainer id="guides">
      <Heading name={t('aboutUs.guides.title')} />
      <p className="text-tertiary-300 font-serif md:text-base text-sm">
        {t('aboutUs.guides.body')}
      </p>
      <Carousel
        className="!my-12"
        variant="guides"
        itemsVisible={6}
        items={guides}
      />
    </GuidesContainer>
  );
});

Guides.displayName = 'Guides';
export default Guides;

const GuidesContainer = tw.section`
  flex flex-col space-y-3 !mb-24
`;
