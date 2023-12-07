import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useEditPost = (post) => {
  const navigate = useNavigate();
  async function editPost(e) {
    e.preventDefault();
    try {
      return axios.patch(`http://localhost:3000/post/${post._id}`, {
        _id: post._id,
        content: e.target[0].value,
        target: "post",
      });
    } catch (err) {
      console.log(err);
    }
  }

  const editPostMutation = useMutation({
    mutationFn: (e) => editPost(e),
    onSuccess: () => {
      console.log("post editted");
      navigate(0);
    },
    onError: (err) => console.log(err.response.data),
  });

  return { editPostMutation };
};
