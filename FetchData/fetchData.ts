import {useEffect, useState} from 'react';

export type TDataFetched<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};
export function useFetchData<T>(
  url: string,
  options?: Record<string, any>,
): TDataFetched<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const params = new URLSearchParams(options);
        const completeURL = params.toString()
          ? `${url}?${params.toString()}`
          : `${url}`;
        const response = await fetch(completeURL);

        if (response.ok) {
          const res = await response.json();
          setData(res);
        } else {
          setError('Failed to fetch data from the API');
        }
      } catch (err) {
        setError('An error occurred while fetching data from the API');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url, options]);

  return {data, loading, error};
}
