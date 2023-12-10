import { createSlice } from '@reduxjs/toolkit';
import { local_token } from '../common/constatnts';


export const initialState = {
    meetings: [],
}
const meetingSlice = createSlice({
    name: 'meetings',
    initialState,
    reducers: {
        checkMeetings: (state) => {
            let meetings = localStorage.getItem(local_token.MEETINGS)
            if(meetings) {
                state.meetings = JSON.parse(meetings)
            }
        },
        addMeeting: (state, action) => {
            const newMeeting = action.payload
            state.meetings.push(newMeeting)
            localStorage.setItem(local_token.MEETINGS, JSON.stringify(state.meetings))
        },
        deleteMeeting: (state, action) => {
            state.meetings = state.meetings.filter(meeting => JSON.stringify(meeting) !== JSON.stringify(action.payload))
            localStorage.setItem(local_token.MEETINGS, JSON.stringify(state.meetings))
        },
    }
})

export  const {addMeeting, deleteMeeting, checkMeetings} = meetingSlice.actions

export default meetingSlice.reducer;
