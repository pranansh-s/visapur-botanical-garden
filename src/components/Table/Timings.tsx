import { memo } from 'react';
import TimeSwitch from './TimeSwitch';
import tw from 'tailwind-styled-components';

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
      <TimeSwitch variant={isActive ? 'morning' : 'disabled'} time={morning} />
      <DayText $isActive={isActive}>{day}</DayText>
      <TimeSwitch variant={isActive ? 'night' : 'disabled'} time={night} />
    </DayContainer>
  );
};

Timings.displayName = 'Timings';
export default Timings;

const DayContainer = tw.div`
    flex items-center justify-between px-36
`;

const DayText = tw.span<{ $isActive: boolean }>`
    ${({ $isActive }) => ($isActive ? 'text-tertiary-300' : 'text-gray-600')}
    font-serif font-bold text-2xl
`;

const TimingsContainer = tw.div`
    flex flex-col space-y-6 pt-12
`;
