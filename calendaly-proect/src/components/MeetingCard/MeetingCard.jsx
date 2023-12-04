import  {Alert, Card, CardContent}  from "@mui/material";
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { allMeeting, personalUser, allUser } from "../../store/selectors/selectors";
import { useFormik } from "formik";
import { emailValidation } from "../IventPage/emailValidation";
import { deleteMeeting } from "../../store/meetingSlice";
import Typography from '@mui/material/Typography';






const MeetingCard = () => {

    const dispatch = useDispatch()
    const user = useSelector(personalUser)
    const users = useSelector(allUser)
    const meetings = useSelector(allMeeting)


    const heandleDelate =  (meeting) => {
        dispatch(deleteMeeting(meeting))
    }


    const userQuantity = () => {
        if(users.length === 1) {
            return true
        } else {
            return false
        }
    }
        const formik = useFormik ({
        initialValues: {
            email: ''
        },
        validationSchema: emailValidation,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    })
    return (
        <>
        {userQuantity() === true ? (
        <Alert severity="info">
        Congratulation you are first client, please invite you friends (college’s )
        <form onSubmit={formik.handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                label="Email"
                name="email"
                id="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                helperText={formik.touched.email && formik.errors.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                onBlur={formik.handleBlur}>
            </input>
            <Button type="submit"  size="small" color="error">Send</Button>
        </form>
        </Alert>
    ) : 
    (meetings.length > 0 ?
        <Typography variant="h6" align="center" mt={6}>
            Your meetings
        </Typography> :
        <Typography variant="h6" align="center" mt={6}>
            Create Your meeting
        </Typography>)}
    {meetings.length === 0 ? (<Typography variant="h6" align="center" mt={6}> NO Events </Typography>) : 
    ( meetings.map((meeting) =>(user.username === meeting.selectedUser || user.username === meeting.creater ?
        (<Card key={meeting.name} id={meeting.name} sx={{ minWidth: 275 }}>
            <CardContent>
            <Typography variant="h5" component="div">
                Creater:{meeting.creater}
            </Typography>
            <Typography variant="h5" component="div">
                Invite user:
                {meeting.selectedUser.map((meeting) => (
                    <span className=" selectedUser">{meeting.username}</span>
                ))}
            </Typography>
            <Typography variant="h5" component="div">
                Event name:{meeting.eventName}
            </Typography>
            <Typography variant="h5" component="div">
                Event description:{meeting.description}
            </Typography>
            <Typography>
                Selcted Time :  {JSON.stringify(meeting.selectTime)}
            </Typography>
            <Button onClick={() => heandleDelate(meeting)} variant="contained" color="error">DELETE</Button>
            </CardContent>
        </Card>) :
        <Typography variant="h6" align="center" mt={6}>  You Dont have Meetings</Typography>
    )))}
        </>
    )


}
export default MeetingCard