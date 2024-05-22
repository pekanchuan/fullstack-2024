export default function PersonForm({
  addPerson,
  handleNameChange,
  newName,
  handleNumberChange,
  newNumber,
}) {
  return (
    <form onSubmit={addPerson}>
      <div>
        name:{" "}
        <input
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1"
          onChange={handleNameChange}
          value={newName}
        />
      </div>
      <div>
        number:{" "}
        <input
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1"
          onChange={handleNumberChange}
          value={newNumber}
        />
      </div>
      <div>
        <button
          className="bg-zinc-400 text-white rounded m-1 p-1"
          type="submit"
        >
          add
        </button>
      </div>
    </form>
  );
}
