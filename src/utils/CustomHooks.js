import { useCallback, useState } from "react";

export const useForm = () => {
  const [formState, setFormState] = useState({ username: "", password: "" });

  const onChange = useCallback((event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  }, []);

  return { formState, onChange };
};
