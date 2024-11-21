import { wideCarouselItems } from '@/constants';
import tw from 'tailwind-styled-components';

import WideCarousel from '../Carousel/WideCarousel';
import Heading from '../common/Heading';

const NewsUpdates = (): React.ReactElement => {
  return (
    <NewsUpdatesContainer>
      <Heading name="News & Updates" />
      <p className="text-tertiary-200 font-serif !mb-24">
        Stay up-to-date with the latest happenings at our botanical garden! From
        seasonal blooms and new plant collections to upcoming events, workshops,
        and conservation initiatives, this is your go-to source for all garden
        news. Explore our latest research projects, volunteer opportunities, and
        eco-friendly practices that help us grow greener every day. Don&apos;t
        miss out on exclusive garden tours, community programs, and special
        promotions.
      </p>
      <WideCarousel items={wideCarouselItems} />
    </NewsUpdatesContainer>
  );
};

export default NewsUpdates;

const NewsUpdatesContainer = tw.div`
    flex flex-col space-y-3
`;
