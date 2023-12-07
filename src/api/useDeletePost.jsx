import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const useDeletePost = (post) => {
  const navigate = useNavigate();

  const { user, isLoggedIn } = useContext(UserContext);

  async function deletePost(e) {
    e.preventDefault();
    try {
      return axios.delete(`http://localhost:3000/post/${post._id}`);
    } catch (err) {
      console.log(err);
    }
  }

  const deleteMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      console.log("post deleted");
      navigate("/");
      navigate(0);
    },
    onError: (err) => console.log(err.response.data),
  });

  return { deleteMutation, user, isLoggedIn };
};
