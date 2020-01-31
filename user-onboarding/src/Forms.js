import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';



const Forms = ({values, errors, touched, status}) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        console.log('status has changed', status);
        status && setUsers( users => [...users, status])
    }, [status]);
    return (
    <div>
        <p>Form js</p>
        <Form>
            <label>
                Name:
                <Field
                    type="text"
                    name="name"
                    placeholder="Name"
                />
                {touched.name && errors.name && <p>{errors.name}</p>}
            </label>
            <br/>
            <label>
                Email:
                <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                />
            </label>
            <br/>
            <label>
                Password:
                <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                />
            </label>
            <br/>
            <Field type="checkbox" name="terms" id="terms" check={values.terms}/>
            <label htmlFor="terms">
                Terms of Service
            </label>
            <br/>
            <button type="submit" >Submit!</button>
        </Form>
        {users.map(user => (
            <ul key={users.id}>
                <li>Name: {users.name}</li>
                <li>Email: {users.email} </li>
                <li>Password: {users.password}</li>
                <li>Terms: {users.terms}</li>
            </ul>
        ))}
    </div> 
    );
  };


const FormikForms = withFormik({
    mapPropsToValues({name, email, password, terms}){
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            terms: terms || false,
        };
    }, 
    validationSchema: Yup.object().shape({
        name: Yup.string().required()
    }),
    handleSubmit(values, {setStatus}) {
        console.log('submitting', values)
        axios.post(
            'https://reqres.in/api/users/', values)
        .then(res => {
            console.log('success', res);
            setStatus(res.data);
            })
        .catch(err =>
            console.log(err.response)
            );
    }
})(Forms);
export default FormikForms;