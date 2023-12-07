import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

export const useDeleteReply = (reply, post) => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  async function deleteReply(e) {
    e.preventDefault();

    try {
      return axios.delete(
        `${import.meta.env.VITE_URL}/post/${post._id}/${reply._id}`,
        {
          user,
        }
      );
    } catch (err) {
      console.log(err);
    }
  }

  const deleteReplyMutation = useMutation({
    mutationFn: (e) => deleteReply(e),
    onSuccess: ({ data }) => {
      navigate(0);
      console.log(data);
    },
    onError: (err) => console.log(err.response.data),
  });
  return { deleteReplyMutation };
};
