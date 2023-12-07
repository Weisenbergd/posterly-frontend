import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import axios from "axios";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import Root from "./pages/Root";
import { FormProvider } from "./context/FormContext";
import { GlobalProvider } from "./context/Global";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "/about",
        element: <p>about</p>,
      },
      {
        path: "/blog",
        element: <p>blog</p>,
      },
      {
        path: "/login",
        element: <p>login</p>,
      },
      {
        path: "/user/:id",
        element: <p>specific user</p>,
      },
      {
        path: "/post/:id",
        element: <PostPage />,
      },
    ],
  },
]);

axios.defaults.withCredentials = true;

const App = () => {
  return (
    <>
      <GlobalProvider>
        <FormProvider>
          <UserProvider>
            <RouterProvider router={router} />
          </UserProvider>
        </FormProvider>
      </GlobalProvider>
    </>
  );
};

export default App;
