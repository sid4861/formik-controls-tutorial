import { Formik, Form } from 'formik'
import React from 'react'
import * as Yup from "yup";
import FormikControl from './FormikControl';

function CouseEnrollmentForm() {
    return (
        <Formik
            initialValues={{
                email: "",
                bio: "",
                course: "",
                skills: [],
                date: ""
            }}
            validationSchema={{
                email: Yup.string().required("required"),
                bio: Yup.string().required("required"),
                course: Yup.string().required("required"),
            }}
        >
            <Form>
                <FormikControl
                    type="email"
                    name="email"
                    label="Email"
                    control="input"
                />
                <FormikControl
                    type="text"
                    name="bio"
                    label="Bio"
                    control="input"
                />
                <FormikControl
                    name="course"
                    label="Select course"
                    control="select"
                    options={[{ key: "select course", value: "" }, { key: "React", value: "React" }, { key: "Node", value: "Node" }]}
                />
                <FormikControl
                    name="skills"
                    label="Select skills"
                    control="checkbox"
                    options={[{ key: "html", value: "html" }, { key: "css", value: "css" }, { key: "js", value: "js" }]}
                />
                {/* <FormikControl
                    label="Date"
                    name="date"
                    control="date"
                /> */}
                <button type='submit' >
                    Submit
                </button>
            </Form>
        </Formik>
    )
}

export default CouseEnrollmentForm