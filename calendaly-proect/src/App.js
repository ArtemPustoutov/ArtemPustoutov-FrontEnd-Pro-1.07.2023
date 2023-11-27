import './App.css';
import { Route, Routes, useNavigate, Navigate} from 'react-router-dom'
import SignUp from './components/SIgnUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import IventPage from './components/IventPage/IventPage';
import NotFound from './components/NotFound';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userToken } from './store/userSlice';
import { takeToken } from './store/selectors/selectors';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'





function App() {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const token = useSelector(takeToken)

//   useEffect(() => {
//     dispatch(userToken())
//   },[dispatch])

//  useEffect(() => {
//   if(!token) {
//     navigate('/sign-in')
//   }
//  })





  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Routes>
        <Route path="/" element={<Navigate to="/sign-in"/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/ivent-page" element={<IventPage/>}/>
      </Routes>
      </LocalizationProvider>
  );
}

export default App;
