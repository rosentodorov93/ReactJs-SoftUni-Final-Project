import * as request from "../lib/request";
const baseUrl = 'http://localhost:3030/jsonstore/blogs';


export const create = async(data) =>{
   const result = request.post(baseUrl, data);
   return result;
}

export const getAll = async() =>{
    const result = await request.get(baseUrl);

    return Object.values(result);
}

export const getOne = async(id) =>{
    const result = request.get(`${baseUrl}/${id}`);
    return result;
}

export const update = async(id, data) =>{
    const result = request.put(`${baseUrl}/${id}`, data);
    return result;
}
export const remove = async(id) =>{
    const result = await request.remove(`${baseUrl}/${id}`);
    return result;
}