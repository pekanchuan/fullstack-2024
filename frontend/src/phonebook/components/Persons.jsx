export default function Persons({ persons }) {
  return (
    <>
      {persons.map((p) => (
        <p key={p.id}>
          {p.name} {p.number}
        </p>
      ))}
    </>
  );
}
