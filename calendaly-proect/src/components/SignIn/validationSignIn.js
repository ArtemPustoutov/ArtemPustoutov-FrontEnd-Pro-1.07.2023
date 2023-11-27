import * as Yup from 'yup'
import { emailRegex, passwordRegexp } from '../../common/constatnts';



export const signInvalidation = Yup.object().shape({
    email: Yup
        .string()
        .email()
        .matches(emailRegex,
            'Invalid email.')
        .required('Email is required'),
    password: Yup
        .string()
        .matches(
            passwordRegexp,
            'Invalid password: Minimum eight characters, at least one letter and one number.'
        )
        .required('Password is required'),
});