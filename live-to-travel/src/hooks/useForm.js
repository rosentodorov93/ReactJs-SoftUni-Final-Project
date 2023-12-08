import { useState } from "react"
import { HasError } from "../utils/hasErrors";


export default function useForm(onSubmitHandler, initialValues, validator){
    const [formValues, setFormValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const onChange = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));

    };


    const onSubmit = (e) =>{
        e.preventDefault();

        if(validator){
            const errorsResult = validator(formValues);
            if(HasError(errorsResult)){
                setErrors(errorsResult);
                return;
            }
        }
        setErrors({});
        onSubmitHandler(formValues);
    }

    return {
        formValues,
        onChange,
        onSubmit,
        errors,
    }
}
