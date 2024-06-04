import { useState, useEffect, useRef } from "react";
import Blog from "./components/Blog";
import blogService from "./services/blogs";
import loginService from "./services/login";
import LoginForm from "./components/LoginForm";
import BlogForm from "./components/BlogForm";
import Togglable from "./components/Togglable";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [user, setUser] = useState(null);

  const [newBlog, setNewBlog] = useState(null);

  const loginFormRef = useRef();
  const blogFormRef = useRef();

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);

  const login = async (userObject) => {
    try {
      const user = await loginService.login(userObject);

      window.localStorage.setItem("loggedBlogappUser", JSON.stringify(user));
      blogService.setToken(user.token);
      setUser(user);
    } catch (error) {
      setErrorMessage("Wrong credentials");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  const like = (blog) => {
    let likes = blog.likes + 1;
    const updatedBlog = { ...blogObject, likes };
    console.log(updatedBlog);
    blogService
      .update(blog.id, updatedBlog)
      .then((data) => {
        setBlogs(
          blogs.map((b) => {
            if (b.id === data.id) {
              return data;
            }
            return b;
          })
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const remove = async (blog) => {
    if (window.confirm(`Remove blog ${blog.title} by ${blog.author}`)) {
      await blogService.remove(blog.id);

      setBlogs(blogs.filter((b) => b.id !== blog.id));
    }
  };

  const handleLogout = () => {
    setUser(null);
    window.localStorage.removeItem("loggedBlogappUser");
  };

  const addBlog = async (blogObject) => {
    const blog = await blogService.create(blogObject);

    setBlogs([...blogs, blog]);
    setNewBlog(blog);
    blogFormRef.current.toggleVisibility();
  };

  const loginForm = () => {
    return (
      <Togglable buttonLabel="log in" ref={loginFormRef}>
        <LoginForm login={login} />
      </Togglable>
    );
  };

  const blogList = () => (
    <>
      <h2>Blogs</h2>
      {newBlog !== null && (
        <p
          style={{
            color: "green",
            border: "2px solid green",
            fontSize: "20px",
            padding: "10px",
          }}
        >
          a new blog {newBlog.title} by {user.name} added
        </p>
      )}
      {user !== null && (
        <p>
          {user.name} logged in{" "}
          <button onClick={() => handleLogout()}>logout</button>
        </p>
      )}

      {blogForm()}

      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleLike={() => like(blog)}
          handleRemove={() => remove(blog)}
        />
      ))}
    </>
  );

  const blogForm = () => (
    <Togglable buttonLabel="create new blog" ref={blogFormRef}>
      <BlogForm addBlog={addBlog} />
    </Togglable>
  );

  return (
    <div>
      {user === null && loginForm()}
      {user !== null && blogList()}
    </div>
  );
};

export default App;
