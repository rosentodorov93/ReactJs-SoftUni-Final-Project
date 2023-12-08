import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import parse from "html-react-parser";
import "./PostDetails.css";

import AuthContext from "../../contexts/AuthContext";
import * as postService from "../../services/blogService";
import * as commentsService from "../../services/commentService";

import PostDelete from "../PostDelete/PostDelete";
import RescentPost from "../RescentPost/RescentPost";
import categories from "../../utils/categories";
import CommentsList from "../CommentsList/CommentsList";
import CommentCreate from "../CommentCreate/CommentCreate";

export default function BlogDetails() {
  const { _id, isAuthenticated } = useContext(AuthContext);
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [recentPosts, setRecentPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    postService
      .getOne(id)
      .then((res) => setPost({ ...res, content: parse(res.content) }))
      .catch((err) => console.log(err));

    postService
      .getLatestsThree()
      .then((res) => setRecentPosts(res))
      .catch((err) => console.log(err));
    
    commentsService
      .getById(id)
      .then((res) => {
        setComments(res);
        console.log(res);
      })
      .catch((err) => console.log(err));

  }, [id, comments.length]);

  const onDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const onDeleteModalClose = () => {
    setShowDeleteModal(false);
  };

  const deleteBlogHandler = async () => {
    await blogService.remove(id);
    navigate("/blog");
  };

  const addCommentHandler = async (values) => {
    const comment = {
      blogId: id,
      text: values.text,
    };
    const result = await commentsService.create(comment);
    console.log(result);
    setComments(state => [...state, comment]);
  };



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

      {showDeleteModal && (
        <PostDelete
          onClose={onDeleteModalClose}
          deleteBlogHandler={deleteBlogHandler}
        />
      )}

      <div className="container-blog">
        <div className="container">
          <div className="row">
            <div className="row-left-section">
              <div className="pb-3">
                <div className="blog-article">
                  <div className="article-img-container">
                    <img
                      className="img-fluid w-100"
                      src={post.imageUrl}
                      alt={post.title}
                    />
                    <div className="blog-date">
                      <h6 className="font-weight-bold mb-n1">{new Date(post._createdOn).getDay()}</h6>
                      <small className="text-white text-uppercase">{new Date(post._createdOn).toLocaleString('default', { month: 'short' })}</small>
                    </div>
                  </div>
                </div>
                <div className="article-content">
                  <div className="d-flex mb-3">
                    <p>{post?.owner?.firstName} {post?.owner?.lastName} | {post.category}</p>
                  </div>
                  <h2 className="mb-3">{post.title}</h2>
                  <div>{post.content}</div>
                  <div>
                    {_id === post._ownerId && (
                      <>
                        <Link to={`/post/edit/${post._id}`}>Edit</Link>
                        <button type="button" onClick={onDeleteClick}>
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                </div>

              <CommentsList comments={comments}/>
              {isAuthenticated && <CommentCreate addCommentHandler={addCommentHandler}/>}

              </div>
            </div>
            <div className="row-right-section">
              <div className="categories-container">
                <h4 className="text-uppercase mb-4">Categories</h4>
                <div className="bg-white">
                  <ul className="categories-list">
                    {categories.map((c) => (
                      <li className="categories-list-item" key={c}>
                        <Link className="text-dark" to={`/blog/${c}`}>
                          <i className="fa fa-angle-right text-primary mr-2"></i>
                          {c}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mb-5">
                <h4>Recent Post</h4>
                {recentPosts.map((post) => (
                  <RescentPost key={post._id} {...post} />
                ))}

                {recentPosts.length === 0 && <p>No recent posts yet</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}