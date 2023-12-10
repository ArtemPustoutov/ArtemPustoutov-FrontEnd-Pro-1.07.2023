import { Modal, TextField } from "@mui/material"
import { useState } from "react"
import { personalUser, allUser } from "../../store/selectors/selectors"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux"
import { useFormik } from "formik";
import { settingsValidation } from "./settingsValidation";
import { userUpdate } from "../../store/userSlice";

const SettingsUser = ({ onClose }) => {
    const user = useSelector(personalUser)
    const users = useSelector(allUser);

    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()
    const heandleOpenModal = () => {
        setOpen(true);
    };
    const heandleCloseModal = () => {
        setOpen(false);
    };
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            emailNew: '',
            passwordNew: ''
        },
        validationSchema: settingsValidation,
        onSubmit: () => {

            const { email, password, emailNew, passwordNew } = formik.values
            const userExp = users.find(user => user.email === email && user.password === password)
            const updateUser = {
                email: emailNew,
                password: passwordNew,
                username: userExp.username
            };
            if (userExp) {
                dispatch(userUpdate(updateUser));
                onClose()
            } else {
                alert('Email not Found')
            }

        }
    })
    return (
        <>
            <Button onClick={heandleOpenModal}> Settings</Button>
            <Modal
                open={open}
                onClose={heandleCloseModal}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box className="modal" sx={{ width: 400 }}>
                    <h1 id="parent-modal-title"> Settings: {user.username}</h1>
                    <h3>if you want change current email or passsword fill in the required fields</h3>
                    <h4>Current Email</h4>
                    <form onSubmit={formik.handleSubmit}>
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
                        <h4>New Email</h4>
                        <TextField
                            fullWidth
                            id="emailNew"
                            name="emailNew"
                            label="new Email"
                            type="email"
                            value={formik.values.emailNew}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            margin="normal"
                        />
                        <h4>Current password</h4>
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
                        <h4>New Password</h4>
                        <TextField
                            fullWidth
                            id="passwordNew"
                            name="passwordNew"
                            label="New password"
                            type="password"
                            value={formik.values.passwordNew}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                            margin="normal"
                        />
                        <Button type="submit" variant="contained" color="primary"> OK</Button>
                    </form>
                    <Button variant="contained" color="success" onClick={heandleCloseModal}> Cancel</Button>
                </Box>
            </Modal>
        </>

    )
}
export default SettingsUser