import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const useGetSinglePost = () => {
  const { id } = useParams();
  console.log("post id:", id);
  async function getPost({ queryKey }) {
    console.log("Fetching post with ID:", queryKey[1]); // Debugging
    const response = await fetch(
      `${import.meta.env.VITE_URL}/post/${queryKey[1]}`
    );
    const data = await response.json();
    console.log("Fetched data:", data); // Debugging
    return data.post;
  }

  const { isLoading, error, data } = useQuery({
    queryKey: ["post", id],
    queryFn: getPost,
    enabled: !!id, // Ensures query runs only if id exists
  });

  return { isLoading, error, data };
};
