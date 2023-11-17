import './Header.css'
import {Link} from 'react-router-dom';

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
			                <Link className="navbar-brand" to='/'>Live to<span>Travel</span></Link>

			            </div>
			            
			            <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
			                <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
			                    <li className=" scroll active"><Link to="/">Home</Link></li>
			                    <li className="scroll"><Link to="/blog">Blogs</Link></li>
			                    <li className="scroll"><Link to="/blog/create">Create </Link></li>
			                    <li className="scroll"><Link to="/profile">Profile</Link></li>
			                    <li className="scroll"><Link to="#works">Login</Link></li>
			                    <li className="scroll"><Link to="#explore">Register</Link></li>
			                </ul>
			            </div>
			        </div>
			    </nav>
			    
			</div>
		    <div className="clearfix"></div>

		</section>
    )
}