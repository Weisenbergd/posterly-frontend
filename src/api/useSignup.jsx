import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const useSignup = () => {
  async function checkUser(e) {
    e.preventDefault();

    console.log(e.target);

    try {
      return axios.post(`${import.meta.env.VITE_URL}/signup`, {
        username: e.target[0].value,
        password: e.target[1].value,
        passwordConfirm: e.target[2].value,
      });
    } catch (err) {
      console.log("error", err.response.data);
    }
  }

  async function handleLogout(e) {
    try {
      const data = await axios.get(`${import.meta.env.VITE_URL}/user/signout`);
      window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  }

  const signupMutation = useMutation({
    mutationFn: checkUser,
    onSuccess: (data) => window.location.reload(false),
    onError: (err) => console.log(err.response.data),
  });

  return { signupMutation };
};
export default useSignup;
