import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { logOutUser, userList, userState } from "../../store/userSlice";
import { allMeeting, allUser, personalUser } from "../../store/selectors/selectors";
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import  {Alert, Card, CardContent, Modal}  from "@mui/material";
import { useFormik } from "formik";
import { emailValidation } from "./emailValidation";
import MeetingForm from "../MeetingForm/MeetingForm";
import { deleteMeeting } from "../../store/meetingSlice";

const IventPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(personalUser)
    const users = useSelector(allUser)
    const [open, setOpen] = useState(false)
    const meetings = useSelector(allMeeting)

    const heandleOpenModal = () => {
        setOpen(true);
    };
    const heandleCloseModal = () => {
        setOpen(false);
    };

    const heandleDelate = (meeting) => {
        dispatch(deleteMeeting(meeting))
    }

    useEffect(() => {
        dispatch(userState())
    },[dispatch])




    let logOut = () => {
        dispatch(logOutUser())
        navigate('/sign-in')
    }

    useEffect(() => {
        dispatch(userList())
    },[dispatch])

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

    return(
        <>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                HEllo {user.email}
            </Typography>
            <Button variant="contained" color="success" disabled= {userQuantity()} onClick={heandleOpenModal} >Create Event</Button>
            <Button color="inherit" onClick={logOut}>logOut</Button>
            </Toolbar>
        </AppBar>
        </Box>
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
        <Typography variant="h6" align="center" mt={6}>  Create Your meeting</Typography>}
        <Modal
        open={open}
        onClose={heandleCloseModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box class="modal" sx={{ width: 400 }}>
            <h2 id="parent-modal-title">Create new Event</h2>
            <MeetingForm onClose={heandleCloseModal}/>
        </Box>
        </Modal>
        {meetings.length === 0 ? (<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> NO Events </Typography>) : 
        (meetings.map((meeting) =>(
            <Card key={meeting.id} id={meeting.id} sx={{ minWidth: 275 }}>
                <CardContent>
                <Typography variant="h5" component="div">
                    Invite user:{meeting.text.selectedUser}
                </Typography>
                <Typography variant="h5" component="div">
                    Event name:{meeting.text.eventName}
                </Typography>
                <Typography variant="h5" component="div">
                    Event description:{meeting.text.description}
                </Typography>
                <Button onClick={() => heandleDelate(meeting)} variant="contained" color="error">DELETE</Button>
                </CardContent>
            </Card>
        )))}
        </>
    )
}

export default IventPage