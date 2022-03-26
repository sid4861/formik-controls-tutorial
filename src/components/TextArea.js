import { ErrorMessage, Field } from 'formik';
import React from 'react'

function TextArea(props) {
    const { label, name, ...rest } = props;
    return (
        <div>
            <label htmlFor={name} >{label}</label>
            <Field as="textarea" name={name} id={name} {...rest} />
            <ErrorMessage name={name} >
                {
                    (errMsg) => {
                        return (
                            <div style={{ color: "red" }} >
                                {errMsg}
                            </div>
                        )
                    }
                }
            </ErrorMessage>
        </div>
    )
}

export default TextArea