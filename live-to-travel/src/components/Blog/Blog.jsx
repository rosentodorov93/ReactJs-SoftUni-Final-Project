import "./Blog.css";
import { useState, useEffect } from "react";
import BlogItem from "../BlogItem/BlogItem";
import { Link, useParams } from "react-router-dom";

import * as blogService from "../../services/blogService";
import categories from "../../utils/categories";
import useForm from "../../hooks/useForm";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const {category} = useParams();

  const onSearchSubmit = async(values) => {
    const result = await blogService.getAll(formValues.category, formValues.search);
    setBlogs(result);
  };
  const { formValues, onChange, onSubmit } = useForm(onSearchSubmit, {
    category: category ? category : '',
    search: '',
  });

  useEffect(() => {
    blogService
      .getAll(category ? category : '')
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
            <div>
              <label htmlFor="category">Category</label>
            <select
                className="search-type"
                name="category"
                id="category"
                onChange={onChange}
                value={formValues.category}
                placeholder="category"
              >
                <option value={''} >All</option>
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
              
           <div>
          <label htmlFor="search">Search</label>
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
           </div>

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
