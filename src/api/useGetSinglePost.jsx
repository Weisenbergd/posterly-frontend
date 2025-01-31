import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const useGetSinglePost = () => {
  const { id } = useParams();
  console.log("Fetching post with ID:", id); // Log the ID

  async function getPost({ queryKey }) {
    const url = `${import.meta.env.VITE_URL}/post/${queryKey[1]}`;
    console.log("Request URL:", url); // Log the full request URL
    const response = await fetch(url);
    const data = await response.json();
    return data.post;
  }

  const { isLoading, error, data } = useQuery({
    queryKey: ["post", id],
    queryFn: getPost,
  });

  return { isLoading, error, data };
};
