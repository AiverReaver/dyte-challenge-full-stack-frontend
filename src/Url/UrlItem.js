import React from "react";

export const UrlItem = ({ shorturl, visitor, views }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-around",
      }}
    >
      <div>
        <a href={`http://${shorturl}`} target="_blank" rel="noreferrer">
          {shorturl}
        </a>
      </div>
      <div>{visitor}</div>
      <div>{views}</div>
    </div>
  );
};
