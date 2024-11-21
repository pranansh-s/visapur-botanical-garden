'use client';

import useToggleIndex from '@/hooks/useToggleIndex';
import tw from 'tailwind-styled-components';

import HiddenAnswer from './HiddenAnswer';

const Topics = (): React.ReactElement => {
  const { activeIndex, toggleIndex } = useToggleIndex();

  return (
    <TopicsContainer>
      <HiddenAnswer
        name="History"
        textNode={<Title>Discover the story behind Visapur Garden.</Title>}
        onClick={() => toggleIndex(0)}
        state={0 === activeIndex}
        text="jfshfkjh kfhdsdfg kgdfjhgdfkjhjdhk   gfhjfdkghkduf ghdfhggdfgjfg ghdg dg  gk ghj ghjgdfghfdg g ghdfgdfgfgh  fk   d d   g gdfgdgdfgdfgfg "
      />
      <HiddenAnswer
        name="Mission"
        onClick={() => toggleIndex(1)}
        state={1 === activeIndex}
        textNode={
          <Title>
            Our mission is to{' '}
            <Highlight>
              empower and uplift the livelihoods of local artisans, preserve
              heritage, and celebrate diverse cultures.
            </Highlight>
          </Title>
        }
        text=""
      />
      <HiddenAnswer
        name="Vision"
        onClick={() => toggleIndex(2)}
        state={2 === activeIndex}
        textNode={
          <Title>
            Our vision is to{' '}
            <Highlight>cultivate a vibrant and inclusive community</Highlight>{' '}
            that{' '}
            <Highlight>
              shares a deep appreciation for nature, craft, and culture
            </Highlight>
          </Title>
        }
        text=""
      />
      <HiddenAnswer
        name="Initiatives"
        onClick={() => toggleIndex(3)}
        state={3 === activeIndex}
        textNode={
          <Title>
            Discover how our garden is at the forefront of promoting art,
            culture and conservation.
          </Title>
        }
        text=""
      />
      <HiddenAnswer
        name="Near by Places"
        onClick={() => toggleIndex(4)}
        state={4 === activeIndex}
        textNode={
          <Title>
            Witness the historical and cultural grandeur of the city
          </Title>
        }
        text=""
      />
    </TopicsContainer>
  );
};

export default Topics;

const TopicsContainer = tw.div`
    flex flex-col space-y-10 my-24
`;

const Title = tw.span`
    text-tertiary-200 font-serif md:text-lg text-sm w-[95%]
`;

const Highlight = tw.span`
    text-secondary md:text-lg text-sm
`;
