import { render, screen } from "@testing-library/react";
import Blog from "./Blog";
import { expect } from "vitest";

test("renders blog", () => {
  const blog = {
    title: "Component testing is done with react-testing-library",
    author: "John Doe",
    url: "http://example.com",
  };

  render(<Blog blog={blog} />);

  //   screen.debug();

  const element = screen.getByText(
    "Component testing is done with react-testing-library"
  );

  screen.debug(element);
  expect(element).toBeDefined();
});
