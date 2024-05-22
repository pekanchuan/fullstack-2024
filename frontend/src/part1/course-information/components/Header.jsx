export default function ({ course }) {
  const { name } = course;
  return <h1 className="text-4xl font-bold">{name}</h1>;
}
