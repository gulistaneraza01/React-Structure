import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      setIsLoading(true);
      try {
        const { data } = await axios(url, { signal: controller.signal });
        setData(data);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
    return () => {
      controller.abort();
    };
  }, [url]);
  return { data, isLoading, isError };
}

export default useFetch;
