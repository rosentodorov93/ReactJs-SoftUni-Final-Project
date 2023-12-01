import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import * as blogService from "../../services/blogService";
import BlogItem from "../BlogItem/BlogItem";
import categories from "../../utils/categories";

export default function Home() {
  const [latestBlogs, setLatestBlogs] = useState([]);

  useEffect(() => {
    blogService
      .getLatestsThree()
      .then((res) => setLatestBlogs(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <section id="home" className="welcome-hero">
        <div className="container">
          <div className="welcome-hero-txt">
            <h2>
              Best place to find and explore <br /> in Bulgaria{" "}
            </h2>
            <p>
              Find Places, Routes, Adventures and many more in just One click
            </p>
          </div>
          <div className="welcome-hero-serch-box">
            <div className="welcome-hero-form">
              <div className="single-welcome-hero-form">
                <h3>what?</h3>
                <form action="index.html">
                  <input
                    type="text"
                    placeholder="Ex: palce, resturent, food, automobile"
                  />
                </form>
                <div className="welcome-hero-form-icon">
                  <i className="flaticon-list-with-dots"></i>
                </div>
              </div>
              <div className="single-welcome-hero-form">
                <h3>location</h3>
                <form action="index.html">
                  <input type="text" placeholder="Ex: london, newyork, rome" />
                </form>
                <div className="welcome-hero-form-icon">
                  <i className="flaticon-gps-fixed-indicator"></i>
                </div>
              </div>
            </div>
            <div className="welcome-hero-serch">
              <button className="welcome-hero-btn">
                search <i data-feather="search"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="blog" className="blog">
        <div className="container">
          <div className="section-header">
            <h2>news and articles</h2>
            <p>Always upto date with our latest News and Articles </p>
          </div>
          <div className="blog-content">
            <div className="row">
              {latestBlogs &&
                latestBlogs.map((b) => <BlogItem key={b._id} data={b} />)}
            </div>
          </div>
        </div>
      </section>
      <section id="explore" className="explore">
        <div className="container">
          <div className="section-header">
            <h2>explore</h2>
            <p>
              Explore New place, food, culture around the world and many more
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
                      <Link  to={`/blog/${c}`}>
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
            <h2>Do you want to add your business listing with us?</h2>
            <p>
              Listrace offer you to list your business with us and we very much
              able to promote your Business.
            </p>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="subscription-input-group">
                <form action="#">
                  <input
                    type="email"
                    className="subscription-input-form"
                    placeholder="Enter your email here"
                  />
                  <button className="appsLand-btn subscribe-btn">
                    creat account
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
