import { useEffect, useState } from "react";

import axios from "axios";

import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";

export default function Phonebook() {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((res) => {
      setPersons(res.data);
    });
  }, []);

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

    axios.post("http://localhost:3001/persons", newPerson).then((res) => {
      setPersons([...persons, res.data]);
      setNewName("");
      setNewNumber("");
    });
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
      <h2 className="text-4xl">Phonebook</h2>

      <Filter keyword={keyword} handleFiltered={handleFiltered} />

      <h1 className="text-3xl">add new</h1>

      <PersonForm
        addPerson={addPerson}
        handleNameChange={handleNameChange}
        newName={newName}
        handleNumberChange={handleNumberChange}
        newNumber={newNumber}
      />
      <h2 className="text-3xl">Numbers</h2>

      <Persons persons={filtered.length === 0 ? persons : filtered} />
    </div>
  );
}
