import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
  'rounded-sm px-3 py-2 text-center text-sm font-medium transition-colors ring-offset-background focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-2 hover:cursor-pointer',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:bg-primary-muted',
        secondary: 'bg-white text-background hover:bg-white-muted',
        outlined: 'border border-border text-white hover:bg-zinc-900',
        link: 'text-left text-white font-medium',
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
