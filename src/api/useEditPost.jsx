import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useEditPost = (post) => {
  const navigate = useNavigate();
  async function editPost(e) {
    e.preventDefault();
    console.log("sldkjf;alskjdf;ajlskdf", e);
    e.preventDefault();
    if (!e) throw Error("eror no event passed to useEditPost");
    try {
      return axios.patch(`${import.meta.env.VITE_URL}/post/${post._id}`, {
        _id: post._id,
        content: e.target[0].value,
        target: "post",
      });
    } catch (err) {
      console.log(err);
    }
  }

  const editPostMutation = useMutation({
    mutationFn: (e) => {
      e.preventDefault();
      console.log(e);
      editPost;
    },

    onSuccess: (e) => {
      console.log("post editted");
      console.log("e", e);
      navigate(0);
    },
    onError: (err) => console.log(err.response.data),
  });

  return { editPostMutation };
};
