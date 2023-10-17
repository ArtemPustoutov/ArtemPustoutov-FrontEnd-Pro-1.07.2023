import { useFormik } from 'formik'

const SignUp = () => {

    const validate = values => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Required';
        }

        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }

        if (!values.phone) {
            errors.phone = 'Required';
          } else if (!/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){12,14}(\s*)?$/i.test(values.phone)) {
            errors.phone = 'Invalid phone number. must be 12 symbol and number only';
        }
        return errors;
    };

    const formik = useFormik({
        initialValues: {
          email: '',
          name: '',
          phone: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    })

    return(
        <>
        <h1>Sign Up Form</h1>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" onChange={formik.handleChange} value={formik.values.name}/><br />
            {formik.errors.name ? <div>{formik.errors.name}</div> : null}
            <label htmlFor="email">Email Address</label>
            <input id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email}/><br />
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
            <label htmlFor="phone">Phone number</label>
            <input id="phone" name="phone" type="number" onChange={formik.handleChange} value={formik.values.phone}/><br />
            {formik.errors.phone ? <div>{formik.errors.phone}</div> : null}
            <button type="submit">Submit</button>
        </form>
        </>
    )
}
export default SignUp