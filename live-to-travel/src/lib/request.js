const request = async(method, url, data)=>{

    let options = {};

    if(data){
        options.headers = {
            "Content-Type": "application/json"
        };
        options.body = JSON.stringify(data);
    };

    const resposne = await fetch(url, {
        method,
        ...options,
    });

    if(!resposne.ok){
        throw new Error('Eror');
    }

    const result = await resposne.json();

    return result;

}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const remove = request.bind(null, 'DELETE');