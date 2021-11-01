import React from "react";
import classes from "./UrlItem.module.css";

export const UrlItem = ({
  shorturl,
  visitor,
  views,
  lastDevice,
  lastBrowser,
  onDeleteItem,
  onUpdateClick,
}) => {
  return (
    <div className="url-container">
      <div>
        <a href={`http://${shorturl}`} target="_blank" rel="noreferrer">
          {shorturl}
        </a>
      </div>
      <div>{visitor}</div>
      <div>{views}</div>
      <div>{lastDevice}</div>
      <div>{lastBrowser}</div>
      <button className={classes.delete__btn} onClick={onDeleteItem}>
        delete
      </button>
      <button className={classes.update__btn} onClick={onUpdateClick}>
        update
      </button>
    </div>
  );
};
