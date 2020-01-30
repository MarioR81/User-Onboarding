import React, {useState} from 'react';
import {withFormik, Form, Field} from 'formik';



const Forms = ({values, handleChange}) => {
    return (
    <div>
        <p>Form js</p>
        <Form>
            <label>
                Name:
                <Field
                    type="text"
                    name="name"
                />
            </label>
            <br/>
            <label>
                Email:
                <Field
                    type="email"
                    name="email"
                />
            </label>
            <br/>
            <label>
                Password:
                <Field
                    type="password"
                    name="password"
                />
            </label>
            <br/>
            <button>Submit!</button>
        </Form>
    </div> 
    );
  };


const FormikForms = withFormik({
    mapPropsToValues({name, email, password}){
        return {
            name: name || "",
            email: "",
            password: "",
        };
    }
})(Forms);
export default FormikForms;