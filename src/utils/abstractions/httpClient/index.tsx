import axios from "axios";
import useSWR from "swr";

function httpClient<T>(
  originUrl: string,
  type?: "GET" | "POST" | "PUT" | "DELETE",
) {
  const fetcher = (url: string) =>
    type === "DELETE"
      ? axios.delete(url).then((res) => res.data as unknown as T)
      : type === "POST"
        ? axios.post(url).then((res) => res.data as unknown as T)
        : type === "PUT"
          ? axios.put(url).then((res) => res.data as unknown as T)
          : axios.get(url).then((res) => res.data as unknown as T);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useSWR<T>(originUrl, fetcher);
}

export { httpClient };
