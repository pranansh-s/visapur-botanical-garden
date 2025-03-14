import { ButtonHTMLAttributes, memo } from 'react';

import { useTranslation } from 'react-i18next';

import book from '../../../public/icons/book.svg';

import Button from './Button';

const BuyTicket: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = memo(
  props => {
    const { t } = useTranslation();
    return (
      <div className="relative group">
        <Button
          className="px-6 pr-4 py-4 rounded-full"
          variant="base"
          iconSize={16}
          preIconNode={book}
          aria-label="book"
          onClick={() => window.open(t('bookTicket'), '_blank')}
          {...props}
        >
          {t('buyTicket')}
        </Button>
        {props.children}
      </div>
    );
  }
);

BuyTicket.displayName = 'BuyTicket';
export default BuyTicket;
