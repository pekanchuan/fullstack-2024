export default function Total({ course }) {
  const { parts } = course;

  return (
    <p className="font-bold">
      total of{" "}
      {parts.reduce((sum, part) => {
        return sum + part.exercises;
      }, 0)}{" "}
      exercises
    </p>
  );
}
