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
        text="Nestled near the bustling Chandrapur Ballarpur National Highway No. 930, the Shradheya Shri Atal Bihari Vajpayee Botanical Garden, Visapur, unfolds as a serene oasis of nature and biodiversity. Spanning an impressive 108 hectares, this botanical garden stands as a beacon of biodiversity conservation and environmental education, drawing visitors from near and far."
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
        text="Through our commitment to ethical sourcing, fair trade practices, and collaborative partnerships with artisans, we aim to create sustainable opportunities that enable communities to thrive economically while preserving their traditional crafts and cultural heritage. By supporting local artisans, we not only promote economic empowerment but also contribute to the preservation of centuries-old traditions, fostering pride and sustainability within communities."
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
        text="We aspire to create a platform where individuals from all walks of life can come together to learn, inspire, and celebrate the rich story  of global heritage. Through immersive experiences, educational initiatives, and interactive events, we envision fostering a deeper connection to the natural world and diverse cultural traditions. By building bridges between people and cultures, we aim to create a world where the beauty of artisanal craftsmanship and cultural diversity is cherished, respected, and celebrated by all"
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
    flex flex-col space-y-10
`;

const Title = tw.span`
    text-tertiary-200 font-serif md:text-lg text-sm w-[95%]
`;

const Highlight = tw.span`
    text-secondary md:text-lg text-sm
`;
