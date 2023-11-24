import { createContext , useState} from "react";
import { useNavigate } from "react-router-dom";

import * as authService from './services/authService';

const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {

    const navigate = useNavigate();
    const [auth, setAuth] = useState(()=>{
        localStorage.removeItem('auth');
        return {};
    });

    const loginSubmitHandler = async(values) =>{
        const result = await authService.login(values.email, values.password);
        setAuth(result);
        localStorage.setItem('auth', result.accessToken)
        navigate('/');
        console.log(result);
    }
    const registerSubmitHandler = async(values) =>{
        const result = await authService.register(values);
        setAuth(result);
        localStorage.setItem('auth', result.accessToken)
        navigate('/');
    }
    const logoutHandler = () =>{
        setAuth({});
        localStorage.removeItem('auth');
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
        <AuthContext.Provider values={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;