import { ErrorMessage, Field } from 'formik';
import React from 'react'

function Input(props) {
    const { label, name, type, ...rest } = props;
    return (
        <div>
            <label htmlFor={name} >{label}</label>
            <Field name={name} id={name} type={type} {...rest} />
            <ErrorMessage name={name}>
                {(errMsg) => {
                    return (
                        <div style={{ color: "red" }} >
                            {errMsg}
                        </div>
                    )
                }}
            </ErrorMessage>
        </div>
    )
}

export default Input