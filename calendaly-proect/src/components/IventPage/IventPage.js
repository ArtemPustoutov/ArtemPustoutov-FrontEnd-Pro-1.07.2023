import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { logOutUser, userList, userState } from "../../store/userSlice";
import { personalUser } from "../../store/selectors/selectors";
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MeetingCard from "../MeetingCard/MeetingCard";
import { ModalWindow } from "../Modal/Modal";
const IventPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(personalUser)

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
                    HEllo {user.username}
                </Typography>
                <ModalWindow/>
                <Button color="inherit" onClick={logOut}>logOut</Button>
                </Toolbar>
            </AppBar>
        </Box>
        <MeetingCard/>
        </>
    )
}

export default IventPage