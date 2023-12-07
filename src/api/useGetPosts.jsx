import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { GlobalContext } from "../context/Global";

export const useGetPost = () => {
  const { port } = useContext(GlobalContext);
  console.log(port);
  const getPosts = async () => {
    const response = await fetch("http://localhost:3000/");
    const data = await response.json();
    return data.posts;
  };

  const { isPending, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return { isPending, error, data };
};
