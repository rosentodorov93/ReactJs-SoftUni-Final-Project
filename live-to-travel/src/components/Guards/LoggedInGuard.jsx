import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import AuthContext from "../../contexts/AuthContext";
import Path from "../../common/paths";


export default function LoggedInGuard(){
    const {isAuthenticated} = useContext(AuthContext);

    if(isAuthenticated){
        return <Navigate to={Path.Home}/>
    }

    return <Outlet/>
}