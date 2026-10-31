import { useEffect, useState } from "react";

// Reusable fetching logic: data + loading + error, re-runs when `url` changes.
function useNews(url) {
  const [state, setState] = useState({ data: null, loading: true, error: null });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    setState({ data: null, loading: true, error: null }); // new request clears old error

    fetch(url, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`Request failed (${response.status})`);
        return response.json();
      })
      .then((data) => setState({ data, loading: false, error: null }))
      .catch((err) => {
        if (err.name !== "AbortError") {
          setState({ data: null, loading: false, error: err.message });
        }
      });

    return () => controller.abort(); // ignore stale responses
  }, [url, attempt]);

  return { ...state, retry: () => setAttempt((a) => a + 1) };
}

export default useNews;
