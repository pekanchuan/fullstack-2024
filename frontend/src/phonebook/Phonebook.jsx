import { useEffect, useState } from "react";

import axios from "axios";

import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";

const baseUrl = "http://localhost:3001/persons";

export default function Phonebook() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [showSucceed, setShowSucceed] = useState(null);

  useEffect(() => {
    axios.get(baseUrl).then((res) => {
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
      if (
        window.confirm(
          `${newName} is already added to Phonebook, replace the old number with a new one?`
        )
      ) {
        const index = persons.findIndex((p) => p.name === newName);
        const changePerson = persons[index];
        updatePerson(changePerson.id, { ...changePerson, number: newNumber });
      }
      return;
    }

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    axios.post(baseUrl, newPerson).then((res) => {
      setPersons([...persons, res.data]);
      setShowSucceed(res.data);
      setNewName("");
      setNewNumber("");
    });
  };

  const updatePerson = (id, person) => {
    axios.put(`${baseUrl}/${id}`, person).then((res) => {
      setPersons(persons.map((p) => (p.id === id ? res.data : p)));
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

  const handleDelete = (person) => {
    if (window.confirm(`Delete ${person.name}`)) {
      setPersons(
        persons.filter((p) => {
          return p.name !== person.name;
        })
      );
    }
  };

  return (
    <div>
      <h2 className="text-4xl">Phonebook</h2>

      {showSucceed ? (
        <div className="bg-gray-200 border-green-600 border-4 text-green-600 p-1">
          Added {showSucceed.name}
        </div>
      ) : (
        <></>
      )}

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

      <Persons
        persons={filtered.length === 0 ? persons : filtered}
        handleDelete={handleDelete}
      />
    </div>
  );
}
