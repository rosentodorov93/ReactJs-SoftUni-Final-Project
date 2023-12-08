import { useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../contexts/AuthContext';
import Path from '../../common/paths';

import './Footer.css';

export default function Footer(){

	const {isAuthenticated} = useContext(AuthContext);
    return(
        <>
    		<footer id="footer"  className="footer">
			<div className="container">
				<div className="footer-menu">
		           	<div className="row">
			           	<div className="col-sm-3">
			           		 <div className="navbar-header">
				                <a className="navbar-brand" href="index.html">Live to <span>Travel</span></a>
				            </div>
			           	</div>
			           	<div className="col-sm-9">
			           		<ul className="footer-menu-item">
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
				</div>
				<div className="hm-footer-copyright">
					<div className="row">
						<div className="col-sm-5">
							<p>
								&copy;copyright. designed and developed by Rosen Todorov
							</p>
						</div>
					</div>
					
				</div>
			</div>

			<div id="scroll-Top">
				<div className="return-to-top">
					<i className="fa fa-angle-up " id="scroll-top" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
				</div>
				
			</div>
			
        </footer>
        </>
    )
}