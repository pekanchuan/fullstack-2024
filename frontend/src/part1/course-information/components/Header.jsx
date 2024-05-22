export default function ({ course }) {
  const { name } = course;
  return <h1 className="text-4xl m-1">{name}</h1>;
}
