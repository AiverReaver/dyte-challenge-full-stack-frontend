import "./App.css";
import { LoginForm } from "./Auth/LoginForm";
import { useCallback, useEffect, useState } from "react";
import { updateTokenHeadersInAxiosInstance } from "./axios";

function App() {
  const [loggedInUser, setLoggedinUser] = useState(null);

  const onLogoutclick = useCallback(() => {
    setLoggedinUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("username");
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const refresh_token = localStorage.getItem("refreshToken");
    const username = localStorage.getItem("username");

    if (token && refresh_token && username) {
      setLoggedinUser({ token, refresh_token, username });
    }
  }, []);

  useEffect(() => {
    const { token, refresh_token, username } = loggedInUser || {};

    if (token && refresh_token) {
      updateTokenHeadersInAxiosInstance(token, refresh_token);
      localStorage.setItem("token", token);
      localStorage.setItem("refreshToken", refresh_token);
      localStorage.setItem("username", username);
    }
  }, [loggedInUser]);

  return (
    <div className="App">
      <button className="logout-btn" onClick={onLogoutclick}>
        Logout
      </button>
      {loggedInUser ? (
        <div>welcome {loggedInUser?.username}</div>
      ) : (
        <LoginForm onLoginSuccess={setLoggedinUser} />
      )}
    </div>
  );
}

export default App;
