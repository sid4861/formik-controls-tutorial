import { ErrorMessage, Field } from 'formik';
import React from 'react'

function CheckboxGroup(props) {
    const { label, name, options, ...rest } = props;
    return (
        <div>
            <label >{label}</label>
            <Field name={name} {...rest} >
                {
                    ({ field }) => {
                        return options.map((option) => {
                            return (
                                <React.Fragment>
                                    <input
                                        type="checkbox"
                                        id={option.name}
                                        {...field}
                                        value={option.value}
                                        // checked={Boolean(field.value.includes(option.value))}
                                    />
                                    <label htmlFor={option.name} >{option.key}</label>
                                </React.Fragment>
                            )
                        })
                    }
                }
            </Field>
            <ErrorMessage name={name} >
                {
                    (errMsg) => {
                        return (
                            <div>
                                {errMsg}
                            </div>
                        )
                    }
                }
            </ErrorMessage>
        </div>
    )
}

export default CheckboxGroup