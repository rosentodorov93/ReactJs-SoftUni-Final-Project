import * as request from "../lib/request";
const baseUrl = 'http://localhost:3030/data/comments';


export const getById = async(blogId) =>{
    const query = new URLSearchParams(
        {
            where: `blogId="${blogId}"`,
            load: `owner=_ownerId:users`,
        }
    )

    const result = await request.get(`${baseUrl}?${query}`);
    return result;
}

export const create = (data) =>{
    return request.post(baseUrl, data);
}