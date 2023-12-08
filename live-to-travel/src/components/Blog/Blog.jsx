import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import * as postService from "../../services/postService";

import PostItem from "../PostItem/PostItem";
import RescentPost from "../RescentPost/RescentPost";
import SearchBar from "../SearchBar/SearchBar";

import "./Blog.css";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const { category } = useParams();

  const onSearchSubmit = async (values) => {
    const result = await postService.getAll(
      values.category,
      values.search
    );
    setPosts(result);
  };


  useEffect(() => {
    postService
      .getAll(category ? category : "")
      .then((res) => setPosts(res))
      .catch((err) => console.log(err));

    postService
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
         <SearchBar category={category} onSearchSubmit={onSearchSubmit}/>

          <div className="row">
            <div className="row-left-section">
              <h4 className="blog-heading">Blog</h4>
              <div className="row">
                {posts.map((post) => (
                  <PostItem key={post._id} data={post} />
                ))}
                {posts.length === 0 && 
                <div className='no-posts'>
                  <h3>There are no posts yet</h3>
                  <Link className='btn-create' to='/post/create'>Create Post</Link>
                </div>}
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
