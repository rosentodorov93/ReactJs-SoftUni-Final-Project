import './Header.css'

export default function Header(){
    return(
        <section className="top-area">
			<div className="header-area">
			    <nav className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"  data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

			        <div className="container">
			            <div className="navbar-header">
			                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
			                    <i className="fa fa-bars"></i>
			                </button>
			                <a className="navbar-brand" href="index.html">Live to<span>Travel</span></a>

			            </div>
			            
			            <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
			                <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
			                    <li className=" scroll active"><a href="#home">Home</a></li>
			                    <li className="scroll"><a href="#blog">Blog</a></li>
			                    <li className="scroll"><a href="#reviews">Review</a></li>
			                    <li className="scroll"><a href="#contact">Contact</a></li>
			                    <li className="scroll"><a href="#works">Login</a></li>
			                    <li className="scroll"><a href="#explore">Register</a></li>
			                </ul>
			            </div>
			        </div>
			    </nav>
			    
			</div>
		    <div className="clearfix"></div>

		</section>
    )
}