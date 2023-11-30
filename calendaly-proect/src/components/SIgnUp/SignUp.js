import { useFormik } from "formik"
import {Button, TextField, Typography, Container} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import { signUpvalidation } from "./validationSignUp"
import { useDispatch, useSelector  } from 'react-redux';
import { userList, userSignUp, userToken} from "../../store/userSlice";
import { useEffect } from 'react';
import { allUser,takeToken  } from "../../store/selectors/selectors";
import { local_token } from "../../common/constatnts";




const SignUp = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const users = useSelector(allUser);
    const templEmail = localStorage.getItem(local_token.TEMP_EMAIL)
    const token = useSelector(takeToken)

    useEffect(() => {
    dispatch(userToken())
    },[dispatch])

    useEffect(() => {
    if(!token) {
    navigate('/sign-in')
    } else {
    navigate('/ivent-page')
    }
    })


    useEffect(() => {
        dispatch(userList());
    }, [dispatch])

    const formik = useFormik({
        initialValues: {
            email: templEmail || '',
            password: '',
            confirmPassword: '',
            username: ''
        },
        validationSchema: signUpvalidation,
        onSubmit: () => {
            const {email, username, password} = formik.values
            const NewUser = {
                email,
                username,
                password, 
            };

            const userExp =  users.find(user => user.email === email)
            if(!userExp) {
                dispatch(userSignUp(NewUser));
                localStorage.removeItem(local_token.TEMP_EMAIL)
                navigate("/ivent-page")
            } else {
                alert('user alredy exist, SIGN IN')
            }
        }
    })

    return(
        <Container>
            <form onSubmit={formik.handleSubmit}>
                <Typography variant="h3" gutterBottom>
                    Sign Up
                </Typography>
                <TextField
                    fullWidth
                    id="username"
                    name="username"
                    label="Username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.username && Boolean(formik.errors.username)}
                    helperText={formik.touched.email && formik.errors.username}
                    margin="normal"
                />
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
                <TextField
                    fullWidth
                    id="confirmPassword"
                    name="confirmPassword"
                    label="Confirm password"
                    type="password"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                    helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">
                    SIGN UP
                </Button>
            </form>
        </Container>
    )
}
export default SignUp