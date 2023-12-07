import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { GlobalContext } from "../context/Global";

export const useGetPost = () => {
  const getPosts = async () => {
    const response = await fetch(import.meta.env.VITE_URL);
    const data = await response.json();
    return data.posts;
  };

  const { isPending, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return { isPending, error, data };
};
