const baseUrl = 'http://localhost:3030/jsonstore/blogs';

export const create = async(data) =>{
    const response = await fetch(baseUrl,{
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(data),
    })

    const result = await response.json();
    return result;
}

export const getAll = async() =>{
    const response = await fetch(baseUrl);
    const result = await response.json();

    return Object.values(result);
}

export const getOne = async(id) =>{
    const response = await fetch(`${baseUrl}/${id}`);
    const result = response.json();

    return result;
}

export const update = async(id, data) =>{
    const response = await fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    const result = await response.json();

    return result;
}