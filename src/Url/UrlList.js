import React, { useCallback, useState } from "react";
import axios from "../axios";
import { UpdateUrlForm } from "./UpdateUrlForm";
import { UrlItem } from "./UrlItem";

export const UrlList = ({ shortenUrls, setShortenurls }) => {
  const [urlToUpdate, setUrlToUpdate] = useState(-1);

  const deleteShortenUrl = useCallback(
    async (shortId) => {
      try {
        await axios.delete(`url/${shortId}`);

        setShortenurls((preState) =>
          preState.filter((url) => url.shortId !== shortId)
        );
      } catch {}
    },
    [setShortenurls]
  );

  const updateShortenUrl = useCallback(
    async (id, values) => {
      try {
        const { newShortId, newActualUrl } = values;

        await axios.patch(`url/${id}`, values);

        setShortenurls((preState) =>
          preState.map((url) => {
            if (id === url.id) {
              url.shortId = newShortId;
              url.shortUrl = url.shortUrl.split("/")[0] + "/" + newShortId;
              url.actualUrl = newActualUrl;
            }
            return url;
          })
        );

        setUrlToUpdate(-1);
      } catch {}
    },
    [setShortenurls]
  );

  return (
    <div style={{ width: "100%" }}>
      <div className="url-container">
        <strong>Url</strong>
        <strong>Unique view</strong>
        <strong>Views</strong>
        <strong>Platform</strong>
        <strong>Browser</strong>
        <strong>Delete</strong>
        <strong>Update</strong>
      </div>
      {shortenUrls.map(
        ({
          shortUrl,
          visitors,
          views,
          shortId,
          id,
          actualUrl,
          lastDevice,
          lastBrowser,
        }) =>
          urlToUpdate === id ? (
            <UpdateUrlForm
              oldShortId={shortId}
              oldActualurl={actualUrl}
              onUpdateItem={(val) => updateShortenUrl(id, val)}
              key={id}
            />
          ) : (
            <UrlItem
              key={id}
              shortId={shortId}
              shorturl={shortUrl}
              visitor={visitors}
              views={views}
              lastBrowser={lastBrowser}
              lastDevice={lastDevice}
              onDeleteItem={() => deleteShortenUrl(shortId)}
              onUpdateClick={() => setUrlToUpdate(id)}
            />
          )
      )}
    </div>
  );
};
