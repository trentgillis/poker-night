import React from 'react';

import { FormFieldContext } from '@/components/Form/FormField/FormField';

export function useFormField(): { id: string; error: string | undefined } {
  const field = React.useContext(FormFieldContext);

  return {
    id: `${field.id}-field-id`,
    error: field.errors?.[field.name],
  };
}
