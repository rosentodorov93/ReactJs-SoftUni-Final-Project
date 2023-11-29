import "./Blog.css";
import { useState, useEffect } from "react";
import BlogItem from "./BlogItem";
import { Link, useParams } from "react-router-dom";

import * as blogService from "../../services/blogService";
import categories from "../../utils/categories";
import useForm from "../../hooks/useForm";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  const onSearchSubmit = (values) => {
    console.log(values.category);
    console.log(values.search);
  };
  const { formValues, onChange, onSubmit } = useForm(onSearchSubmit, {
    category: "",
    search: "",
  });

  useEffect(() => {
    blogService
      .getAll()
      .then((res) => setBlogs(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="container header">
        <div className="container">
          <div className="heading-wrapper">
            <h3>Blog</h3>
            <div>
              <p>
                <a href="https://www.free-css.com/free-css-templates">Home</a>
              </p>
              <i className="fa fa-angle-double-right "></i>
              <p>Blog</p>
            </div>
          </div>
        </div>
      </div>

      {/* main part */}

      <div className="container-blog">
        <div className="container">
          <div className="search-container">
            <form className="search-form" method="GET" onSubmit={onSubmit}>
              <select
                className="search-type"
                name="category"
                onChange={onChange}
                value={formValues.category}
              >
                {categories.map((c) => (
                  <option value={c}>{c}</option>
                ))}
              </select>
              
              <input
              id="search"
                type="text"
                className="search-text"
                name="search"
                onChange={onChange}
                value={formValues.search}
                placeholder="Search Title..."
              />
              <button type="submit" className="btn-search">
                Search
              </button>

            </form>
          </div>

          <div className="row">
            <div className="row-left-section">
              <div className="row">
                {blogs.map((blog) => (
                  <BlogItem key={blog._id} data={blog} />
                ))}
              </div>
            </div>
            <div className="row-right-section">
             
              <div className="mb-5">
                <h4>Recent Post</h4>
                <div className="rescent-post">
                  <img
                    className="post-img"
                    src="../images/blog/b2.jpg"
                    alt="website template image"
                  />
                  <div className="pl-3">
                    <h6 className="m-1">
                      Diam lorem dolore justo eirmod lorem dolore
                    </h6>
                    <small>Jan 01, 2045</small>
                  </div>
                </div>{" "}
                <div
                  className="rescent-post"
                  href="https://www.free-css.com/free-css-templates"
                >
                  <img
                    className="post-img"
                    src="../images/blog/b2.jpg"
                    alt="website template image"
                  />
                  <div className="pl-3">
                    <h6 className="m-1">
                      Diam lorem dolore justo eirmod lorem dolore
                    </h6>
                    <small>Jan 01, 2045</small>
                  </div>
                </div>{" "}
                <div
                  className="rescent-post"
                  href="https://www.free-css.com/free-css-templates"
                >
                  <img
                    className="post-img"
                    src="../images/blog/b2.jpg"
                    alt="website template image"
                  />
                  <div className="pl-3">
                    <h6 className="m-1">
                      Diam lorem dolore justo eirmod lorem dolore
                    </h6>
                    <small>Jan 01, 2045</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
