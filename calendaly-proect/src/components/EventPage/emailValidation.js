import * as Yup from 'yup'
import { emailRegex,} from '../../common/constatnts'



export const emailValidation = Yup.object().shape({
    email: Yup
        .string()
        .email()
        .matches(emailRegex,
            'Invalid email.')
        .required('Email is required'),
});