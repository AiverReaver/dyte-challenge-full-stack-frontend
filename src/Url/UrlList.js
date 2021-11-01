import React, { useCallback } from "react";
import axios from "../axios";
import { UrlItem } from "./UrlItem";

export const UrlList = ({ shortenUrls, setShortenurls }) => {
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

  return (
    <div style={{ width: "100%" }}>
      {shortenUrls.map(({ shortUrl, visitors, views, shortId }) => (
        <UrlItem
          shortId={shortId}
          shorturl={shortUrl}
          visitor={visitors}
          views={views}
          onDeleteItem={() => deleteShortenUrl(shortId)}
        />
      ))}
    </div>
  );
};
