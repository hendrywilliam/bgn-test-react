import { useState, useEffect } from "react";
import axios from "axios";

export const useSearch = (q, filter) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const controller = new AbortController();

  useEffect(() => {
    if (!q) {
      setData([]);
      return;
    }
    setLoading(true);
    const timerSearch = setTimeout(() => {
      axios
        .get(`https://swapi.dev/api/${filter}/?search=${q}`, {
          signal: controller.signal,
        })
        .then((result) => {
          setData(result.data.results);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    }, 2000);
    return () => {
      clearTimeout(timerSearch);
      controller.abort();
    };
  }, [q, filter]);

  return { loading, data, error };
};
