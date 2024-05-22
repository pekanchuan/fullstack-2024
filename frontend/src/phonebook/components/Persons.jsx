export default function Persons({ persons, handleDelete }) {
  return (
    <>
      {persons.map((p) => (
        <div key={p.id} className="my-1">
          {p.name} {p.number}
          <button
            className="bg-sky-500 hover:bg-sky-700 rounded-md p-1 mx-1"
            onClick={() => handleDelete(p)}
          >
            delete
          </button>
        </div>
      ))}
    </>
  );
}
