import { useState } from "react";

export default function Phonebook() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [keyword, setKeyword] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();

    if (persons.find((p) => p.name === newName)) {
      alert(`${newName} is already added to Phonebook`);
      return;
    }

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    setPersons([...persons, newPerson]);
    setNewName("");
    setNewNumber("");
  };

  const handleFiltered = (event) => {
    const value = event.target.value;
    setKeyword(value);
    const res = persons.filter((p) =>
      p.name.toLowerCase().includes(value.toLowerCase())
    );

    setFiltered(res);
  };

  return (
    <div>
      <h2 className="text-3xl">Phonebook</h2>
      <div>
        filter shown with{" "}
        <input
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1"
          onChange={handleFiltered}
          value={keyword}
        />
      </div>
      <h1 className="text-3xl">add new</h1>
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
      <h2 className="text-3xl">Numbers</h2>
      {filtered.length === 0
        ? persons.map((p) => (
            <p key={p.name}>
              {p.name} {p.number}
            </p>
          ))
        : filtered.map((p) => (
            <p key={p.name}>
              {p.name} {p.number}
            </p>
          ))}
    </div>
  );
}
