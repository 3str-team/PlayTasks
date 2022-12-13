import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getTasksData = async () => {
      console.log(document.referrer, "edwefw");
      const resp = await axios({
        url,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Origin: "*",
        },
      });

      console.log(resp.data);

      setResponse(resp.data);
      setIsLoading(false);
    };

    getTasksData();
  }, [url]);

  return [response, isLoading];
};
