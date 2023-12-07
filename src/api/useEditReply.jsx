import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useMutation } from "@tanstack/react-query";

export const useEditReply = (post, reply) => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  async function editReply(e) {
    let content;
    e.preventDefault();

    if (e.type === "submit") {
      content = e.target[0].value;
    }

    try {
      return axios.patch(
        `${import.meta.env.VITE_URL}/${post._id}/${reply._id}`,
        {
          user,
          content,
        }
      );
    } catch (err) {
      console.log(err);
    }
  }

  const editReplyMutation = useMutation({
    mutationFn: (e) => editReply(e),
    onSuccess: ({ data }) => {
      navigate(0);
      console.log(data);
    },
    onError: (err) => console.log(err.response.data),
  });
  return { editReplyMutation };
};
