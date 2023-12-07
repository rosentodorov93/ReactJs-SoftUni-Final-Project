import "./Blog.css";
import { useState, useEffect } from "react";
import BlogItem from "../BlogItem/BlogItem";
import { Link, useParams } from "react-router-dom";

import * as blogService from "../../services/blogService";
import categories from "../../utils/categories";
import useForm from "../../hooks/useForm";
import RescentPost from "../RescentPost/RescentPost";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const { category } = useParams();

  const onSearchSubmit = async (values) => {
    const result = await blogService.getAll(
      formValues.category,
      formValues.search
    );
    setBlogs(result);
  };
  const { formValues, onChange, onSubmit } = useForm(onSearchSubmit, {
    category: category ? category : "",
    search: "",
  });

  useEffect(() => {
    blogService
      .getAll(category ? category : "")
      .then((res) => setBlogs(res))
      .catch((err) => console.log(err));

    blogService
      .getLatestsThree()
      .then((res) => setRecentPosts(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="container blog-header">
        <div className="container"></div>
      </div>

      {/* main part */}

      <div className="container-blog">
        <div className="container">
          <div className="search-container">
            <form className="search-form" method="GET" onSubmit={onSubmit}>
              <div>
                <label htmlFor="category">Category</label>
                <select
                  className="search-input"
                  name="category"
                  id="category"
                  onChange={onChange}
                  value={formValues.category}
                  placeholder="category"
                >
                  <option value={""}>All</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div className="search-wrapper">
                <label htmlFor="search">Search</label>
                <div className="search-box">
                  <input
                    id="search"
                    type="text"
                    name="search"
                    onChange={onChange}
                    value={formValues.search}
                    placeholder="Search Title..."
                  />
                  <button type="submit" className="btn-search">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="row">
            <div className="row-left-section">
              <h4 className="blog-heading">Blog</h4>
              <div className="row">
                {blogs.map((blog) => (
                  <BlogItem key={blog._id} data={blog} />
                ))}
              </div>
            </div>
            <div className="row-right-section">
              <div className="mb-5">
                <h4>Recent Post</h4>
                {recentPosts.map((post) => (
                  <RescentPost key={post._id} {...post} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
