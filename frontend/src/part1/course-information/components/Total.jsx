export default function Total({ course }) {
  const { parts } = course;

  return (
    <p>
      Number of exercises{" "}
      {parts.reduce((sum, part) => {
        return sum + part.exercises;
      }, 0)}
    </p>
  );
}
