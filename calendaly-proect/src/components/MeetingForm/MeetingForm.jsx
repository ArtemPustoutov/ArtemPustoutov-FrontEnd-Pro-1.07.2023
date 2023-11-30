import { Container } from "@mui/material"
import { useFormik } from "formik"
import { meetingValidation } from "./meetingValidation"
import {TextField} from "@mui/material"
import {Button} from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { allUser, personalUser } from "../../store/selectors/selectors"
import {InputLabel} from "@mui/material"
import {Select} from "@mui/material"
import {MenuItem} from "@mui/material"
import { useEffect } from "react"
import {FormControl}from "@mui/material"
import { userList } from "../../store/userSlice"
import { addMeeting } from "../../store/meetingSlice"
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'

const MeetingForm = ({onClose}) => {
     const dispatch = useDispatch()
     const users = useSelector(allUser)
      const user = useSelector(personalUser)

    useEffect(() => {
        dispatch(userList());
    }, [dispatch])

    const formik = useFormik({
        initialValues: {
            eventName: "",
            description: "",
            selectedUser: "",
            selectTime: '',

        },
        validationSchema: meetingValidation,
        onSubmit: (values) => {
            const valuesCreater = {
                eventName: values.eventName,
                description: values.description,
                selectedUser: values.selectedUser,
                selectTime: values.selectTime,
                creater: user.username
            }
            dispatch(addMeeting(valuesCreater))
            onClose()
        }
    })

    return(
        <Container>
            <form onSubmit={formik.handleSubmit}>
            <FormControl fullWidth>
            <DateTimePicker
                value={formik.values.selectTime}
                onChange={(value) =>{
                    formik.setFieldValue("selectTime", value, true)
                    console.log(value)
                } }
                name="selectTime"
                id="selectTime"
                type="datetime-local"
            />
            </FormControl>
                <TextField
                    fullWidth
                    id="eventName"
                    name="eventName"
                    label="Event Name"
                    value={formik.values.eventName}
                    onChange={formik.handleChange}
                    error={formik.touched.eventName && Boolean(formik.errors.eventName)}
                    helperText={formik.touched.eventName && formik.errors.eventName}
                />
            <TextField
                fullWidth
                id="description"
                name="description"
                label="Description"
                value={formik.values.description}
                onChange={formik.handleChange}
                error={formik.touched.description && Boolean(formik.errors.description)}
                helperText={formik.touched.description && formik.errors.description}
            />
            <FormControl fullWidth>
                <InputLabel id="selectedUser-label">Select User</InputLabel>
                    <Select
                        labelId="selectedUser-label"
                        id="selectedUser"
                        name="selectedUser"
                        label="Select User"
                        value={formik.values.selectedUser}
                        onChange={formik.handleChange}
                        error={
                        formik.touched.selectedUser &&
                        Boolean(formik.errors.selectedUser)
                        }
                    >
                        {users.map((user) => (
                        <MenuItem key={user.email} value={user.username}>
                            {user.username}
                        </MenuItem>
                        ))}
                    </Select>
            </FormControl>
            <Button type="sumbit" variant="contained" color="success" >Create Event</Button>
            </form>
        </Container>
    )

}

export default MeetingForm