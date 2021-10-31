import "./App.css";
import { LoginForm } from "./Auth/LoginForm";
import { useCallback, useEffect, useState } from "react";
import axios, { updateTokenHeadersInAxiosInstance } from "./axios";
import { UrlList } from "./Url/UrlList";
import { Shorten } from "./Url/Shorten";

function App() {
  const [loggedInUser, setLoggedinUser] = useState(null);
  const [shortenUrls, setShortenurls] = useState([]);

  const getAllUrls = useCallback(async () => {
    try {
      const { data } = await axios.get("url");

      setShortenurls(data);
    } catch {}
  }, []);

  const onLogoutclick = useCallback(() => {
    setLoggedinUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("username");
  }, []);

  useEffect(() => {
    getAllUrls();
  }, [getAllUrls]);

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
        <div style={{ width: "100%" }}>
          welcome {loggedInUser?.username}
          <Shorten
            onShortenurl={(url) =>
              setShortenurls((prevState) => [...prevState, url])
            }
          />
          <UrlList shortenUrls={shortenUrls} />
        </div>
      ) : (
        <LoginForm onLoginSuccess={setLoggedinUser} />
      )}
    </div>
  );
}

export default App;
