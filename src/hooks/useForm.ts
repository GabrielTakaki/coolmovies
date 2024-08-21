import { useState, useCallback } from "react";

function useForm<T>({ initialValues }: { initialValues: T }) {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = useCallback((path: string, value: unknown) => {
    setValues((prevValues) => ({
      ...prevValues,
      [path]: value,
    }));
  }, []);

  const resetForm = useCallback(() => {
    setValues(initialValues);
  }, [initialValues]);

  return {
    values,
    handleChange,
    resetForm,
    setValues,
  };
}

export default useForm;
