// tools
import { useEffect, useState } from 'react';

export const useFetch = (url, method = 'GET') => {
  // states
  const [ data, setData ] = useState(null);
  const [ error, setError ] = useState(null);
  const [ isPending, setIsPending ] = useState(false);
  const [ options, setOptions ] = useState(null);

  // a function for creating a post object
  const postData = (postOptions) => {
    setOptions({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postOptions)
    });
  };

  useEffect(() => {
    const controller = new AbortController();

    // declare fetch function
    const fetchData = async (options) => {
      setIsPending(true);

      // init fetching proccess with provided options
      try {
        const res = await fetch(url, { ...options, signal: controller.signal });
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

    // invoke fetch function with defferent conditions
    if (method === 'POST' && options) {
      fetchData(options);
    }
    if (method === 'GET') {
      fetchData();
    }

    // return cleanup function
    return () => {
      controller.abort();
    };

  }, [ url, options, method ]);


  return { data, error, isPending, postData };
};
