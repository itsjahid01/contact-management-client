import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../component/ErrorPage";
import AddContact from "../component/AddContact";
import ContactList from "../component/ContactList";
import Contact from "../component/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <ContactList></ContactList>,
      },
      {
        path: "/add-contact",
        element: <AddContact></AddContact>,
      },
      {
        path: "/contacts/:id",
        element: <Contact></Contact>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/contacts/${params.id}`),
      },
    ],
  },
]);

export default router;
