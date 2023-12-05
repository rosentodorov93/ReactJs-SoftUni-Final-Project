const getErrorsObj = (input) =>{
    const result = Object.keys(input).reduce((acc, curr) =>{
        acc[curr] = [];
        return acc;
    },{})
    return result;
}


export const createEditForm = (values) =>{
    let errorsObj = getErrorsObj(values);
    const urlValidate = '(\b(https?|ftp|file)://)?[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]';


    if(values.title === ''){
        errorsObj.title.push('Title is required')
    }
    if(values.title.length < 3 || values.title.length > 100){
        errorsObj.title.push("Title must be between 3 and 100 characters long")
    }

    if(values.imageUrl === ''){
        errorsObj.imageUrl.push("Please add image");
    }
    if(!urlValidate.test(values.imageUrl)){
        errorsObj.imageUrl.push("Please add valid image Url");
    }

    if(values.category === ""){
        errorsObj.category.push("Please select category")
    }

    if(values.content === ""){
        errorsObj.content.push("Your article must have content.")
    }

    return errorsObj;
}

export const registerForm = (values) =>{
    let errorsObj = getErrorsObj(values);
    const emailValidate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(values.firstName === ''){
        errorsObj.firstName.push('First name is required')
    }
    if(values.firstName.length < 2 || values.title.length > 30){
        errorsObj.firstName.push("First name must be between 2 and 30 characters long")
    }

    if(values.lastName === ''){
        errorsObj.lastName.push('Lase name is required')
    }
    if(values.lastName.length < 2 || values.title.length > 30){
        errorsObj.lastName.push("Last name must be between 2 and 30 characters long")
    }

    if(values.email === ''){
        errorsObj.email.push("Please add email");
    }
    if(!emailValidate.test(values.email)){
        errorsObj.email.push("Please add valid email address");
    }

    if(values.password === ""){
        errorsObj.password.push("Password is required")
    }

    if(values.confirmPassword === ""){
        errorsObj.confirmPassword.push("Confirm password is required")
    }
    if(values.password !== values.confirmPassword){
        errorsObj.password.push('Passwords do not match')
    }

    return errorsObj;
}

export const loginForm = (values) =>{
    let errorsObj = getErrorsObj(values);
    const emailValidate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(values.email === ''){
        errorsObj.email.push("Please add email");
    }
    if(!emailValidate.test(values.email)){
        errorsObj.email.push("Please add valid email address");
    }

    if(values.password === ""){
        errorsObj.password.push("Password is required")
    }

    return errorsObj;
}