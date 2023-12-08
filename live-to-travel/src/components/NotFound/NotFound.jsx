import { Link } from "react-router-dom";
import Path from "../../common/paths";

import './NotFound.css'

export default function NotFound(){

    return(
        <div className="not-found">
        <h1>404 - Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link data-testid='link' to={Path.Home}>Home</Link>
    </div>
    )
}