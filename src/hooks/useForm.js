import React, {useState} from 'react';

export const useForm = (initialValue = {}) => {
    const [form, setForm] = useState(initialValue)
    
    const setValue = (key, value) => {
        setForm({
            ...form, 
            [key]: value
        })
    }

    return [form, setValue]
}