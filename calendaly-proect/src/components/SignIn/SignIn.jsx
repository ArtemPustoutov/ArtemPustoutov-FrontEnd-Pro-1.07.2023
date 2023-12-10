import { useFormik } from "formik"
import { signInvalidation } from "./validationSignIn"
import { Button, TextField, Typography, Container } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { userSignIn } from "../../store/userSlice";
import { allUser, takeToken } from "../../store/selectors/selectors";
import { useEffect } from 'react';
import { userList, userToken } from "../../store/userSlice";
import { Link } from "react-router-dom"
import './sign.css'



const SignIn = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector(allUser);
    const token = useSelector(takeToken)

    useEffect(() => {
        dispatch(userToken())
    }, [dispatch])

    useEffect(() => {
        if (token) {
            navigate('/event-page')
        }
    }, [token, navigate])


    useEffect(() => {
        dispatch(userList());
    }, [dispatch])


    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: signInvalidation,
        onSubmit: () => {
            const { email, password } = formik.values
            const userExp = users.find(user => user.email === email && user.password === password)
            if (userExp) {
                dispatch(userSignIn(userExp));
                navigate("/event-page")
            } else {
                alert('user not found , SIGN UP')
                navigate('/sign-up', { state: { email: formik.values.email } })
            }
        }
    });


    return (
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
                    <span className="sign-up-link"><Link to={{
                        pathname: '/sign-up',
                        state: { email: formik.values?.email }
                    }
                    }>Dont have account? Sign-UP!</Link></span>
                </form>

            </Container>
        </>
    )
}
export default SignIn