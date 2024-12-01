import { ButtonHTMLAttributes, memo } from 'react';
import { useRouter } from 'next/navigation';

import book from '../../../public/icons/book.svg';

import { strings } from '@/constants/strings';
import Button from './Button';

const BuyTicket: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = memo(
  props => {
    const router = useRouter();
    return (
      <div className="relative">
        <Button
          className="px-6 pr-4 py-4 rounded-full"
          variant="base"
          iconSize={16}
          preIconNode={book}
          onClick={() => router.push(strings.bookTicket)}
          {...props}
        >
          Buy Ticket
        </Button>
        {props.children}
      </div>
    );
  }
);

BuyTicket.displayName = 'BuyTicket';
export default BuyTicket;
