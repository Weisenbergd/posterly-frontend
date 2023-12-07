import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const useLogin = () => {
  async function checkUser(e) {
    e.preventDefault();
    try {
      return axios.post(`${import.meta.env.VITE_URL}/user`, {
        username: e.target[0].value,
        password: e.target[1].value,
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
      console.log(err.response.data);
    }
  }

  const loginMutation = useMutation({
    mutationFn: checkUser,
    onSuccess: (data) => window.location.reload(false),
    onError: (err) => (loginMutation.error = err.response.data.message),
  });

  const logoutMutation = useMutation({
    mutationFn: handleLogout,
    onSuccess: () => window.location.reload(false),
    onError: (err) => console.log(err.data.data),
  });

  return { loginMutation, logoutMutation };
};
export default useLogin;
