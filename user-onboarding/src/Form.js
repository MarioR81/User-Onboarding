import React, {useState} from 'react';
import {withFormik} from 'formik';



const Form = ({values, handleChange}) => {
    return (
    <div>
        <p>Form js</p>
        <form>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                />
            </label>
            <button>Submit!</button>
        </form>
    </div> 
    );
  };


const FormikForm = withFormik({
    mapPropsToValues(props){
        return {
            name: props.name
        }
    }
})(Form);
export default FormikForm;