import { createContext, useState } from "react";

const FormContext = createContext();

function FormProvider({ children }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <FormContext.Provider value={{ title, setTitle, content, setContent }}>
      {children}
    </FormContext.Provider>
  );
}

export { FormContext, FormProvider };
