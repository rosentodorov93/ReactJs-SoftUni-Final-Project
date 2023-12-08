export const HasError = (errObj)=>{
    return Object.values(errObj).some(x => x.length > 0)
}