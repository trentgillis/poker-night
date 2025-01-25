import React from 'react';

import { FormFieldContext } from '@/components/Form/FormField/FormField';

export function useFormField() {
  const field = React.useContext(FormFieldContext);

  return {
    id: `${field.id}-field-id`,
  };
}
