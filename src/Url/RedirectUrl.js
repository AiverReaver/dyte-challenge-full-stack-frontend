import React, { useCallback, useEffect, useState } from "react";
import axios from "../axios";
import { useUniqueIndentifier } from "../utils/CustomHooks";

export const RedirectUrl = ({ match: { params } }) => {
  const [show404, setShow404] = useState(false);
  const { isVisited, setVisited } = useUniqueIndentifier(params.shortId);

  const getRedirectUrl = useCallback(async () => {
    try {
      const { data } = await axios.get(params.shortId, {
        params: { isUnique: isVisited ? 0 : 1 },
      });
      setVisited();
      window.location.replace(data);
    } catch {
      setShow404(true);
    }
  }, [params, isVisited, setVisited]);

  useEffect(() => {
    getRedirectUrl();
  }, [getRedirectUrl]);

  return <h1>{show404 ? "404 nothing found" : ""}</h1>;
};
