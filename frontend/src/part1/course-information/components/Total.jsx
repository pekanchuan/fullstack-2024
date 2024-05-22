export default function Total({ course }) {
  const { parts } = course;

  const total = parts.reduce((sum, part) => {
    return sum + part.exercises;
  }, 0);

  return <p className="font-bold">total of {total} exercises</p>;
}
