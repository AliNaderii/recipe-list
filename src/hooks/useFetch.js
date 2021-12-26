// tools
import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  // states
  const [ data, setData ] = useState(null);
  const [ error, setError ] = useState(null);
  const [ isPending, setIsPending ] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    // declare fetch function
    const fetchData = async () => {
      setIsPending(true);

      // init fetching proccess
      try {
        const res = await fetch(url, { signal: controller.signal });
        // see if the recived response is ok
        if (!res.ok) {
          throw new Error(res.statusText);
        }

        // set state with response
        const recipes = await res.json();
        setData(recipes);
        setIsPending(false);
        setError(null);
      }

      // catch errors
      catch (err) {
        // see if the fetch request was aborted
        if (err.name === 'AbortError') {
          console.log('The fetch was aborted');
        }
        // if fetch was not aborted and we had a network error
        else {
          setError('Could not fetch the data');
          setIsPending(false);
        }
      }
    };

    // invoke fetch function
    fetchData();

    // return cleanup function
    return () => {
      controller.abort();
    };

  }, [ url ]);


  return { data, error, isPending };
};
