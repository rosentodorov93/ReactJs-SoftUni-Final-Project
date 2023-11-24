import { useState, useEffect } from "react";
import {Link, useParams, useNavigate} from 'react-router-dom'
import { useContext } from "react";
import parse from 'html-react-parser';
import "./BlogDetails.css";

import AuthContext from "../../contexts/AuthContext";
import * as blogService from '../../services/blogService'
import * as commentService from '../../services/commentService'

import BlogDelete from "../BlogDelete/BlogDelete";
import useForm from "../../hooks/useForm";

export default function BlogDetails() {

  const {_id} = useContext(AuthContext);
  const {id} = useParams();
  const [blog, setBlog] = useState({});
  const [comments, setComments] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const navigate = useNavigate();
  

  useEffect(()=>{
    blogService.getOne(id)
    .then(res => setBlog(({...res, content: parse(res.content)})))
    .catch(err => console.log(err))

    commentService.getById(id)
    .then(res => setComments(res))
    .catch(err => console.log(err))

  },[id])

  const onDeleteClick = () =>{
    setShowDeleteModal(true);
  }

  const onDeleteModalClose = () =>{
    setShowDeleteModal(false);
  }

  const deleteBlogHandler = async() =>{
    await blogService.remove(id);
    navigate('/blog');
  }

  const addCommentHandler = async(values) =>{
    const comment = {
      blogId: id,
      timeStamp: new Date().toISOString(),
      text: values.text,
    }

    const result = await commentService.create(comment);
    console.log(result);
  }

  const {formValues, onChange, onSubmit} = useForm(addCommentHandler, {text: ''})

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

      {showDeleteModal && <BlogDelete onClose={onDeleteModalClose} deleteBlogHandler={deleteBlogHandler}/>}

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
            <div >
              
              {_id === blog.ownerId && 
              <>
                  <Link to={`/blog/edit/${blog._id}`}>Edit</Link>
                  <button type="button" onClick={onDeleteClick}>Delete</button>
              </>}

            </div>
          </div>
          
          <div className="article-comments">
          <h4>{comments.length} Comments</h4>
          <div className="single-comment">
            {comments.map(({_id, timeStamp, text, owner:{firstName, lastName}}) => (
               <div key={_id} className="comment-body">
               <h6><p >{firstName} {lastName}</p> <small><i>{new Date(timeStamp).toLocaleDateString()}</i></small></h6>
               <p>{text}</p>
             </div>
            ))}
           
          </div>
        </div>
        <div className="article-comments" >
          <h4 className="text-uppercase mb-4" >Leave a comment</h4>
          <form onSubmit={onSubmit} method="post" >
            <div className="form-group">
              <label htmlFor="text">Message *</label>
              <textarea id="text" cols="30" rows="5" className="form-control" name="text" onChange={onChange} value={formValues.text}></textarea>
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
