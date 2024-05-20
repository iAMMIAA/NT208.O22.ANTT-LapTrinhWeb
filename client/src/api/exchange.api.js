import axiosInstance, {endpoints, fetcher} from "../utils/axios";
import useSWR from "swr";
import {useMemo} from "react";

const options = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
};

export function useGetExchangeList() {
  const URL = endpoints.exchange.list;
  const { data, isLoading, isValidating, error, mutate } = useSWR(URL, fetcher, options);
  return useMemo(
    () => ({
      data: data,
      isLoading,
      isValidating,
      error,
      mutate,
    }),
    [data, isLoading, isValidating, error, mutate]
  );
}

export function useCountComment() {
  const URL = endpoints.comment.count;
  const { data, isLoading, isValidating, error, mutate } = useSWR(URL, fetcher, options);
  return useMemo(
    () => ({
      data: data,
      isLoading,
      isValidating,
      error,
      mutate,
    }),
    [data, isLoading, isValidating, error, mutate]
  );
}

export function createExchange(content) {
  return axiosInstance.post(endpoints.exchange.new, { content });
}