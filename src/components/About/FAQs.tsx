'use client';

import { memo } from 'react';

import useToggleIndex from '@/hooks/useToggleIndex';
import tw from 'tailwind-styled-components';

import Heading from '../common/Heading';
import HiddenAnswer from './HiddenAnswer';

const FAQs = memo(() => {
  const { activeIndex, toggleIndex } = useToggleIndex();
  return (
    <FAQsContainer>
      <Heading name="FAQs" />
      <HiddenAnswer
        onClick={() => toggleIndex(0)}
        state={0 === activeIndex}
        textNode={<Title>Garden&apos;s FAQ</Title>}
        text=""
      />
      <HiddenAnswer
        onClick={() => toggleIndex(1)}
        state={1 === activeIndex}
        textNode={<Title>Visapur Garden Service Rules & Regulations</Title>}
        text=""
      />
      <HiddenAnswer
        onClick={() => toggleIndex(2)}
        state={2 === activeIndex}
        textNode={<Title>Garden&apos;s Photography Guidelines</Title>}
        text=""
      />
    </FAQsContainer>
  );
});

FAQs.displayName = 'FAQs';
export default FAQs;

const FAQsContainer = tw.div`
    flex flex-col my-12 space-y-5
`;

const Title = tw.span`
    text-tertiary-200 font-serif text-sm w-[95%]
`;
