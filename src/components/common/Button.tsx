'use client';

import { cn } from '@/utils/cn';
import { VariantProps, cva } from 'class-variance-authority';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { ButtonHTMLAttributes, forwardRef, useCallback } from 'react';

const buttonVariants = cva(
  `font-sans flex items-center text-lg text-center transition-all duration-200 font-bold`,
  {
    variants: {
      variant: {
        base: 'bg-tertiary-100 text-white px-6 py-4 rounded-full hover:bg-tertiary-200',
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
