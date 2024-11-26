'use client';

import { memo } from 'react';

import useToggleIndex from '@/hooks/useToggleIndex';
import tw from 'tailwind-styled-components';

import Heading from '../common/Heading';
import HiddenAnswer from './HiddenAnswer';

const FAQs: React.FC = memo(() => {
  const { activeIndex, toggleIndex } = useToggleIndex();
  return (
    <FAQsContainer id="faqs">
      <Heading name="FAQs" />
      <HiddenAnswer
        onClick={() => toggleIndex(0)}
        state={0 === activeIndex}
        textNode={<Title>Garden&apos;s FAQ</Title>}
        text='This e-ticket is valid only for the number of persons in total and other permissions specified herein.\n
              This e-ticket has to be carried by the visitor to get the entry in the garden. Please take care of your ticket and QR.\n
              Without a QR code, you can not enter.\n
              Please keep the ticket safely till the end of the trip.\n
              Please show the ticket at the time of checking.\n
              Online Ticket Facility opens everyday from 4:30am and remains open till 9:00pm, everyday.\n
              Please check your ticket thoroughly. If you believe there is any mistake, we request you to read the "Privacy Policy, Terms and Conditions."\n
              If you have booked multiple tickets (more than 1), via online/ offline counter, you will still recieve only one QR code. Therefore, only one QR is sufficient for all and you do not need to carry/ scan multiple QR codes.\n
              One ticket is valid for a "single scan". Therefore, you cannot use the same QR code again.\n
              Please come in a queue before gatekeeper scans the QR.\n
              Please take care of all your belongings.\n
              Please keep the area clean. A spot fine of INR 500 will be imposed for spitting and throwing waste(whatsoever)\n
              Consuming alcohol in the premises is a "punishable" offense.\n
              Bringing weapons and hazardous substances is a "punishable" offense.'
      />
      <HiddenAnswer
        onClick={() => toggleIndex(1)}
        state={1 === activeIndex}
        textNode={<Title>Visapur Garden Service Rules & Regulations</Title>}
        text="The Botanical Garden is a place for teaching, research and plant species conservation. It is also a place of rest and recreation. To keep it this way, we kindly ask you to observe the following: \n
              - Do not touch or consume plants. Certain plants in the Botanical Garden are poisonous or prickly. \n
              - As parents or guardians, keep an eye on your children (the Garden is not a playground: no running, no hide-and-seek and the like). \n
              - Picking, damaging, removing plants, plant parts, fruits or seeds is prohibited. \n
              - Catching or releasing animals is prohibited. \n
              - Entering planted areas, climbing trees, walls or rocks is prohibited. \n
              - Bringing pets is prohibited. Assistance dogs are exempt. \n
              - Bicycles and skateboards may not be brought into the garden. \n
              - Filming or photography for commercial purposes is only allowed with written permission from the garden management. \n
              - Photography for private purposes is allowed. \n
              - Begging, busking, and art performances are prohibited. \n
              - Please dispose of waste in the trash cans provided. \n
              - Smoking is prohibited in the greenhouses and buildings. \n
              - University management may ban individuals who repeatedly violate garden order. \n
              - Garden staff is entitled to expel persons who violate the garden rules or disturb the peace in the garden and/or report them to the police. "
      />
      <HiddenAnswer
        onClick={() => toggleIndex(2)}
        state={2 === activeIndex}
        textNode={<Title>Garden&apos;s Photography Guidelines</Title>}
        text="Photographs are a wonderful way to remember your visit to the Gardens. We encourage you to take keepsake photos for personal use. To ensure a positive experience for all our visitors, please be aware of the following rules and guidelines established by the Shradheya Shri Atal Bihari Vajpayee Botanical Garden.\n
              The Gardens does not take reservations for wedding and portrait photo sessions.\n
              Photography equipment must be limited to phone camera only. Tripods, reflectors, and stand-alone flashes are prohibited.\n
              Props including furniture, helium balloons, and confetti are prohibited. Pets are also not allowed in the Gardens.\n
              Wardrobe changes are not allowed in the Gardens or our facilities, restrooms, or parking lot.\n
              Please do not sit or walk in any planted, mulched, or wooded area. Always stay on paths and turf areas.\n
              Please do not injure, disturb, damage, deface, or remove any plant, garden feature, rock, artwork, bird, animal, insect, or structure for any reason.\n
              Please do not climb up, walk on, or otherwise abuse trees, shrubs, plants, fences, walls, boulders, or other garden features.\n
              Please do not play any audio equipment such as radios, CD, DVD, or MP3 players out loud.\n
              Please do not solicit, except with written permission from the Birmingham Park & Recreation Board.\n

              Friendly Reminders\n
              Please be courteous and do not block pathways or other access areas in any way while capturing your keepsake photos. Remember that the Gardens is a public place where visitors are welcome in all public areas, and that regular business continues during normal operating hours. Be sure to lock your vehicle and avoid leaving items of value in your car during your visit.\n
              Thank you for choosing the Gardens for your wedding, family, and individual portraits!"
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
