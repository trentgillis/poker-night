import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
  'rounded px-3 py-2 text-center text-sm transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-zinc-100 text-zinc-950 hover:bg-zinc-200',
        outlined: 'border border-zinc-400/50 text-zinc-100 hover:bg-zinc-900',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export default function Button({
  className,
  variant,
  asChild = false,
  children,
  ...rest
}: ButtonProps) {
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      className={twMerge(buttonVariants({ variant, className }))}
      {...rest}
    >
      {children}
    </Component>
  );
}
