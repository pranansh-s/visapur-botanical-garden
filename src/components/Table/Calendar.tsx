import {
  format,
  getDay,
  getDaysInMonth,
  isToday,
  startOfMonth,
} from 'date-fns';
import React, { memo } from 'react';
import tw from 'tailwind-styled-components';

interface CalendarProps {
  year: number;
  month: number;
  disabledDates?: number[];
}

const Calendar: React.FC<CalendarProps> = memo(
  ({ year, month, disabledDates = [] }) => {
    const daysInMonth = getDaysInMonth(new Date(year, month));
    const startDay = getDay(startOfMonth(new Date(year, month)));
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    return (
      <CalendarContainer>
        <Title>{format(new Date(year, month), 'MMMM yyyy')}</Title>
        <Grid>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <DayHeader key={day}>{day}</DayHeader>
          ))}

          {Array.from({ length: startDay }).map((_, index) => (
            <div key={index} />
          ))}

          {daysArray.map((day, index) => {
            const isDisabled = disabledDates.includes(day);
            const date = new Date(year, month, day);
            const isCurrentDay = isToday(date);

            return (
              <React.Fragment key={day}>
                {(index + startDay) % 7 === 0 && <Seperator />}
                <DayContainer $disabled={isDisabled} $current={isCurrentDay}>
                  {day}
                </DayContainer>
              </React.Fragment>
            );
          })}
        </Grid>
      </CalendarContainer>
    );
  }
);

Calendar.displayName = 'Calendar';
export default Calendar;

const CalendarContainer = tw.div`
  sm:px-36 px-16 font-sans font-bold
`;

const Title = tw.h4`
  text-5xl text-[#711F00] mt-6 py-6 border-b-[1px] border-tertiary-200
`;

const Grid = tw.div`
  grid grid-cols-7 gap-y-3
`;

const DayHeader = tw.span`
  text-[#711F00] text-3xl py-6 pl-2 border-b-[1px] border-tertiary-200
`;

const DayContainer = tw.div<{ $disabled: boolean; $current: boolean }>`
  h-16 w-16 text-3xl font-black flex items-center justify-center mr-auto rounded-full
  ${({ $disabled }) => ($disabled ? 'text-gray-500' : 'text-black')}
  ${({ $current }) => $current && 'text-tertiary-200 outline'}
`;

const Seperator = tw.div`
  col-span-7 border-t-[1px] border-tertiary-200
`;
