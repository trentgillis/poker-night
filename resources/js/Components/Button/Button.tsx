import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva('rounded px-3 py-2 text-center text-sm', {
  variants: {
    variant: {
      primary: 'bg-zinc-100 text-zinc-950',
      outlined: 'border border-zinc-400/50 text-zinc-100',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export default function Button({
  className,
  variant,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={twMerge(buttonVariants({ variant, className }))}
      {...rest}
    >
      {children}
    </button>
  );
}
