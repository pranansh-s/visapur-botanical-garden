import { useTranslation } from 'react-i18next';
import tw from 'tailwind-styled-components';

import { eventCarouselItems } from '@/constants/carousels';
import WideCarousel from '../Carousel/WideCarousel';
import Heading from '../common/Heading';

const NewsUpdates = (): React.ReactElement => {
  const { t } = useTranslation();
  return (
    <NewsUpdatesContainer>
      <Heading name={t('aboutUs.newsUpdates.title')} />
      <p className="text-tertiary-200 font-serif !mb-12">
        {t('aboutUs.newsUpdates.body')}
      </p>
      <WideCarousel items={eventCarouselItems} />
    </NewsUpdatesContainer>
  );
};

export default NewsUpdates;

const NewsUpdatesContainer = tw.div`
  flex flex-col space-y-3
`;
