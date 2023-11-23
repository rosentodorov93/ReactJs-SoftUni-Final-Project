 import * as request from '../lib/request';
 const baseUrl = 'http://localhost:3030/users';


 export const login = async(email, password) =>{
    const result = await request.post(`${baseUrl}/login`,{email,password});
    return result;
 }
 export const register = (data) =>{

    if(data.password !== data.confirmPassword){
        throw new Error('Passwords do not match');
    }

    const user = {
        firstName: data.firstName,
        lastName: data.lastName,
        age: data.age,
        email: data.email,
        password: data.password,
    };

    return request.post(`${baseUrl}/register`, user);
 }

 export const logout = () =>{
    return request.get(`${baseUrl}/logout`)
 }