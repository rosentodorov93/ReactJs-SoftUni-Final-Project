import * as constants from '../common/errorMesages';

const getErrorsObj = (input) =>{
    const result = Object.keys(input).reduce((acc, curr) =>{
        acc[curr] = [];
        return acc;
    },{})
    return result;
}
const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const urlTest = /^((https?):\/\/)/;


export const createEditForm = (values) =>{
    let errorsObj = getErrorsObj(values);

    if(values.title === ''){
        errorsObj.title.push(constants.PostErrorMesages.titleRequired)
    }
    if(values.title.length < 3 || values.title.length > 100){
        errorsObj.title.push(constants.PostErrorMesages.titileRange)
    }

    if(values.imageUrl === ''){
        errorsObj.imageUrl.push(constants.PostErrorMesages.imageUrlRequired);
    }
    if(!urlTest.test(values.imageUrl)){
        errorsObj.imageUrl.push(constants.PostErrorMesages.validImageUrl);
    }

    if(values.content === ""){
        errorsObj.content.push(constants.PostErrorMesages.contentRequired)
    }

    return errorsObj;
}

export const registerForm = (values) =>{
    let errorsObj = getErrorsObj(values);

    if(values.firstName === ''){
        errorsObj.firstName.push(constants.UserErrorMesages.firstnameRequired)
    }
    if(values.firstName.length < 2 || values.firstName.length > 30){
        errorsObj.firstName.push(constants.UserErrorMesages.firstnameRange)
    }

    if(values.lastName === ''){
        errorsObj.lastName.push(constants.UserErrorMesages.lastnameRequired)
    }
    if(values.lastName.length < 2 || values.lastName.length > 30){
        errorsObj.lastName.push(constants.UserErrorMesages.lastnameRange)
    }

    if(values.email === ''){
        errorsObj.email.push(constants.UserErrorMesages.emailRequired);
    }
    if(!emailTest.test(values.email)){
        errorsObj.email.push(constants.UserErrorMesages.emailValidate);
    }

    if(values.password === ""){
        errorsObj.password.push(constants.UserErrorMesages.passwordRequired)
    }

    if(values.confirmPassword === ""){
        errorsObj.confirmPassword.push(constants.UserErrorMesages.confirmPasswordRequired)
    }
    if(values.password !== values.confirmPassword){
        errorsObj.password.push(constants.UserErrorMesages.passwordMisMatch)
    }

    return errorsObj;
}

export const loginForm = (values) =>{
    let errorsObj = getErrorsObj(values);

    if(values.email === ''){
        errorsObj.email.push(constants.UserErrorMesages.emailRequired);
    }
    if(!emailTest.test(values.email)){
        errorsObj.email.push(constants.UserErrorMesages.emailValidate);
    }

    if(values.password === ""){
        errorsObj.password.push(constants.UserErrorMesages.passwordRequired)
    }

    return errorsObj;
}

export const commentsForm = (values) =>{
    let errorsObj = getErrorsObj(values);

    if(values.text === ''){
        errorsObj.text.push(constants.CommentsErrorMesages.textRequired);
    }
    return errorsObj;
}