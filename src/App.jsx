function App() {
  return (
    <form className="mt-4 flex flex-col items-center gap-y-2">
      <label htmlFor="password" className="sr-only">
        Password{" "}
      </label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        className="rounded"
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
