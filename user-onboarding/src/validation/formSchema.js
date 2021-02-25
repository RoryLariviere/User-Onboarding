import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup.string().trim().required('Username is required').min(5, 'Username must be at least 5 characters long'),
    email: yup.string().email('Must be a valid email address').required('Email is required'),
    tos: yup.boolean().required('You must read and agree to the Terms of Service')
})

export default formSchema;