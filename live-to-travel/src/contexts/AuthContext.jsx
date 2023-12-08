import { createContext , useState} from "react";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

import * as authService from '../services/authService';
import usePersistedState from '../hooks/usePersistedState.js'
import { Constants } from "../common/constants.js";
import Path from "../common/paths.js";

const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {

    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState(Constants.persistedStateKey, {});

    const loginSubmitHandler = async(values) =>{

        try {
            const result = await authService.login(values.email, values.password);
            setAuth(result);
            localStorage.setItem(Constants.token, result.accessToken);
            navigate(Path.Home);
        } catch (error) {
            toast(error.message)
        }
    }
    const registerSubmitHandler = async(values) =>{
        try {
            const result = await authService.register(values);
            setAuth(result);
            localStorage.setItem(Constants.token, result.accessToken);
            navigate(Path.Home);   
        } catch (error) {
            navigate(Path.Error);
        }
        
    }
    const logoutHandler = () =>{
        setAuth({});
        localStorage.removeItem(Constants.token);
    }

    const values = {
        _id: auth._id,
        email: auth.email,
        isAuthenticated: !!auth.accessToken,
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
    }

    return(
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;