import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../component/ErrorPage";
import AddContact from "../component/AddContact";
import Contact from "../component/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/add-contact",
    element: <AddContact></AddContact>,
  },
  {
    path: "/contacts/:id",
    element: <Contact></Contact>,
    loader: ({ params }) =>
      fetch(
        `https://contact-management-server-eight.vercel.app/contacts/${params.id}`
      ),
  },
]);

export default router;
