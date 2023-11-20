import * as Yup from 'yup'

const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)


export const signUpvalidation = Yup.object().shape({
    email: Yup
        .string()
        .email()
        .matches(emailRegex,
            'Invalid email.')
        .required('Email is required'),
    password: Yup
        .string()
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            'Invalid password: Minimum eight characters, at least one letter and one number.'
        )
        .required('Password is required'),
    confirmPassword: Yup
        .string()
        .oneOf(
            [Yup.ref('password'), null],
            'Passwords must match'
        )
        .required('Confirmation is required'),
});