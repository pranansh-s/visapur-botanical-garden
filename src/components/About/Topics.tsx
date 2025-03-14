'use client';

import useToggleIndex from '@/hooks/useToggleIndex';
import { useTranslation } from 'react-i18next';
import tw from 'tailwind-styled-components';

import HiddenAnswer from './HiddenAnswer';

const Topics = (): React.ReactElement => {
  const { activeIndex, toggleIndex } = useToggleIndex();
  const { t } = useTranslation();

  return (
    <TopicsContainer>
      <HiddenAnswer
        name={t('aboutUs.topics.history.name')}
        textNode={<Title>{t('aboutUs.topics.history.title')}</Title>}
        onClick={() => toggleIndex(0)}
        state={0 === activeIndex}
        text={t('aboutUs.topics.history.text')}
      />
      <HiddenAnswer
        name={t('aboutUs.topics.mission.name')}
        onClick={() => toggleIndex(1)}
        state={1 === activeIndex}
        textNode={
          <Title>
            {t('aboutUs.topics.mission.title.part1')}
            <Highlight>{t('aboutUs.topics.mission.title.part2')}</Highlight>
          </Title>
        }
        text={t('aboutUs.topics.mission.text')}
      />
      <HiddenAnswer
        name={t('aboutUs.topics.vision.name')}
        onClick={() => toggleIndex(2)}
        state={2 === activeIndex}
        textNode={
          <Title>
            {t('aboutUs.topics.vision.title.part1')}
            <Highlight>{t('aboutUs.topics.vision.title.part2')}</Highlight>
            {t('aboutUs.topics.vision.title.part3')}
            <Highlight>{t('aboutUs.topics.vision.title.part4')}</Highlight>
          </Title>
        }
        text={t('aboutUs.topics.vision.text')}
      />
      <HiddenAnswer
        name={t('aboutUs.topics.initiatives.name')}
        onClick={() => toggleIndex(3)}
        state={3 === activeIndex}
        textNode={<Title>{t('aboutUs.topics.initiatives.title')}</Title>}
        text={t('aboutUs.topics.initiatives.text')}
      />
      <HiddenAnswer
        name={t('aboutUs.topics.nearbyPlaces.name')}
        onClick={() => toggleIndex(4)}
        state={4 === activeIndex}
        textNode={<Title>{t('aboutUs.topics.nearbyPlaces.title')}</Title>}
        text={t('aboutUs.topics.nearbyPlaces.text')}
      />
    </TopicsContainer>
  );
};

export default Topics;

const TopicsContainer = tw.div`
    flex flex-col space-y-10
`;

const Title = tw.span`
    text-tertiary-200 font-serif md:text-lg text-sm w-[95%]
`;

const Highlight = tw.span`
    text-secondary md:text-lg text-sm
`;
