import React, { useCallback } from "react";

import axios from "../axios";
import { useForm } from "../utils/CustomHooks";
import { CommonFields } from "./CommonField";

export const LoginForm = ({ onLoginSuccess }) => {
  const { formState, onChange } = useForm({ username: "", password: "" });

  const onLogin = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        const { data } = await axios.post("login", formState);
        onLoginSuccess(data);
      } catch {}
    },
    [formState, onLoginSuccess]
  );

  const onRegister = useCallback(async () => {
    try {
      await axios.post("register", formState);
    } catch {}
  }, [formState]);

  return (
    <form onSubmit={onLogin}>
      <CommonFields {...formState} onChange={onChange} />
      <input type="submit" value="Login" />
      <input
        style={{ marginLeft: "10px" }}
        type="button"
        value="Register"
        onClick={onRegister}
      />
    </form>
  );
};
