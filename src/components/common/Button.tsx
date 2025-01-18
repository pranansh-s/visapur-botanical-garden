'use client';

import React, { ButtonHTMLAttributes, forwardRef, useCallback } from 'react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/cn';

const buttonVariants = cva(
  `font-sans flex items-center text-lg text-center transition-all duration-200 font-bold rounded-full`,
  {
    variants: {
      variant: {
        base: 'bg-tertiary-100 text-white px-6 py-4 hover:bg-tertiary-200',
        light:
          'bg-white rounded-full px-6 py-4 outline -outline-offset-4 text-tertiary-200 hover:brightness-90 outline-tertiary-300',
      },
      state: {
        disabled: '!opacity-[0.4] cursor-not-allowed',
      },
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  ref?: React.Ref<HTMLButtonElement>;

  preIconNode?: StaticImport;
  postIconNode?: StaticImport;
  link?: string;
  iconSize?: number;
  disabled?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type,
      preIconNode,
      postIconNode,
      link,
      iconSize,
      disabled,
      variant,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const router = useRouter();
    const getIconNode = (iconNode?: StaticImport) => {
      return (
        iconNode && (
          <Image
            width={iconSize ?? 24}
            height={iconSize ?? 24}
            src={iconNode}
            alt=""
          />
        )
      );
    };

    const handleClick = useCallback(() => {
      if (link) {
        router.push(link);
      } else {
        props.onClick;
      }
    }, [link, props.onClick, router]);

    return (
      <button
        type={type}
        disabled={disabled}
        onClick={handleClick}
        ref={ref}
        className={cn(
          buttonVariants({
            variant,
            state: disabled ? 'disabled' : null,
          }),
          className
        )}
        {...props}
      >
        {getIconNode(preIconNode)}
        {children && <>&nbsp;&nbsp;{children}&nbsp;&nbsp;</>}
        {getIconNode(postIconNode)}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
