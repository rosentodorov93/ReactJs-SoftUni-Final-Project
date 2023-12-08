import * as request from "../lib/request";
const baseUrl = 'http://localhost:3030/data/blogs';


export const create = async(data) =>{
   const result = request.post(baseUrl, data);
   return result;
}

export const getAll = async(category='', search='') =>{
    let query;

    if(category && search){
        query = 'where=' + encodeURIComponent(`category="${category}" AND title LIKE "${search}"`);
    }else if(search && !category){
        query= 'where=' + encodeURIComponent(`title LIKE "${search}"`);
    }else if(category && !search){
        query = 'where=' + encodeURIComponent(`category="${category}"`);
    }

    let result;
    
    if(query){
        const url = `${baseUrl}?${query}`
        result = await request.get(url);
    }else{
        result = await request.get(baseUrl);
    }

    return result
}

export const getMine = async(userId) =>{
    const query = new URLSearchParams(
        {
            where: `_ownerId="${userId}"`,
        }
    )

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
}

export const getLatestsThree = async() =>{
    const query = 'sortBy=' + encodeURIComponent(`_createdOn desc`) + '&offset=0&pageSize=3'

    const url = `${baseUrl}?${query}`
    const result = await request.get(url);

    return result;
}

export const getOne = async(id) =>{
    const query = new URLSearchParams(
        {
            load: `owner=_ownerId:users`,
        }
    )

    const url = `${baseUrl}/${id}?${query}`;
    const result = await request.get(url);
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
