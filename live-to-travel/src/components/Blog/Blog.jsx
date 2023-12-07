import "./Blog.css";
import { useState, useEffect } from "react";
import PostItem from "../PostItem/PostItem";
import { Link, useParams } from "react-router-dom";

import * as blogService from "../../services/blogService";
import categories from "../../utils/categories";
import useForm from "../../hooks/useForm";
import RescentPost from "../RescentPost/RescentPost";
import SearchBar from "../SearchBar/SearchBar";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const { category } = useParams();

  const onSearchSubmit = async (values) => {
    const result = await blogService.getAll(
      values.category,
      values.search
    );
    setBlogs(result);
  };


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
         <SearchBar onSearchSubmit={onSearchSubmit}/>

          <div className="row">
            <div className="row-left-section">
              <h4 className="blog-heading">Blog</h4>
              <div className="row">
                {blogs.map((blog) => (
                  <PostItem key={blog._id} data={blog} />
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
