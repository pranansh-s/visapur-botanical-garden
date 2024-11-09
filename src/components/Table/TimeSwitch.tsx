import React, { memo } from 'react';
import tw from 'tailwind-styled-components';

interface TimeSwitchProps {
  time?: string;
  variant: 'morning' | 'night' | 'disabled';
}

const TimeSwitch: React.FC<TimeSwitchProps> = memo(({ time, variant }) => {
  return (
    <SwitchContainer $variant={variant}>
      {variant === 'morning' && <Circle $variant={variant} />}
      {variant !== 'disabled' && <TimeText>{time}</TimeText>}
      {variant !== 'morning' && <Circle $variant={variant} />}
    </SwitchContainer>
  );
});

TimeSwitch.displayName = 'TimeSwitch';
export default TimeSwitch;

const SwitchContainer = tw.div<{ $variant: string }>`
  flex items-center w-44 h-16 rounded-full
  ${({ $variant }) =>
    $variant === 'morning'
      ? 'justify-start pl-2 bg-yellow-300 text-yellow-900'
      : $variant === 'night'
        ? 'justify-between pr-2 bg-blue-900 text-blue-100'
        : 'justify-between pr-2 bg-gray-500 text-gray-400'}
`;

const TimeText = tw.span`
  mx-auto text-xl font-bold font-serif
`;

const Circle = tw.div<{ $variant: string }>`
  w-12 h-12 rounded-full ring-[0.5rem]
  ${({ $variant }) =>
    $variant === 'morning' &&
    'bg-gradient-to-r from-orange-400 to-yellow-500 ring-blue-400'}
  ${({ $variant }) =>
    $variant === 'night' &&
    'bg-gradient-to-r from-blue-400 to-blue-500 ring-blue-600'}
  ${({ $variant }) => $variant === 'disabled' && 'bg-gray-400 ring-gray-300'}
`;
