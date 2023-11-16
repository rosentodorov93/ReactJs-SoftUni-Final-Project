import "./Blog.css";
import { useState, useEffect } from "react";
import * as blogService from '../../services/blogService';
import BlogItem from "./BlogItem";

export default function Blog() {

  const[blogs, setBlogs] = useState([]);

  useEffect(()=>{
    blogService.getAll()
    .then(res => setBlogs(res))
    .catch(err => console.log(err))
  },[]);

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
          <div className="row">
            <div className="row-left-section">
              <div className="row">

                {blogs.map(blog => <BlogItem key={blog._id} data = {blog}/>)}
              </div>
            </div>
            <div className="row-right-section">
              <div className="categories-container">
                <h4 className="text-uppercase mb-4">Categories</h4>
                <div className="bg-white">
                  <ul className="categories-list">
                    <li className="categories-list-item">
                      <a
                        className="text-dark"
                        href="https://www.free-css.com/free-css-templates"
                      >
                        <i className="fa fa-angle-right text-primary mr-2"></i>
                        Web Design
                      </a>{" "}
                      <span className="badge badge-primary badge-pill">
                        150
                      </span>
                    </li>
                    <li className="categories-list-item">
                      <a
                        className="text-dark"
                        href="https://www.free-css.com/free-css-templates"
                      >
                        <i className="fa fa-angle-right text-primary mr-2"></i>
                        Web Development
                      </a>{" "}
                      <span className="badge badge-primary badge-pill">
                        131
                      </span>
                    </li>
                    <li className="categories-list-item">
                      <a
                        className="text-dark"
                        href="https://www.free-css.com/free-css-templates"
                      >
                        <i className="fa fa-angle-right text-primary mr-2"></i>
                        Online Marketing
                      </a>{" "}
                      <span className="badge badge-primary badge-pill">78</span>
                    </li>
                    <li className="categories-list-item">
                      <a
                        className="text-dark"
                        href="https://www.free-css.com/free-css-templates"
                      >
                        <i className="fa fa-angle-right text-primary mr-2"></i>
                        Keyword Research
                      </a>{" "}
                      <span className="badge badge-primary badge-pill">56</span>
                    </li>
                    <li className="categories-list-item">
                      <a
                        className="text-dark"
                        href="https://www.free-css.com/free-css-templates"
                      >
                        <i className="fa fa-angle-right text-primary mr-2"></i>
                        Email Marketing
                      </a>{" "}
                      <span className="badge badge-primary badge-pill">98</span>
                    </li>
                  </ul>
                </div>
              </div>
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
