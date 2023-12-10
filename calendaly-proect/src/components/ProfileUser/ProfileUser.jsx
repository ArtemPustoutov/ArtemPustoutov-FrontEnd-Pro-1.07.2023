import { Modal } from "@mui/material"
import { useState } from "react"
import { personalUser } from "../../store/selectors/selectors"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useSelector } from "react-redux"


const ProfileUser = () => {
    const user = useSelector(personalUser)
    const [open, setOpen] = useState(false)
    const heandleOpenModal = () => {
        setOpen(true);
    };
    const heandleCloseModal = () => {
        setOpen(false);
    };

    return (
        <>
            <Button onClick={heandleOpenModal}> Profile</Button>
            <Modal
                open={open}
                onClose={heandleCloseModal}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box className="modal" sx={{ width: 400 }}>
                    <h1 id="parent-modal-title"> Profile {user.username}</h1>
                    <h3>User name: {user.username}</h3>
                    <h3>User email : {user.email}</h3>
                    <p> Change email and password you can in Settings</p>
                    <Button variant="contained" color="success" onClick={heandleCloseModal}> OK</Button>
                </Box>
            </Modal>
        </>

    )
}
export default ProfileUser
