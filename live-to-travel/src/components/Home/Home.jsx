import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import * as postService from "../../services/postService";
import categories from "../../utils/categories";
import { BuildPath } from "../../utils/pathsUtil";
import Path from "../../common/paths";

import PostItem from "../PostItem/PostItem";
import "./Home.css";

export default function Home() {
  const [latestBlogs, setLatestBlogs] = useState([]);

  useEffect(() => {
    postService
      .getLatestsThree()
      .then((res) => setLatestBlogs(res))
      .catch(err =>{
        console.log(err)
        navigate(Path.Error)
      });
  }, []);

  return (
    <>
      <section id="home" className="welcome-hero">
        <div className="container">
          <div className="welcome-hero-txt">
            <h2>
              Live To Travel
            </h2>
            <p>
              Find Places, Trips ideas, Adventures and many more in just One click
            </p>
          </div>
        
        </div>
      </section>
      <section id="blog" className="blog">
        <div className="container">
          <div className="section-header">
            <h2>Latest from our Blog</h2>
            <p>Always upto date with our latest News and Articles </p>
          </div>
          <div className="blog-content">
            <div className="row">
              {latestBlogs.map((b) => <PostItem key={b._id} data={b} />)}
              {latestBlogs.length === 0 && <p style={{margin: 'auto'}}>No posts yet</p>}
            </div>
          </div>
        </div>
      </section>
      <section id="explore" className="explore">
        <div className="container">
          <div className="section-header">
            <h2>explore</h2>
            <p>
              Find more ideas and adventures in our categories
            </p>
          </div>
          <div className="explore-content">
            <div className="topics-container">
              <ul className="topics-list">
                {categories.map(c =>    <li key={c}>
                  <div className="single-list-topics-content">
                    <div className="single-list-topics-icon">
                    <i className="fas fa-map-marked-alt fa-lg"></i>
                    </div>
                    <h2>
                      <Link  to={BuildPath(Path.BlogCategory, {category: c})}>
                        {c}
                      </Link>
                    </h2>
                  </div>
                </li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="subscription">
        <div className="container">
          <div className="subscribe-title text-center">
            <h2>Do you want to share your travels and inspire others to explore ?</h2>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="subscription-input-group">
                  <Link to={Path.Register} className="appsLand-btn subscribe-btn">
                    creat account
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
