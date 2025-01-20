import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { twMerge } from 'tailwind-merge';

interface AvatarProps {
  imgSrc: string;
  fallback: string;
  className?: string;
}

export default function Avatar({
  imgSrc,
  fallback,
  className = '',
}: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      className={twMerge(
        'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
        className,
      )}
    >
      <AvatarPrimitive.Image
        className="aspect-square h-full w-full"
        src={imgSrc}
      />
      <AvatarPrimitive.AvatarFallback className="flex h-full w-full items-center justify-center rounded-full bg-zinc-100 text-[10px] text-zinc-950">
        {fallback.toUpperCase()}
      </AvatarPrimitive.AvatarFallback>
    </AvatarPrimitive.Root>
  );
}
