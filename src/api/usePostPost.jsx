import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const usePostPost = () => {
  const navigate = useNavigate();

  async function postPost(e) {
    e.preventDefault();

    try {
      return axios.post("http://localhost:3000", {
        title: e.target[0].value,
        content: e.target[1].value,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  }

  const postMutation = useMutation({
    mutationFn: postPost,
    onSuccess: () => {
      console.log("post created");
      navigate(0);
    },
    onError: () => console.log("something went wrong posting"),
  });

  return postMutation;
};
