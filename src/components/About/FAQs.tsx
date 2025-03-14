'use client';

import { memo } from 'react';

import useToggleIndex from '@/hooks/useToggleIndex';
import { useTranslation } from 'react-i18next';
import tw from 'tailwind-styled-components';

import Heading from '../common/Heading';
import HiddenAnswer from './HiddenAnswer';

const FAQs: React.FC = memo(() => {
  const { activeIndex, toggleIndex } = useToggleIndex();
  const { t } = useTranslation();

  return (
    <FAQsContainer id="faqs">
      <Heading name="FAQs" />
      <HiddenAnswer
        onClick={() => toggleIndex(0)}
        state={0 === activeIndex}
        textNode={<Title>{t('aboutUs.faqs.garden.title')}</Title>}
        text={t('aboutUs.faqs.garden.body')}
      />
      <HiddenAnswer
        onClick={() => toggleIndex(1)}
        state={1 === activeIndex}
        textNode={<Title>{t('aboutUs.faqs.rules.title')}</Title>}
        text={t('aboutUs.faqs.rules.body')}
      />
      <HiddenAnswer
        onClick={() => toggleIndex(2)}
        state={2 === activeIndex}
        textNode={<Title>{t('aboutUs.faqs.photography.title')}</Title>}
        text={t('aboutUs.faqs.photography.body')}
      />
    </FAQsContainer>
  );
});

FAQs.displayName = 'FAQs';
export default FAQs;

const FAQsContainer = tw.section`
    flex flex-col my-12 space-y-5
`;

const Title = tw.span`
    text-tertiary-200 font-serif text-sm w-[95%]
`;
