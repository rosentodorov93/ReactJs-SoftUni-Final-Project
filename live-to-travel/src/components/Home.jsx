export default function Home(){

    return(
        <>
        <div className="container-fluid p-0">
        <div id="header-carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src="img/background.jpg" alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth: 900}}>
                            <h4 className="text-white text-uppercase mb-md-3">Live to Travel</h4>
                            <h1 className="display-3 text-white mb-md-4">Let's Discover The World Together</h1>
                            <a href="" className="btn btn-primary py-md-3 px-md-5 mt-2">Book Now</a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src="img/carousel-2.jpg" alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth: 900}}>
                            <h4 className="text-white text-uppercase mb-md-3">Tours & Travel</h4>
                            <h1 className="display-3 text-white mb-md-4">Discover Amazing Places in Bulgaria with us</h1>
                            <a href="" className="btn btn-primary py-md-3 px-md-5 mt-2">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                <div className="btn btn-dark" style={{width: 45, height: 45}}>
                    <span className="carousel-control-prev-icon mb-n2"></span>
                </div>
            </a>
            <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                <div className="btn btn-dark" style={{width: 45, height: 45}}>
                    <span className="carousel-control-next-icon mb-n2"></span>
                </div>
            </a>
        </div>
    </div>

    <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
            <div className="text-center mb-3 pb-3">
                <h6 className="text-primary text-uppercase" style={{letterSpacing: 5}}>Destination</h6>
                <h1>Explore Top Destination</h1>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="destination-item position-relative overflow-hidden mb-2">
                        <img className="img-fluid" src="img/destination-1.jpg" alt=""/>
                        <a className="destination-overlay text-white text-decoration-none" href="">
                            <h5 className="text-white">United States</h5>
                            <span>100 Cities</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="destination-item position-relative overflow-hidden mb-2">
                        <img className="img-fluid" src="img/destination-2.jpg" alt=""/>
                        <a className="destination-overlay text-white text-decoration-none" href="">
                            <h5 className="text-white">United Kingdom</h5>
                            <span>100 Cities</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="destination-item position-relative overflow-hidden mb-2">
                        <img className="img-fluid" src="img/destination-3.jpg" alt=""/>
                        <a className="destination-overlay text-white text-decoration-none" href="">
                            <h5 className="text-white">Australia</h5>
                            <span>100 Cities</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="destination-item position-relative overflow-hidden mb-2">
                        <img className="img-fluid" src="img/destination-4.jpg" alt=""/>
                        <a className="destination-overlay text-white text-decoration-none" href="">
                            <h5 className="text-white">India</h5>
                            <span>100 Cities</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="destination-item position-relative overflow-hidden mb-2">
                        <img className="img-fluid" src="img/destination-5.jpg" alt=""/>
                        <a className="destination-overlay text-white text-decoration-none" href="">
                            <h5 className="text-white">South Africa</h5>
                            <span>100 Cities</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="destination-item position-relative overflow-hidden mb-2">
                        <img className="img-fluid" src="img/destination-6.jpg" alt=""/>
                        <a className="destination-overlay text-white text-decoration-none" href="">
                            <h5 className="text-white">Indonesia</h5>
                            <span>100 Cities</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
            <div className="text-center mb-3 pb-3">
                <h6 className="text-primary text-uppercase" style={{letterSpacing: 5}}>Our Blog</h6>
                <h1>Latest From Our Blog</h1>
            </div>
            <div className="row pb-3">
                <div className="col-lg-4 col-md-6 mb-4 pb-2">
                    <div className="blog-item">
                        <div className="position-relative">
                            <img className="img-fluid w-100" src="img/blog-1.jpg" alt=""/>
                            <div className="blog-date">
                                <h6 className="font-weight-bold mb-n1">01</h6>
                                <small className="text-white text-uppercase">Jan</small>
                            </div>
                        </div>
                        <div className="bg-white p-4">
                            <div className="d-flex mb-2">
                                <a className="text-primary text-uppercase text-decoration-none" href="">Admin</a>
                                <span className="text-primary px-2">|</span>
                                <a className="text-primary text-uppercase text-decoration-none" href="">Tours & Travel</a>
                            </div>
                            <a className="h5 m-0 text-decoration-none" href="">Dolor justo sea kasd lorem clita justo diam amet</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 pb-2">
                    <div className="blog-item">
                        <div className="position-relative">
                            <img className="img-fluid w-100" src="img/blog-2.jpg" alt=""/>
                            <div className="blog-date">
                                <h6 className="font-weight-bold mb-n1">01</h6>
                                <small className="text-white text-uppercase">Jan</small>
                            </div>
                        </div>
                        <div className="bg-white p-4">
                            <div className="d-flex mb-2">
                                <a className="text-primary text-uppercase text-decoration-none" href="">Admin</a>
                                <span className="text-primary px-2">|</span>
                                <a className="text-primary text-uppercase text-decoration-none" href="">Tours & Travel</a>
                            </div>
                            <a className="h5 m-0 text-decoration-none" href="">Dolor justo sea kasd lorem clita justo diam amet</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 pb-2">
                    <div className="blog-item">
                        <div className="position-relative">
                            <img className="img-fluid w-100" src="img/blog-3.jpg" alt=""/>
                            <div className="blog-date">
                                <h6 className="font-weight-bold mb-n1">01</h6>
                                <small className="text-white text-uppercase">Jan</small>
                            </div>
                        </div>
                        <div className="bg-white p-4">
                            <div className="d-flex mb-2">
                                <a className="text-primary text-uppercase text-decoration-none" href="">Admin</a>
                                <span className="text-primary px-2">|</span>
                                <a className="text-primary text-uppercase text-decoration-none" href="">Tours & Travel</a>
                            </div>
                            <a className="h5 m-0 text-decoration-none" href="">Dolor justo sea kasd lorem clita justo diam amet</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid bg-registration py-5" style={{margin: "90px 0"}}>
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-lg-7 mb-5 mb-lg-0">
                    <div className="mb-4">
                        <h6 className="text-primary text-uppercase" style={{letterSpacing: 5}}>Mega Offer</h6>
                        <h1 className="text-white"><span className="text-primary">30% OFF</span> For Honeymoon</h1>
                    </div>
                    <p className="text-white">Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
                        ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                        dolor</p>
                    <ul className="list-inline text-white m-0">
                        <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Labore eos amet dolor amet diam</li>
                        <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Etsea et sit dolor amet ipsum</li>
                        <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Diam dolor diam elitripsum vero.</li>
                    </ul>
                </div>
                <div className="col-lg-5">
                    <div className="card border-0">
                        <div className="card-header bg-primary text-center p-4">
                            <h1 className="text-white m-0">Sign Up Now</h1>
                        </div>
                        <div className="card-body rounded-bottom bg-white p-5">
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control p-4" placeholder="Your name" required="required" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control p-4" placeholder="Your email" required="required" />
                                </div>
                                <div className="form-group">
                                    <select className="custom-select px-4" style={{height: 47}}>
                                        <option selected>Select a destination</option>
                                        <option value="1">destination 1</option>
                                        <option value="2">destination 1</option>
                                        <option value="3">destination 1</option>
                                    </select>
                                </div>
                                <div>
                                    <button className="btn btn-primary btn-block py-3" type="submit">Sign Up Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
        
    )
}