import { Alert, Button } from "@mui/material";
import { useFormik } from "formik";
import { emailValidation } from "../EventPage/emailValidation";



const UserInvite = () => {

    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: emailValidation,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    })



    return (
        <Alert severity="info">
            Congratulation you are first client, please invite you friends (college’s )
            <form onSubmit={formik.handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    label="Email"
                    name="email"
                    id="email-invite"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    helperText={formik.touched.email && formik.errors.email}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    onBlur={formik.handleBlur}>
                </input>
                <Button type="submit" size="small" color="error">Send</Button>
            </form>
        </Alert>
    )
}
export default UserInvite