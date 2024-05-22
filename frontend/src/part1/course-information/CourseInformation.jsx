import Content from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";

export default function CourseInformation() {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  // return (
  //   <>
  //     <Header course={course} />
  //     <Content course={course} />
  //     <Total course={course} />
  //   </>
  // );

  return (
    <div>
      <h1 className="text-4xl">Web development curriculum</h1>
      {courses.map((course) => (
        <div key={course.id}>
          <Header course={course} />
          <Content course={course} />
          <Total course={course} />
        </div>
      ))}
    </div>
  );
}
