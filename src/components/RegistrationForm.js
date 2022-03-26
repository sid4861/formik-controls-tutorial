import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup";
import FormikControl from './FormikControl';

function RegistrationForm() {
    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
                confirmPassword: "",
                modeOfContact: "",
                telephone: "",
            }}
            validationSchema={Yup.object({
                email: Yup.string().email("invalid email").required("required"),
                password: Yup.string().required("required"),
                confirmPassword: Yup.string().oneOf([Yup.ref("password"), ""], "Password do not match").required("required"),
                modeOfContact: Yup.string().required("required"),
                telephone: Yup.string().when('modeOfContact', {
                    is: "telephone",
                    then: Yup.string().required("required")
                })
            })}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {
                (formik) => (
                    <Form>
                        <FormikControl
                            name="email"
                            type="email"
                            control="input"
                            label="Email"
                        />
                        <FormikControl
                            name="password"
                            label="Password"
                            type="password"
                            control="input"
                        />
                        <FormikControl
                            name="confirmPassword"
                            label="Confirm password"
                            type="password"
                            control="input"
                        />
                        <FormikControl
                            name="modeOfContact"
                            label="Mode of contact"
                            control="radio"
                            options={[{key: "telephone", value: "telephone"}, {key: "email", value: "email"}]}
                        />
                        <FormikControl
                            name="telephone"
                            label="telephone"
                            control="input"
                        />
                    </Form>
                )

            }
        </Formik>
    )
}

export default RegistrationForm