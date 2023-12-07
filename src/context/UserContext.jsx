import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createContext, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  async function getLoggedIn() {
    try {
      const { data } = await axios.get("http://localhost:3000/user/loggedIn");
      setIsLoggedIn(data.loggedIn || false);
      setUser(data.user.username);
      return data;
    } catch (err) {
      console.log("automatic user loggin", err);
    }
  }
  const { data } = useQuery({
    queryKey: ["loggedIn"],
    queryFn: getLoggedIn,
  });

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isLoggedIn,
        setIsLoggedIn,
        loggingOut,
        setLoggingOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
