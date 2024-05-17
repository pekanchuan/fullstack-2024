export default function App() {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
}

function Header({ course }) {
  console.log(course);
  return <h1>{course.name}</h1>;
}

function Content({ course }) {
  return (
    <>
      {course.parts.map((part, index) => (
        <Part key={index} part={part} />
      ))}
    </>
  );
}

function Part({ part }) {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
}

function Total({ course }) {
  return (
    <>
      <p>
        Number of exersices{" "}
        {course.parts.reduce((ooo, part) => {
          return ooo + part.exercises;
        }, 0)}
      </p>
    </>
  );
}
