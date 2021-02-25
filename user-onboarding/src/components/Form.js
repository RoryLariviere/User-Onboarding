import React from 'react';

export default function Form(props) {
    ////////// PROPS //////////
    ////////// PROPS //////////
    ////////// PROPS //////////
    const { values, change, submit, disabled, errors } = props;
    ////////// HELPER FUNCTIONS UTILIZING PROPS //////////
    ////////// HELPER FUNCTIONS UTILIZING PROPS //////////
    ////////// HELPER FUNCTIONS UTILIZING PROPS //////////
    const onSubmit = evt => { // fires when a form is submitted
        evt.preventDefault(); // prevents the event from refreshing the page when fired
        submit(); // invokes the submit prop containing the formSubmit helper function from App.js
    }
    const onChange = evt => { // takes in data from input fields and creates an object
        const { name, value, type, checked } = evt.target; // creating object containing the input data
        const valueToUse = type === 'checkbox' ? checked : value; // ternary to check if checkbox is checked, and if so applying the value to it
        change(name, valueToUse); // submitting the data from user input to inputChange event handler in App.js via the change prop
    }

    return (
        <form className='form container' onSubmit={onSubmit} >
            <div className='form-group submit'>
                <h2>Add a User</h2>

                {/* USES DISABLED PROP TO DETERMINE BUTTONS USABILITY */}
                <button disabled={disabled} >submit</button>

                {/* THIS IS WHERE THE VALIDATION ERRORS WILL BE RENDERED IF APPLICABLE */}
                <div className='errors'>
                    <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.tos}</div>
                </div>
            </div>

            <div className='form-group inputs'>
                <h4>General Information</h4>

                {/* ////////// TEXT INPUTS ////////// */}
                {/* ////////// TEXT INPUTS ////////// */}
                {/* ////////// TEXT INPUTS ////////// */}
                <label>Username&nbsp; {/* &nbsp; is non breaking space HTML entity. prevents new line break. not sure of its use here, look up at later date */}
                    <input 
                        value={values.username}
                        onChange={onChange}
                        name='username'
                        type='text'
                    />
                </label>
                <label>Email
                    <input 
                        value={values.email}
                        onChange={onChange}
                        name='email'
                        type='text'
                    />
                </label>

                {/* ////////// CHECKBOXES ////////// */}
                {/* ////////// CHECKBOXES ////////// */}
                {/* ////////// CHECKBOXES ////////// */}
                <label>Read and Accept the Terms of Service&nbsp;
                    <input
                        type='checkbox'
                        name='tos'
                        onChange={onChange}
                        checked={values.tos}
                    />
                </label>
            </div>
        </form>
    )
}