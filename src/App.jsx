function App() {
  return (
    <form>
      <label htmlFor="name" className="sr-only">
        Name
      </label>
      <input type="text" id="name" name="name" placeholder="Name" />
      <label htmlFor="password" className="sr-only">
        Password{" "}
      </label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
