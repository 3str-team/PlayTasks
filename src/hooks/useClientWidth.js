import { useEffect, useState } from "react";

export const useClientWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
};
