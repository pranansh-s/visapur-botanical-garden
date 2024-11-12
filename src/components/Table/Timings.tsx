import { memo } from 'react';

import tw from 'tailwind-styled-components';

import TimeSwitch from './TimeSwitch';

const Timings: React.FC = memo(() => {
  return (
    <TimingsContainer>
      {renderDay(true, '10:00', '06:00', 'Monday')}
      {renderDay(false, '10:00', '06:00', 'Tuesday')}
      {renderDay(true, '10:00', '06:00', 'Wednesday')}
      {renderDay(true, '10:00', '06:00', 'Thursday')}
      {renderDay(true, '10:00', '06:00', 'Friday')}
      {renderDay(true, '10:00', '06:00', 'Saturday')}
      {renderDay(true, '10:00', '06:00', 'Sunday')}
    </TimingsContainer>
  );
});

const renderDay = (
  isActive: boolean,
  morning: string,
  night: string,
  day: string
) => {
  return (
    <DayContainer>
      <TimeSwitch variant="morning" disabled={!isActive} time={morning} />
      <DayText $isActive={isActive}>{day}</DayText>
      <TimeSwitch variant="night" disabled={!isActive} time={night} />
    </DayContainer>
  );
};

Timings.displayName = 'Timings';
export default Timings;

const DayContainer = tw.div`
  flex items-center justify-between sm:px-36 px-16
`;

const DayText = tw.span<{ $isActive: boolean }>`
  ${({ $isActive }) => ($isActive ? 'text-tertiary-300' : 'text-gray-600')}
  font-serif font-bold text-2xl
`;

const TimingsContainer = tw.div`
  flex flex-col space-y-6 pt-12
`;
