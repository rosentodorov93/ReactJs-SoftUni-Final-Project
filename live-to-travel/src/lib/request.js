const request = async(method, url, data)=>{

    let options = {};

    if(data){
        options.headers = {
            "Content-Type": "application/json"
        };
        options.body = JSON.stringify(data);
    };

    const token = localStorage.getItem('auth');
    if(token){
        options.headers = {
            ...options,
            "X-Authorization": token,
        }
    }

    const resposne = await fetch(url, {
        method,
        ...options,
    });

    if(resposne.status === 204){
        return {};
    }

    const result = await resposne.json();

    if(!resposne.ok){
        throw result;
    }

    return result;

}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const remove = request.bind(null, 'DELETE');