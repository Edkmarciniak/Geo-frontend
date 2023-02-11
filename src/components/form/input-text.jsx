export default function InputText() {
  return (
    <>
      <label htmlFor="name" className="sr-only">
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Name"
        className="rounded"
      />
    </>
  );
}
