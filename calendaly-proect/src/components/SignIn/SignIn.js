import { useFormik } from "formik"
import { signInvalidation } from "./validationSignIn"
import {Button, TextField, Typography, Container} from '@mui/material'
import { useNavigate} from 'react-router-dom'
import { useDispatch} from 'react-redux';
import { userSignIn} from "../../store/userSlice";


const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: signInvalidation,
        onSubmit: () => {
            const { email, password} = formik.values
            const user = {
                email,
                password
            }
            if(localStorage.getItem(user.email) !== null) {
                const userInBase = localStorage.getItem(user.email)
                const userData = JSON.parse(userInBase)
                if(userData.email === user.email && userData.password === user.password) {
                    alert('Well come Back')
                    navigate('/ivent-page')
                    dispatch(userSignIn(user))
                }
            }
            else {
                alert('user not foun, registration plz')
                navigate('/sign-up')
            }
        }
    });


    return(
        <>
         <h1>IN</h1>
         <Container>
            <form onSubmit={formik.handleSubmit}>
                <Typography variant="h4" gutterBottom>
                    Sign In
                </Typography>
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">
                    SIGN IN
                </Button>
            </form>

        </Container>
        </>
    )
}
export default SignIn