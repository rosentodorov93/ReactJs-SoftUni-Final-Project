import { createContext , useState} from "react";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

import * as authService from '../services/authService';
import usePersistedState from '../hooks/usePersistedState.js'
import Path from "../common/paths.js";

const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {

    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});

    const loginSubmitHandler = async(values) =>{

        try {
            const result = await authService.login(values.email, values.password);
            setAuth(result);
            localStorage.setItem('accessToken', result.accessToken);
            navigate(Path.Home);
        } catch (error) {
            toast(error.message)
        }
    }
    const registerSubmitHandler = async(values) =>{
        const result = await authService.register(values);
        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken);
        navigate(Path.Home);
    }
    const logoutHandler = () =>{
        setAuth({});
        localStorage.removeItem('accessToken');
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