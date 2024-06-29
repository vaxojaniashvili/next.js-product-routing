import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);
        const res = await fetch(url);
        setData(await res.json());
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, loader };
};

export default useFetch;
