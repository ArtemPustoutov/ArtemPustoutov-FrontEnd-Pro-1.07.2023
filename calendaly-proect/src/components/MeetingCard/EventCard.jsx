import { Button, Card, CardContent, Typography } from "@mui/material";
import { useDispatch } from 'react-redux';
import { deleteMeeting } from '../../store/meetingSlice';



const EventCard = ({ meeting }) => {

    const dispatch = useDispatch()

    const heandleDelate = (meeting) => {
        dispatch(deleteMeeting(meeting))
    }
    return (
        (<Card className="meeting-card" key={meeting.name} id={meeting.name} sx={{ minWidth: 275 }}>
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
        </Card>)
    )
}
export default EventCard
