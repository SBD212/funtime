import { useState, createContext } from "react";

export const FormContext = createContext();

export default function FormProvider({ children }) {
  const [choices, setChoices] = useState({});

  const setFormValues = (values) => {
    setChoices((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };

  return (
    <FormContext.Provider value={{ choices, setFormValues }}>
      {children}
    </FormContext.Provider>
  );
}
