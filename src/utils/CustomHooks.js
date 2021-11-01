import { useCallback, useState } from "react";

export const useForm = (initialState) => {
  const [formState, setFormState] = useState(initialState);

  const onChange = useCallback((event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  }, []);

  return { formState, onChange };
};

export const useUniqueIndentifier = (shortId) => {
  const vistedUrls = JSON.parse(localStorage.getItem("visitedUrl") || "{}");

  const setVisited = useCallback(() => {
    localStorage.setItem(
      "visitedUrl",
      JSON.stringify({ ...vistedUrls, [shortId]: true })
    );
  }, [shortId, vistedUrls]);

  return { isVisited: vistedUrls[shortId] || false, setVisited };
};
