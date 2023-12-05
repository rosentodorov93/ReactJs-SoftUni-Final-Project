import { useState } from "react"


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
            if(Object.values(errorsResult).some(x => x.length > 0)){
                setErrors(errorsResult);
                return;
            }
        }

        onSubmitHandler(formValues);
    }

    return {
        formValues,
        onChange,
        onSubmit,
        errors,
    }
}
