import React from 'react';
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
} from 'react-hook-form';

interface FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  id: string;
  name: TName;
  errors?: Record<string, string>;
}

export const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

export default function FormField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName> & { errors?: Record<string, string> }) {
  const id = React.useId();

  return (
    <FormFieldContext value={{ id, name: props.name, errors: props.errors }}>
      <Controller {...props} />
    </FormFieldContext>
  );
}
