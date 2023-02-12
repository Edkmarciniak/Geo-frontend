import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginRegister from "./routes/login-register";
import Users from "./routes/users";
import { apiService } from "./services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginRegister />,
  },

  // TODO: Protect this route (check for a jwt)
  {
    path: "/users",
    element: <Users />,
    loader() {
      return apiService.getUsers();
    },

    async action(postSubmission) {
      const { request } = postSubmission;

      // Read the request body as form data
      const formData = await request.formData();

      // Turn the form data into a plain object
      const data = Object.fromEntries(formData);

      // Send the data to the server
      const newUser = await apiService.createUsers(data);

      return { newUser };
    },
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
