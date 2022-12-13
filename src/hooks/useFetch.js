import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getTasksData = () => {
      const xhr = new XMLHttpRequest();

      xhr.open("GET", url);

      xhr.send();

      xhr.onload = () => {
        setResponse(JSON.parse(xhr.response));
        setIsLoading(false);
      };
    };

    getTasksData();
  }, [url]);

  return [response, isLoading];
};
