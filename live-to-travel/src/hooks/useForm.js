import { useState } from "react"


export default function useForm(onSubmitHandler, initialValues){
    const [formValues, setFormValues] = useState(initialValues);

    const onChange = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));

    };


    const onSubmit = (e) =>{
        e.preventDefault();

        onSubmitHandler(formValues);
    }

    return {
        formValues,
        onChange,
        onSubmit
    }
}
