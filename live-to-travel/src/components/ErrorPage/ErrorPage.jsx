import { Link } from "react-router-dom";
import Path from "../../common/paths";

import '../NotFound/NotFound.css'

export default function NotFound(){

    return(
        <div className="not-found">
            <h1>Ooopss! Something went wrong</h1>
            <p>Please try to refresh the page or use link to go back to home</p>
            <Link to={Path.Home}>Home</Link>
    </div>
    )
}