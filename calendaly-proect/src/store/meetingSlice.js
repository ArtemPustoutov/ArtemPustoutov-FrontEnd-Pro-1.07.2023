import { createSlice } from '@reduxjs/toolkit';
import { local_token } from '../common/constatnts';


export const initialState = {
    meetings: [],
}
const meetingSlice = createSlice({
    name: 'meetings',
    initialState,
    reducers: {
        addMeeting: (state, action) => {
            const newMeeting = {
                text: action.payload,
            }
            state.meetings.push(newMeeting)
            localStorage.setItem(local_token.MEETINGS, JSON.stringify(state.meetings))
        },
        deleteMeeting: (state, action) => {
            state.meetings = state.meetings.filter(meeting => JSON.stringify(meeting) !== JSON.stringify(action.payload))
        },
    }
})

export  const {addMeeting, deleteMeeting} = meetingSlice.actions

export default meetingSlice.reducer;
