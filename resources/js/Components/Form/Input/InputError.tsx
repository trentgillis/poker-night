import { TriangleAlert } from 'lucide-react';

interface InputErrorProps {
  error: string | undefined;
}

export default function InputError({ error }: InputErrorProps) {
  if (!error) return null;

  return (
    <div className="mt-1 flex items-center gap-1">
      <TriangleAlert className="stroke-red-400" size={16} />
      <p className="line h-2 text-xs/2 text-red-400">{error ?? ''}</p>
    </div>
  );
}
