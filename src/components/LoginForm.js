import React from 'react'
import { Formik, Form } from "formik";
import FormikControl from './FormikControl';
import * as Yup from "yup";

function LoginForm() {
    return (
        <Formik
            initialValues={{
                email: "",
                password: ""
            }}
            validationSchema={Yup.object({
                email: Yup.string().email("invalid email").required("required"),
                password: Yup.string().required("required")
            })}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            <Form>
                <FormikControl
                    control="input"
                    type="email"
                    label="email"
                    name="email"
                />
                <FormikControl
                    control="input"
                    type="password"
                    label="password"
                    name="password"
                />
                <button type="submit" >
                    Submit
                </button>
            </Form>
        </Formik>
    )
}

export default LoginForm