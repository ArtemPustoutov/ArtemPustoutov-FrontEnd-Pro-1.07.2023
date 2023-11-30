import MeetingForm from "../MeetingForm/MeetingForm";
import { useState } from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useSelector } from "react-redux";
import { allUser } from "../../store/selectors/selectors";
import { Modal } from "@mui/material";


export const ModalWindow = () => {
    const users = useSelector(allUser)

    const userQuantity = () => {
        if(users.length === 1) {
            return true
        } else {
            return false
        }
    }

    const [open, setOpen] = useState(false)
    const heandleOpenModal = () => {
        setOpen(true);
    };
    const heandleCloseModal = () => {
        setOpen(false);
    };

    return(
        <>
        <Button variant="contained" color="success" disabled= {userQuantity()} onClick={heandleOpenModal} >Create Event</Button>
        <Modal
        open={open}
        onClose={heandleCloseModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        >
        <Box className="modal" sx={{ width: 400 }}>
            <h2 id="parent-modal-title">Create new Event</h2>
            <MeetingForm onClose={heandleCloseModal}/>
        </Box>
        </Modal>
        </>

    )
}