import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import PrivateRoute from "@/PrivateRoute";
import MyNotes from "./pages/mynotes";
import Note from "./pages/note";
import Favorites from "./pages/favorities";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import NewNote from "./pages/new";
import EditNote from "./pages/edit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/mynotes",
        element: (
          <PrivateRoute>
            <MyNotes />
          </PrivateRoute>
        ),
      },
      { path: "/note/:id", element: <Note /> },
      { path: "/edit/:id", element: <EditNote /> },
      {
        path: "/favorites",
        element: (
          <PrivateRoute>
            <Favorites />
          </PrivateRoute>
        ),
      },
      { path: "/signup", element: <SignUp /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/new", element: <NewNote /> },
    ],
  },
]);

export default router;
