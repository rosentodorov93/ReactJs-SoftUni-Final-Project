import "./BlogDetails.css";
import * as blogService from '../services/blogService'
import {useParams} from 'react-router-dom'
import { useState, useEffect } from "react";
import parse from 'html-react-parser';

export default function BlogDetails() {

  const {id} = useParams();
  const [blog, setBlog] = useState({});

  useEffect(()=>{
    blogService.getOne(id)
    .then(res => setBlog(({...res, content: parse(res.content)})))
    .catch(err => console.log(err))
  },[id])

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
            <div className="pb-3">
          <div className="blog-article">
            <div className="article-img-container"><img className="img-fluid w-100" src={blog.imageUrl} alt={blog.title}/>
              <div className="blog-date">
                <h6 className="font-weight-bold mb-n1">01</h6>
                <small className="text-white text-uppercase">Jan</small></div>
            </div>
          </div>
          <div className="article-content" >
            <div className="d-flex mb-3"><a className="text-primary text-uppercase text-decoration-none" href="https://www.free-css.com/free-css-templates">Admin</a> <span className="text-primary px-2">|</span> <a className="text-primary text-uppercase text-decoration-none" href="https://www.free-css.com/free-css-templates">Tours &amp; Travel</a></div>
            <h2 className="mb-3">{blog.title}</h2>
            <div>
              {blog.content}
            </div>
          </div>
          
          <div className="article-comments">
          <h4  >3 Comments</h4>
          <div className="single-comment">
            <div className="comment-body">
              <h6><p >John Doe</p> <small><i>01 Jan 2045</i></small></h6>
              <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor consetetur at sit.</p>
              <button className="btn btn-sm btn-outline-primary">Reply</button>
            </div>
          </div>
          <div className="single-comment">
            <div className="comment-body">
              <h6><p >John Doe</p> <small><i>01 Jan 2045</i></small></h6>
              <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor consetetur at sit.</p>
              <button className="btn btn-sm btn-outline-primary">Reply</button>
              <div className="single-comment">
                <div className="comment-body">
                  <h6><p >John Doe</p> <small><i>01 Jan 2045</i></small></h6>
                  <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor consetetur at sit.</p>
                  <button className="btn btn-sm btn-outline-primary">Reply</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="article-comments" >
          <h4 className="text-uppercase mb-4" >Leave a comment</h4>
          <form action="#" method="post" >
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input type="text" className="form-control" id="name"/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" className="form-control" id="email"/>
            </div>
            <div className="form-group">
              <label htmlFor="website">Website</label>
              <input type="url" className="form-control" id="website"/>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea id="message" cols="30" rows="5" className="form-control"></textarea>
            </div>
            <div className="form-group mb-0">
              <input type="submit" value="Leave a comment" className="btn-comment"/>
            </div>
          </form>
        </div>
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
                    src="../../images/blog/b2.jpg"
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
                    src="../../images/blog/b2.jpg"
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
                    src="../../images/blog/b2.jpg"
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
