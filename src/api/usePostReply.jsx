import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export const usePostReply = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  async function postReply(e) {
    e.preventDefault();
    try {
      return axios.post(`${import.meta.env.VITE_URL}/post/${id}`, {
        reply: e.target[0].value,
      });
    } catch (err) {
      console.log(err);
    }
  }

  const postReplyMutation = useMutation({
    mutationFn: postReply,
    onSuccess: ({ data }) => {
      console.log("data", data);
      navigate(0);
    },
    onError: (err) => console.log(err.response.data),
  });

  return { postReplyMutation };
};
