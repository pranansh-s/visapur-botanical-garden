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
        faq
        textNode={<Title>Garden&apos;s FAQ</Title>}
        text='This e-ticket is valid only for the number of persons in total and other permissions specified herein.
              This e-ticket has to be carried by the visitor to get the entry in the garden. Please take care of your ticket and QR.
              Without a QR code, you can not enter.
              Please keep the ticket safely till the end of the trip.
              Please show the ticket at the time of checking.
              Online Ticket Facility opens everyday from 4:30am and remains open till 9:00pm, everyday.
              Please check your ticket thoroughly. If you believe there is any mistake, we request you to read the "Privacy Policy, Terms and Conditions."
              If you have booked multiple tickets (more than 1), via online/ offline counter, you will still recieve only one QR code. Therefore, only one QR is sufficient for all and you do not need to carry/ scan multiple QR codes.
              One ticket is valid for a "single scan". Therefore, you cannot use the same QR code again.
              Please come in a queue before gatekeeper scans the QR.
              Please take care of all your belongings.
              Please keep the area clean. A spot fine of INR 500 will be imposed for spitting and throwing waste(whatsoever)
              Consuming alcohol in the premises is a "punishable" offense.
              Bringing weapons and hazardous substances is a "punishable" offense.'
      />
      <HiddenAnswer
        onClick={() => toggleIndex(1)}
        state={1 === activeIndex}
        faq
        textNode={<Title>Visapur Garden Service Rules & Regulations</Title>}
        text="The Botanical Garden is a place for teaching, research and plant species conservation. It is also a place of rest and recreation. To keep it this way, we kindly ask you to observe the following: 
              - Do not touch or consume plants. Certain plants in the Botanical Garden are poisonous or prickly. 
              - As parents or guardians, keep an eye on your children (the Garden is not a playground: no running, no hide-and-seek and the like). 
              - Picking, damaging, removing plants, plant parts, fruits or seeds is prohibited. 
              - Catching or releasing animals is prohibited. 
              - Entering planted areas, climbing trees, walls or rocks is prohibited. 
              - Bringing pets is prohibited. Assistance dogs are exempt. 
              - Bicycles and skateboards may not be brought into the garden. 
              - Filming or photography for commercial purposes is only allowed with written permission from the garden management. 
              - Photography for private purposes is allowed. 
              - Begging, busking, and art performances are prohibited. 
              - Please dispose of waste in the trash cans provided. 
              - Smoking is prohibited in the greenhouses and buildings. 
              - University management may ban individuals who repeatedly violate garden order. 
              - Garden staff is entitled to expel persons who violate the garden rules or disturb the peace in the garden and/or report them to the police. "
      />
      <HiddenAnswer
        onClick={() => toggleIndex(2)}
        state={2 === activeIndex}
        faq
        textNode={<Title>Garden&apos;s Photography Guidelines</Title>}
        text="Photographs are a wonderful way to remember your visit to the Gardens. We encourage you to take keepsake photos for personal use. To ensure a positive experience for all our visitors, please be aware of the following rules and guidelines established by the Shradheya Shri Atal Bihari Vajpayee Botanical Garden.

              The Gardens does not take reservations for wedding and portrait photo sessions.
              Photography equipment must be limited to phone camera only. Tripods, reflectors, and stand-alone flashes are prohibited.
              Props including furniture, helium balloons, and confetti are prohibited. Pets are also not allowed in the Gardens.
              Wardrobe changes are not allowed in the Gardens or our facilities, restrooms, or parking lot.
              Please do not sit or walk in any planted, mulched, or wooded area. Always stay on paths and turf areas.
              Please do not injure, disturb, damage, deface, or remove any plant, garden feature, rock, artwork, bird, animal, insect, or structure for any reason. 
              Please do not climb up, walk on, or otherwise abuse trees, shrubs, plants, fences, walls, boulders, or other garden features.
              Please do not play any audio equipment such as radios, CD, DVD, or MP3 players out loud.
              Please do not solicit, except with written permission from the Birmingham Park & Recreation Board.

              Friendly Reminders
              Please be courteous and do not block pathways or other access areas in any way while capturing your keepsake photos. Remember that the Gardens is a public place where visitors are welcome in all public areas, and that regular business continues during normal operating hours. Be sure to lock your vehicle and avoid leaving items of value in your car during your visit.
              Thank you for choosing the Gardens for your wedding, family, and individual portraits!"
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
