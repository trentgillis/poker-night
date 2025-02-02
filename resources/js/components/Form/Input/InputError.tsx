import { TriangleAlert } from 'lucide-react';

interface InputErrorProps {
  error: string | undefined;
}

export default function InputError({ error }: InputErrorProps) {
  if (!error) return null;

  return (
    <div className="mt-1 flex items-center gap-1">
      <TriangleAlert className="stroke-error" size={16} />
      <p className="line text-error h-2 text-xs/2">{error ?? ''}</p>
    </div>
  );
}
