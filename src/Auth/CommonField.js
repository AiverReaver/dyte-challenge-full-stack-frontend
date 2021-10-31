import React from "react";

export const CommonFields = ({ username, password, onChange }) => {
  return (
    <>
      <input
        type="text"
        name="username"
        placeholder="Enter Username"
        value={username}
        onChange={onChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={password}
        onChange={onChange}
      />
    </>
  );
};
