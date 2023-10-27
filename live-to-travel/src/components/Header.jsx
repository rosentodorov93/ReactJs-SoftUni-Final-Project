export default function Header(){
    return(
        <div className="container-fluid position-relative nav-bar p-0">
        <div className="container-lg position-relative p-0 px-lg-3" style={{zIndex: 9}}>
            <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
                <a href="" className="navbar-brand">
                    <h1 className="m-0 text-primary"><span className="text-dark">Love to</span> Travel</h1>
                </a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                    <div className="navbar-nav ml-auto py-0">
                        <a href="index.html" className="nav-item nav-link active">Home</a>
                        <a href="about.html" className="nav-item nav-link">Blog</a>
                        <a href="service.html" className="nav-item nav-link">Destinations</a>
                        <a href="package.html" className="nav-item nav-link">Travel Guides</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Reviews</a>
                            <div className="dropdown-menu border-0 rounded-0 m-0">
                                <a href="blog.html" className="dropdown-item">Hotel Reviews</a>
                                <a href="single.html" className="dropdown-item">Excursion Reviews</a>
                                <a href="destination.html" className="dropdown-item">Personal trips</a>
                                <a href="guide.html" className="dropdown-item">Adventure Reviews</a>
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">Contact</a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    )
}