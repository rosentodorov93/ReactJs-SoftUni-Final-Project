import { useEffect, useState } from "react";
import "./Home.css";

import * as blogService from '../../services/blogService';
import BlogItem from "../BlogItem/BlogItem";

export default function Home() {

  const [latestBlogs, setLatestBlogs] = useState([]);

  useEffect(()=>{
    blogService.getLatestsThree()
    .then(res => setLatestBlogs(res)
    .catch(err => console.log(err)))
  },[])

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
              <button
                className="welcome-hero-btn"
                
              >
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
                {latestBlogs && latestBlogs.map(b => <BlogItem key={b._id} data={b}/>)}

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
            <div className="row">
              <div className=" col-md-4 col-sm-6">
                <div className="single-explore-item">
                  <div className="single-explore-img">
                    <img src="/images/explore/e1.jpg" alt="explore image" />
                    <div className="single-explore-img-info">
                      <button >
                        best rated
                      </button>
                      <div className="single-explore-image-icon-box">
                        <ul>
                          <li>
                            <div className="single-explore-image-icon">
                              <i className="fa fa-arrows-alt"></i>
                            </div>
                          </li>
                          <li>
                            <div className="single-explore-image-icon">
                              <i className="fa fa-bookmark-o"></i>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="single-explore-txt bg-theme-1">
                    <h2>
                      <a href="#">tommy helfinger bar</a>
                    </h2>
                    <p className="explore-rating-price">
                      <span className="explore-rating">5.0</span>
                      <a href="#"> 10 ratings</a>
                      <span className="explore-price-box">
                        form
                        <span className="explore-price">5$-300$</span>
                      </span>
                      <a href="#">resturent</a>
                    </p>
                    <div className="explore-person">
                      <div className="row">
                        <div className="col-sm-2">
                          <div className="explore-person-img">
                            <a href="#">
                              <img
                                src="/images/explore/person.png"
                                alt="explore person"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col-sm-10">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incid ut labore et
                            dolore magna aliqua....
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="explore-open-close-part">
                      <div className="row">
                        <div className="col-sm-5">
                          <button
                            className="close-btn"
                            
                          >
                            close now
                          </button>
                        </div>
                        <div className="col-sm-7">
                          <div className="explore-map-icon">
                            <a href="#">
                              <i data-feather="map-pin"></i>
                            </a>
                            <a href="#">
                              <i data-feather="upload"></i>
                            </a>
                            <a href="#">
                              <i data-feather="heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="single-explore-item">
                  <div className="single-explore-img">
                    <img src="/images/explore/e2.jpg" alt="explore image" />
                    <div className="single-explore-img-info">
                      <button >
                        featured
                      </button>
                      <div className="single-explore-image-icon-box">
                        <ul>
                          <li>
                            <div className="single-explore-image-icon">
                              <i className="fa fa-arrows-alt"></i>
                            </div>
                          </li>
                          <li>
                            <div className="single-explore-image-icon">
                              <i className="fa fa-bookmark-o"></i>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="single-explore-txt bg-theme-2">
                    <h2>
                      <a href="#">swim and dine resort</a>
                    </h2>
                    <p className="explore-rating-price">
                      <span className="explore-rating">4.5</span>
                      <a href="#"> 8 ratings</a>
                      <span className="explore-price-box">
                        form
                        <span className="explore-price">50$-500$</span>
                      </span>
                      <a href="#">hotel</a>
                    </p>
                    <div className="explore-person">
                      <div className="row">
                        <div className="col-sm-2">
                          <div className="explore-person-img">
                            <a href="#">
                              <img
                                src="/images/explore/person.png"
                                alt="explore person"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col-sm-10">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incid ut labore et
                            dolore magna aliqua....
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="explore-open-close-part">
                      <div className="row">
                        <div className="col-sm-5">
                          <button
                            className="close-btn open-btn"
                            
                          >
                            open now
                          </button>
                        </div>
                        <div className="col-sm-7">
                          <div className="explore-map-icon">
                            <a href="#">
                              <i data-feather="map-pin"></i>
                            </a>
                            <a href="#">
                              <i data-feather="upload"></i>
                            </a>
                            <a href="#">
                              <i data-feather="heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="single-explore-item">
                  <div className="single-explore-img">
                    <img src="/images/explore/e3.jpg" alt="explore image" />
                    <div className="single-explore-img-info">
                      <button >
                        best rated
                      </button>
                      <div className="single-explore-image-icon-box">
                        <ul>
                          <li>
                            <div className="single-explore-image-icon">
                              <i className="fa fa-arrows-alt"></i>
                            </div>
                          </li>
                          <li>
                            <div className="single-explore-image-icon">
                              <i className="fa fa-bookmark-o"></i>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="single-explore-txt bg-theme-3">
                    <h2>
                      <a href="#">europe tour</a>
                    </h2>
                    <p className="explore-rating-price">
                      <span className="explore-rating">5.0</span>
                      <a href="#"> 15 ratings</a>
                      <span className="explore-price-box">
                        form
                        <span className="explore-price">5k$-10k$</span>
                      </span>
                      <a href="#">destination</a>
                    </p>
                    <div className="explore-person">
                      <div className="row">
                        <div className="col-sm-2">
                          <div className="explore-person-img">
                            <a href="#">
                              <img
                                src="/images/explore/person.png"
                                alt="explore person"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col-sm-10">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incid ut labore et
                            dolore magna aliqua....
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="explore-open-close-part">
                      <div className="row">
                        <div className="col-sm-5">
                          <button
                            className="close-btn"
                            
                          >
                            close now
                          </button>
                        </div>
                        <div className="col-sm-7">
                          <div className="explore-map-icon">
                            <a href="#">
                              <i data-feather="map-pin"></i>
                            </a>
                            <a href="#">
                              <i data-feather="upload"></i>
                            </a>
                            <a href="#">
                              <i data-feather="heart"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                  <button
                    className="appsLand-btn subscribe-btn"
                    
                  >
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
