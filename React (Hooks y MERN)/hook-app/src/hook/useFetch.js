import { useEffect, useState } from 'react';

const localCache = {};

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    const getFetch = async () => {
      if (localCache[url]) {
        console.log('Usando cache');
        setState({
          data: localCache[url],
          isLoading: false,
          hasError: false,
          error: null,
        });

        return;
      }

      setLoadingState();

      const resp = await fetch(url);

      if (!resp.ok) {
        setState({
          data: null,
          isLoading: false,
          hasError: true,
          error: {
            code: resp.status,
            message: resp.statusText,
          },
        });
      }

      const data = await resp.json();
      setState({
        data: data,
        isLoading: false,
        hasError: false,
        error: null,
      });

      // Manejo del Cache
      localCache[url] = data;
    };

    getFetch();
  }, [url]);

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
