import React from 'react'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from './FormikControl';

function FormikContainer() {

    const initialValues = {
        email: "",
        description: "",
        time: "",
        frequency: "",
        date: "",
    };

    const validationSchema = Yup.object({
        email: Yup.string().email("not a valid email").required("required"),
        description: Yup.string().required("required"),
    });
    const onSubmit = (values) => {
        console.log(values);
    }
    return (
        <Formik
            initialValues={initialValues} ß
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                (formik) => {
                    return (
                        <Form>
                            <FormikControl
                                label="Email"
                                control="input"
                                name="email"
                                type="email"
                            />
                            <FormikControl
                                label="Description"
                                control="textarea"
                                name="description"
                            />
                            <FormikControl
                                label="Time"
                                name="time"
                                control="select"
                                options={[{ key: "select an option", value: "" }, { key: "AM", value: "AM" }, { key: "PM", value: "PM" }]}
                            />
                            <FormikControl
                                label="Frequency"
                                name="frequency"
                                control="radio"
                                options={[{ key: "once", value: "once" }, { key: "twice", value: "twice" }, { key: "thrice", value: "thrice" }]}
                            />
                            <FormikControl
                                label="Genre"
                                name="genre"
                                control="checkbox"
                                options={[{ key: "thriller", value: "thriller" }, { key: "psychology", value: "psychology" }, { key: "business", value: "business" }]}
                            />
                            <FormikControl
                                label="Date"
                                name="date"
                                control="date"
                            />
                            <button type="submit" >
                                submit
                            </button>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default FormikContainer;