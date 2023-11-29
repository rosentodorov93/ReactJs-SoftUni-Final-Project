export const createEditForm = (values) =>{
    let errorsObj = Object.keys(values).reduce((acc, curr) =>{
        acc[curr] = [];
        return acc;
    },{})

    if(values.title === ''){
        errorsObj.title.push('Title is required')
    }
    if(values.title.length < 3 || values.title.length > 100){
        errorsObj.title.push("Title must be between 3 and 100 characters long")
    }

    return errorsObj;
}