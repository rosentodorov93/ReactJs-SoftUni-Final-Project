import { useContext } from 'react';
import {Link} from 'react-router-dom';

import AuthContext from '../../contexts/AuthContext';
import Path from '../../common/paths';

import './Header.css'

export default function Header(){

	const {isAuthenticated} = useContext(AuthContext);
    return(
        <section className="top-area">
			<div className="header-area">
			    <nav className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"  data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

			        <div className="container">
			            <div className="navbar-header">
						<a className="navbar-brand" href="index.html">Live to <span>Travel</span></a>
			            </div>
			            
			            <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
			                <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
			                    <li className=" scroll active"><Link to={Path.Home}>Home</Link></li>
			                    <li className="scroll"><Link to={Path.Blog}>Blogs</Link></li>
								{isAuthenticated &&
								 <>
									<li className="scroll"><Link to={Path.PostCreate}>Create </Link></li>
									<li className="scroll"><Link to={Path.Profile}>Profile</Link></li>
									<li className="scroll"><Link to={Path.Logout}>Logout</Link></li>
								</>
								}
								{!isAuthenticated && 
								<>
			                    <li className="scroll"><Link to={Path.Login}>Login</Link></li>
			                    <li className="scroll"><Link to={Path.Register}>Register</Link></li>
								</>}
			                </ul>
			            </div>
			        </div>
			    </nav>
			    
			</div>
		    <div className="clearfix"></div>

		</section>
    )
}