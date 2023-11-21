import { useState } from "react"


const useForm = (initialValues, onSubmitHandler)=>{
    const [formValues, setFormValues] = useState(initialValues);

    const onChange = (e) =>{
        setFormValues(state => ({...state, [e.target.name]: e.target.value}));
    }

    const onSubmit = (e) =>{
        e.preventDefault();

        onSubmitHandler();
    }

    return {
        formValues,
        onChange,
        onSubmit
    }
}

export default useForm;