import React from "react";

const handleValidation = (error, watch, name) => {
    let classValidation = "";
    if (error) {
        classValidation = "invalid--input"
    }
    if (!error && watch(name)) {
        classValidation = "valid--input"
    }
    return classValidation
}

function Input({
    name,
    register,
    watch,
    errors,
    required,
    type = "text",
    label = true,
    className,
    ...props
}) {
    return (
        <React.Fragment>
            {label && <label htmlFor={name}>email</label>}
            <input
                type={type}
                id={name}
                {...register(name, required)}
                className={`input ${handleValidation(errors[name], watch, name)} ${className}`}
                {...props}
            />
            {errors[name]?.message}
        </React.Fragment>
    );
}

export default Input;
