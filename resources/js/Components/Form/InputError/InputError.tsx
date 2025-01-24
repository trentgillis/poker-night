interface InputErrorProps {
  error: string | undefined;
}

export default function InputError({ error }: InputErrorProps) {
  if (!error) return null;

  return <p className="h-2 text-xs text-red-400">{error ?? ''}</p>;
}
