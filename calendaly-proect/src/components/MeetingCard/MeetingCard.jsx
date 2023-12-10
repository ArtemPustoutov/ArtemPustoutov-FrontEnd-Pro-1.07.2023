import { useSelector } from "react-redux";
import { allMeeting, personalUser, allUser } from "../../store/selectors/selectors";
import Typography from '@mui/material/Typography';
import EventCard from "./EventCard";
import UserInvite from "./UserInvite";
import React from "react";






const MeetingCard = () => {

    const user = useSelector(personalUser)
    const users = useSelector(allUser)
    const meetings = useSelector(allMeeting)
    const text = (
        <span>
            Create Your meeting <br />
            No Events
        </span>
    )

    return (
        <>
            {users.length === 1 ? <UserInvite /> :
                (<Typography variant="h6" align="center" mt={6}>
                    {meetings.length > 0 ? "Your meetings" : text}
                </Typography>)}
            {meetings.map((meeting) => meeting.selectedUser.some((_) => user.username === _.username) || user.username === meeting.creater ?
                <EventCard meeting={meeting} /> :
                <Typography variant="h6" align="center" mt={6}>  You Dont have Meetings</Typography>
            )}
        </>
    )


}
export default MeetingCard