import InputText from "./components/form/input-text";
import Button from "./components/form/button";

function App() {
  return (
    <form className="mt-4 flex flex-col items-center gap-y-2">
      <InputText label="Name" id="name" />

      <InputText label="Password" id="password" type="password" />
      <InputText
        label="Confirm Password"
        id="confirmPassword"
        type="password"
      />

      <Button text="Submit" />
    </form>
  );
}

export default App;
