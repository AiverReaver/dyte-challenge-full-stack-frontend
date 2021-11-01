import React from "react";
import { UrlItem } from "./UrlItem";

export const UrlList = ({ shortenUrls }) => {
  return (
    <div style={{ width: "100%" }}>
      {shortenUrls.map(({ shortUrl, visitors, views }) => (
        <UrlItem shorturl={shortUrl} visitor={visitors} views={views} />
      ))}
    </div>
  );
};
