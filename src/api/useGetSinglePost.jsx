import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const useGetSinglePost = () => {
  const { id } = useParams();
  async function getPost({ queryKey }) {
    const response = await fetch(
      `${import.meta.env.VITE_URL}/post/${queryKey[1]}`
    );
    const data = await response.json();
    return data.post;
  }

  const { isLoading, error, data } = useQuery({
    queryKey: ["post", id],
    queryFn: getPost,
  });
  return { isLoading, error, data };
};
