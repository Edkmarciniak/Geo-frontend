import InputText from "./components/form/input-text";
import InputPassword from "./components/form/input-password";

function App() {
  return (
    <form className="mt-4 flex flex-col items-center gap-y-2">
      <InputText />

      <InputPassword />
      <InputPassword />

      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Enter
      </button>
    </form>
  );
}

export default App;
