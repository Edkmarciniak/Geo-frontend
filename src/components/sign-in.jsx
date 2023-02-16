import axios from "axios";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // const changeHandler = (e) => {
  //   setUser({ ...user, [e.target.name]: e.target.value });
  // };
  const submitHandler = () => {
    axios.post("http://localhost:3000/user/signIn", user).then((res) => {
      console.log(res.data);
      setUser({ email: "Sansa", password: "" });
    });
  };

  const renderStuff = () => {
    if (user.email.length > 0) {
      return (
        <div className="mt-4 flex flex-col items-center gap-y-2">
          Hello {user.email}
        </div>
      );
    } else {
      return (
        <div className="mt-4 flex flex-col items-center gap-y-2">
          <label htmlFor="username" className="sr-only">
            Username
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            className="rounded"
            // onChange={changeHandler}
            // value={user.email}
          />

          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="rounded"
            // onChange={changeHandler}
            // value={user.password}
          />

          <label htmlFor="confirmPassword" className="sr-only">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            className="rounded"
          />

          {/* TODO: Toggle between Register and Login */}
          <button
            type="submit"
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            onClick={submitHandler}
          >
            Enter
          </button>
        </div>
      );
    }
  };

  return renderStuff();
}

export default App;
