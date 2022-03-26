import { ErrorMessage, Field } from 'formik';
import React from 'react'

function Select(props) {
    const { label, name, options, ...rest } = props;

    return (
        <div>
            <label htmlFor={name} >{label}</label>
            <Field as="select" name={name} id={name} {...rest} >
                {
                    options.map(
                        (option) => {
                            return (
                                <option key={option.value} value={option.value} >
                                    {option.key}
                                </option>
                            )
                        }
                    )
                }
            </Field>
            <ErrorMessage name={name} >
                {
                    (errMsg) => {
                        return (
                            <div>{errMsg}</div>
                        );
                    }
                }
            </ErrorMessage>
        </div>
    )
}

export default Select