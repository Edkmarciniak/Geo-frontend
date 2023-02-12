import { useLoaderData, Form } from "react-router-dom";
import InputText from "../components/form/input-text";
import UserSections from "../components/user-sections/user-sections";
import Button from "../components/button";

export default function Users() {
  const users = useLoaderData();

  return (
    <div>
      <h1 className="text-center">Users</h1>
      <Form className="flex flex-col items-center gap-y-4" method="post">
        <InputText label="Add User" id="name" />
        <Button text="Add User" type="submit" />
      </Form>
      <UserSections users={users} />
    </div>
  );
}
