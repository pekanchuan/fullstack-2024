import { useState } from "react";
import blogService from "../services/blogs";

export default function Blog({ blog, handleLike, handleRemove }) {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };

  const [show, setShow] = useState(false);

  return (
    <div style={blogStyle}>
      {show ? (
        <>
          <p>
            <strong>{blog.title}</strong>{" "}
            <button onClick={() => setShow(false)}>hide</button>
          </p>
          <p>{blog.url}</p>
          <p>
            likes {blog.likes} <button onClick={handleLike}>like</button>
          </p>
          <p>{blog.author}</p>
          <button onClick={handleRemove}>remove</button>
        </>
      ) : (
        <>
          <strong>{blog.title}</strong> {blog.author}
          <button onClick={() => setShow(true)}>
            {show ? "hide" : "show"}
          </button>
        </>
      )}
    </div>
  );
}
