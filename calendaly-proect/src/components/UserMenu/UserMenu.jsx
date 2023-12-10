import { useState } from "react";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Logout, Settings, PersonAdd } from '@mui/icons-material'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOutUser } from "../../store/userSlice";
import ProfileUser from "../ProfileUser/ProfileUser";
import SettingsUser from "../SettingsUser/SettingsUser";

const UserMenu = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let logOut = () => {
    dispatch(logOutUser())
    navigate('/sign-in')
  }
  const [openMenu, setOpenMenu] = useState(false)
  const heandleCloseMenu = () => {
    setOpenMenu(false);
  };
  const open = Boolean(openMenu)

  return (
    <>
      <Box>
        <Tooltip title="Account settings">
          <IconButton
            onClick={setOpenMenu}
            size="small"
            sx={{ ml: 2 }}
          >
            <Avatar sx={{ width: 32, height: 32 }}></Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        id="account-menu"
        open={open}
        onClose={heandleCloseMenu}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem >
          <Avatar /> <ProfileUser />
        </MenuItem>
        <Divider />
        <MenuItem onClick={heandleCloseMenu}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add Work Time
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          <SettingsUser onClose={heandleCloseMenu} />
        </MenuItem>
        <MenuItem onClick={logOut}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>


  )
}

export default UserMenu