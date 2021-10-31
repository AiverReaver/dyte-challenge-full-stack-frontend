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
      <form className={classes.form} onSubmit={shortenUrl}>
        <input
          type="text"
          placeholder="Enter your Url"
          value={longUrl}
          onChange={(event) => setLongUrl(event.target.value)}
        />
        <input type="submit" value="Shorten" />
      </form>
    </div>
  );
};
