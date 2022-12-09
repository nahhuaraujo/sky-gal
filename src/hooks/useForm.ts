import { useState } from 'react';

export const useForm = (initialFormValues: any) => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const clearFormValues = () => {
    setFormValues(initialFormValues);
  };

  return { formValues, changeHandler, clearFormValues };
};
