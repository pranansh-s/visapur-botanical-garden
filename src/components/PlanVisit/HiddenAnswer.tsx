import { memo } from 'react';

import { IHiddenAnswer } from '@/types';
import tw from 'tailwind-styled-components';

import plus from '../../../public/plus.svg';

import Button from '../common/Button';

interface HiddenAnswerProps extends IHiddenAnswer {
  state: boolean;
  onClick: any;
}

const HiddenAnswer: React.FC<HiddenAnswerProps> = memo(
  ({ name, textNode, text, onClick, state }) => {
    return (
      <HiddenAnswerContainer>
        {name && (
          <h5 className="text-tertiary-300 font-bold font-serif text-4xl">
            {name}
          </h5>
        )}
        <div className="flex justify-between items-end">
          {textNode}{' '}
          <Button
            iconSize={20}
            className={`-translate-y-0 ${state ? '-rotate-90' : 'rotate-0'} transition-all duration-200`}
            onClick={onClick}
            preIconNode={plus}
          />
        </div>
        <p
          className={`text-tertiary-300 ${state ? 'h-72 !mt-6' : 'h-0'} transition-all duration-300`}
        >
          {text}
        </p>
      </HiddenAnswerContainer>
    );
  }
);

HiddenAnswer.displayName = 'HiddenAnswer';
export default HiddenAnswer;

const HiddenAnswerContainer = tw.div`
    border-b-[1px] border-[#EDA0174D] space-y-3 flex flex-col p-1 overflow-hidden
`;
