import axios from "../axios";
import React, { useCallback, useState } from "react";
import classes from "./Shorten.module.css";

export const Shorten = ({ onShortenurl }) => {
  const [longUrl, setLongUrl] = useState("");

  const shortenUrl = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        const { data } = await axios.post("url/shorten", {
          actualUrl: longUrl,
        });
        onShortenurl(data);
      } catch {}
    },
    [longUrl, onShortenurl]
  );

  return (
    <div>
      <form className="form-inline" onSubmit={shortenUrl}>
        <input
          type="text"
          placeholder="Enter your Url"
          value={longUrl}
          onChange={(event) => setLongUrl(event.target.value)}
          className={classes.text}
        />
        <input type="submit" value="Shorten" className="btn" />
      </form>
    </div>
  );
};
