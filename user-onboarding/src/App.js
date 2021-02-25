import './App.css';
import Form from './components/Form';
import UserCard from './components/User';
import formSchema from './validation/formSchema';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';

////////// INITIAL STATES //////////
////////// INITIAL STATES //////////
////////// INITIAL STATES //////////

// default form values EMPTY
const initialFormValues = {
  username: '',
  email: '',
  tos: false
}
// default values for yup errors
const initialFormErrors = {
  username: '',
  email: '',
  tos: ''
}
// default state for submit button
const initialDisabled = true;
// default state for users array
const initialUsers = [];

export default function App() {
  ////////// STATES //////////
  ////////// STATES //////////
  ////////// STATES //////////
  const [users, setUsers] = useState(initialUsers); // array of user objects
  const [formValues, setFormValues] = useState(initialFormValues); // object containing info passed in through user input
  const [formErrors, setFormErrors] = useState(initialFormErrors); // object containing yup errors if form is inproperly filled out
  const [disabled, setDisabled] = useState(initialDisabled); // used to disable submit button on form untill all yup conditions are met 
  console.log(users)
  ////////// HELPERS //////////
  ////////// HELPERS //////////
  ////////// HELPERS //////////
  const getUsers = () => { // gets user data from api to set to users state
    axios.get(`https://reqres.in/api/users`)
    .then(res => setUsers(res.data.data))
    .catch(err => console.log(err))
  }
  const postNewUser = newUser => { // invokes form submition function and posts the resulting data to the provided api
    axios.post(`https://reqres.in/api/users`, newUser) // takes 2 arguments, the api link and the callback being passed in
         .then(res => setUsers([res.data.data, ...users])) // using spread attribute to expand the key/value pairs of the users array to include the new data we are passing to it
         .catch(err => console.log(err))
    setFormValues(initialFormValues); // resetting formValues back to its initial state so it can be used for new user data submissions via the form
  }
  ////////// EVENT HANDLERS //////////
  ////////// EVENT HANDLERS //////////
  ////////// EVENT HANDLERS //////////
  const inputChange = (name, value) => { // validating user inputs with yup
    yup.reach(formSchema, name).validate(value).then(() => setFormErrors({...formErrors, [name]: ''})) // takes name and formSchema to compare inputs with yup rules, if rules are met keep formErrors state same as initial
       .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]})) // if any passed data does not pass validation, get the invalid key and return the error by updating formErrors accordingly
    setFormValues({...formValues, [name]: value}) // updates formValues with validated data
  }
  const formSubmit = () => { // submits user input with new user data and makes a newUser object
    const newUser = {
      username: formValues.username.trim(), // trim is used to remove any white space potentially resulting from user input
      email: formValues.email.trim(),
      tos: ['tos'].filter(tos => formValues[tos]) // since tos has to be a check box and not radio button, must make array to filter through and apply users input
    }
    postNewUser(newUser); // invoking postNewUser to pass results of newUser into our post helper function
  }
  ////////// SIDE EFFECTS //////////
  ////////// SIDE EFFECTS //////////
  ////////// SIDE EFFECTS //////////
  useEffect(()=>{ // side effect handler for getUsers axios call
    getUsers();
  }, [])

  useEffect(()=>{ // side effect handler for formSchema validation check, adjusts status of 'disabled' every time 'formValues' changes
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
      <header><h1>User Onboarding App</h1></header>

      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {
        users.map(userInfo => {
          return (
            <UserCard key={userInfo.id} details={userInfo} />
          )
        })
      }
    </div>
  );
}


