export default function BlogDetails(){
    return(
        <>
            <div className="container-fluid page-header">
        <div className="container">
            <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: 400}}>
                <h3 className="display-4 text-white text-uppercase">Blog Detail</h3>
                <div className="d-inline-flex text-white">
                    <p className="m-0 text-uppercase"><a className="text-white" href="">Home</a></p>
                    <i className="fa fa-angle-double-right pt-1 px-3"></i>
                    <p className="m-0 text-uppercase">Blog Detail</p>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-8">

                    <div className="pb-3">
                        <div className="blog-item">
                            <div className="position-relative">
                                <img className="img-fluid w-100" src="img/blog-1.jpg" alt=""/>
                                <div className="blog-date">
                                    <h6 className="font-weight-bold mb-n1">01</h6>
                                    <small className="text-white text-uppercase">Jan</small>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white mb-3" style={{padding: 30}}>
                            <div className="d-flex mb-3">
                                <a className="text-primary text-uppercase text-decoration-none" href="">Admin</a>
                                <span className="text-primary px-2">|</span>
                                <a className="text-primary text-uppercase text-decoration-none" href="">Tours & Travel</a>
                            </div>
                            <h2 className="mb-3">Dolor justo sea kasd lorem clita justo diam amet</h2>
                            <p>Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut
                                magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet
                                amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at
                                sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et
                                aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren
                                sit stet no diam kasd vero.</p>
                            <p>Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores
                                vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit
                                nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore
                                ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et,
                                clita lorem sit vero amet amet est dolor elitr, stet et no diam sit. Dolor erat
                                justo dolore sit invidunt.</p>
                            <h4 className="mb-3">Est dolor lorem et ea</h4>
                            <img className="img-fluid w-50 float-left mr-4 mb-2" src="img/blog-2.jpg"/>
                            <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor
                                invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam
                                lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor
                                rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor
                                sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at
                                lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at
                                sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam
                                dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna
                                sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et
                                duo tempor sea kasd clita ipsum et.</p>
                            <h5 className="mb-3">Est dolor lorem et ea</h5>
                            <img className="img-fluid w-50 float-right ml-4 mb-2" src="img/blog-3.jpg"/>
                            <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor
                                invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam
                                lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor
                                rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor
                                sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at
                                lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at
                                sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam
                                dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna
                                sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et
                                duo tempor sea kasd clita ipsum et. Takimata kasd diam justo est eos erat
                                aliquyam et ut.</p>
                        </div>
                    </div>

                    <div className="bg-white" style={{padding: 30, marginBottom: 30}}>
                        <h4 className="text-uppercase mb-4" style={{letterSpacing: 5}}>3 Comments</h4>
                        <div className="media mb-4">
                            <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" style={{width: 45}}/>
                            <div className="media-body">
                                <h6><a href="">John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                                <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                                    accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.
                                    Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor
                                    consetetur at sit.</p>
                                <button className="btn btn-sm btn-outline-primary">Reply</button>
                            </div>
                        </div>
                        <div className="media">
                            <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" style={{width: 45}}/>
                            <div className="media-body">
                                <h6><a href="">John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                                <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                                    accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.
                                    Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor
                                    consetetur at sit.</p>
                                <button className="btn btn-sm btn-outline-primary">Reply</button>
                                <div className="media mt-4">
                                    <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1"
                                        style={{width: 45}}/>
                                    <div className="media-body">
                                        <h6><a href="">John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                                        <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor
                                            labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed
                                            eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet
                                            ipsum diam tempor consetetur at sit.</p>
                                        <button className="btn btn-sm btn-outline-primary">Reply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

    
                    <div className="bg-white mb-3" style={{padding: 30}}>
                        <h4 className="text-uppercase mb-4" style={{letterSpacing: 5}}>Leave a comment</h4>
                        <form>
                            <div className="form-group">
                                <label for="name">Name *</label>
                                <input type="text" className="form-control" id="name"/>
                            </div>
                            <div className="form-group">
                                <label for="email">Email *</label>
                                <input type="email" className="form-control" id="email"/>
                            </div>
                            <div className="form-group">
                                <label for="website">Website</label>
                                <input type="url" className="form-control" id="website"/>
                            </div>
    
                            <div className="form-group">
                                <label for="message">Message *</label>
                                <textarea id="message" cols="30" rows="5" className="form-control"></textarea>
                            </div>
                            <div className="form-group mb-0">
                                <input type="submit" value="Leave a comment"
                                    className="btn btn-primary font-weight-semi-bold py-2 px-3"/>
                            </div>
                        </form>
                    </div>
                </div>
    
                <div className="col-lg-4 mt-5 mt-lg-0">
              
                    <div className="mb-5">
                        <h4 className="text-uppercase mb-4" style={{letterSpacing: 5}}>Categories</h4>
                        <div className="bg-white" style={{padding: 30}}>
                            <ul className="list-inline m-0">
                                <li className="mb-3 d-flex justify-content-between align-items-center">
                                    <a className="text-dark" href="#"><i className="fa fa-angle-right text-primary mr-2"></i>Web
                                        Design</a>
                                    <span className="badge badge-primary badge-pill">150</span>
                                </li>
                                <li className="mb-3 d-flex justify-content-between align-items-center">
                                    <a className="text-dark" href="#"><i className="fa fa-angle-right text-primary mr-2"></i>Web
                                        Development</a>
                                    <span className="badge badge-primary badge-pill">131</span>
                                </li>
                                <li className="mb-3 d-flex justify-content-between align-items-center">
                                    <a className="text-dark" href="#"><i
                                            className="fa fa-angle-right text-primary mr-2"></i>Online Marketing</a>
                                    <span className="badge badge-primary badge-pill">78</span>
                                </li>
                                <li className="mb-3 d-flex justify-content-between align-items-center">
                                    <a className="text-dark" href="#"><i
                                            className="fa fa-angle-right text-primary mr-2"></i>Keyword Research</a>
                                    <span className="badge badge-primary badge-pill">56</span>
                                </li>
                                <li className="d-flex justify-content-between align-items-center">
                                    <a className="text-dark" href="#"><i
                                            className="fa fa-angle-right text-primary mr-2"></i>Email Marketing</a>
                                    <span className="badge badge-primary badge-pill">98</span>
                                </li>
                            </ul>
                        </div>
                    </div>
    
                    <div className="mb-5">
                        <h4 className="text-uppercase mb-4" style={{letterSpacing: 5}}>Recent Post</h4>
                        <a className="d-flex align-items-center text-decoration-none bg-white mb-3" href="">
                            <img className="img-fluid" src="img/blog-100x100.jpg" alt=""/>
                            <div className="pl-3">
                                <h6 className="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
                                <small>Jan 01, 2050</small>
                            </div>
                        </a>
                        <a className="d-flex align-items-center text-decoration-none bg-white mb-3" href="">
                            <img className="img-fluid" src="img/blog-100x100.jpg" alt=""/>
                            <div className="pl-3">
                                <h6 className="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
                                <small>Jan 01, 2050</small>
                            </div>
                        </a>
                        <a className="d-flex align-items-center text-decoration-none bg-white mb-3" href="">
                            <img className="img-fluid" src="img/blog-100x100.jpg" alt=""/>
                            <div className="pl-3">
                                <h6 className="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
                                <small>Jan 01, 2050</small>
                            </div>
                        </a>
                    </div>
    
                </div>
            </div>
        </div>
    </div>
        </>
    )
}