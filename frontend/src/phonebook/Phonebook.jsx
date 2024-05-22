import { useState } from "react";

export default function Phonebook() {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    if (persons.find((p) => p.name === newName)) {
      alert(`${newName} is already added to Phonebook`);
      return;
    }

    const newPerson = {
      name: newName,
    };

    setPersons([...persons, newPerson]);
    setNewName("");
  };

  return (
    <div>
      <h2 className="text-3xl">Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name:{" "}
          <input
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1"
            onChange={handleChange}
            value={newName}
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
      <h2 className="text-3xl">Numbers</h2>
      {persons.map((p) => (
        <p key={p.name}>{p.name}</p>
      ))}
    </div>
  );
}
