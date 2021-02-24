import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import React, { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';

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
const [users, setUsers] = useState(initialUsers); // array of user objects
const [formValues, setFormValues] = useState(initialFormValues); // object containing info passed in through user input
const [formErrors, setFormErrors] = useState(initialFormErrors); // object containing yup errors if form is inproperly filled out
const [disabled, setDisabled] = useState(initialDisabled); // used to disable submit button on form untill all yup conditions are met

  return (
    <div className="App">

    </div>
  );
}


