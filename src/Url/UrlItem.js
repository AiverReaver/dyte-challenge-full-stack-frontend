import React from "react";

export const UrlItem = ({ shorturl, visitor, views, onDeleteItem }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto auto auto",
        width: "100%",
        justifyContent: "space-around",
        margin: "10px",
      }}
    >
      <div>
        <a href={`http://${shorturl}`} target="_blank" rel="noreferrer">
          {shorturl}
        </a>
      </div>
      <div>{visitor}</div>
      <div>{views}</div>
      <button
        style={{ backgroundColor: "red", borderColor: "red" }}
        onClick={onDeleteItem}
      >
        delete
      </button>
    </div>
  );
};
