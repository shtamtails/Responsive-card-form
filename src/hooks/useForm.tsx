import React, { useState } from "react";

interface useFormProps {
  initialValues: {
    [key: string]: string;
  };
  validate: {
    [key: string]: (value: string) => string | undefined;
  };
}

interface IErrors {
  [key: string]: string | undefined;
}

export type values = { [key: string]: string };

export const useForm = ({ initialValues, validate }: useFormProps) => {
  const [values, setValues] = useState<{ [key: string]: string }>(initialValues);
  const [errors, setErrors] = useState<{ [key: string]: string | undefined }>({});

  const onSumbit = (e: React.FormEvent<HTMLFormElement>, callback?: (values?: values, errors?: IErrors) => void) => {
    e.preventDefault();
    const errors = Object.keys(validate).reduce<IErrors>((acc, key) => {
      const error = validate[key](values[key]);
      if (error) {
        acc[key] = error;
      }
      return acc;
    }, {});
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      callback && callback(values, errors);
    }
  };

  const getInputProps = (key: string) => {
    return {
      value: values[key],
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setValues({ ...values, [key]: value });
      },
      onBlur: (e: React.FocusEvent<HTMLInputElement>) => {
        const validation = validate[key] && validate[key](values[key]);
        validation && setErrors({ ...errors, [key]: validation });
      },
      onFocus: (e: React.FocusEvent<HTMLInputElement>) => {
        setErrors({ ...errors, [key]: "" });
      },
      error: errors[key],
    };
  };
  return { onSumbit, getInputProps };
};
