export const BuildPath = (path, params) =>{
    const buildedPath = Object.keys(params).reduce((result, param)=>{
        return result.replace(`:${param}`, params[param]);
    },path)

    return buildedPath;
}