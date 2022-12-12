import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getTasksData = () => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", url);

    xhr.send();

    xhr.onload = () => {
      // setTimeout(() => {
      setResponse(JSON.parse(xhr.response));
      setIsLoading(false);
      // }, 1000);
    };
  };

  useEffect(() => {
    getTasksData();
  }, []);

  return [response, isLoading];
};
