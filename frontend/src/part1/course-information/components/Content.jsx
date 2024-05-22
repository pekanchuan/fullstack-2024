import Part from "./Part";

export default function Content({ course }) {
  const { parts } = course;

  return (
    <>
      {parts.map((part) => (
        <Part key={part.name} part={part} />
      ))}
    </>
  );
}
