const Blog = require("../models/blog");

const initialBlogs = [
  {
    title: "this is one test blog",
    author: "John Doe",
    url: "http://example.com/blog1",
    likes: 11,
  },
  {
    title: "another blog",
    author: "Lee Kai",
    url: "http://example.com/blog2",
    likes: 32,
  },
];

const nonExistingId = async () => {
  const blog = new Blog({ author: "Unknown" });
  await blog.save();
  await blog.deleteOne();

  return blog._id.toString();
};

const blogsInDb = async () => {
  const blogs = await Blog.find({});
  return blogs.map((blog) => blog.toJSON());
};

module.exports = {
  initialBlogs,
  nonExistingId,
  blogsInDb,
};
