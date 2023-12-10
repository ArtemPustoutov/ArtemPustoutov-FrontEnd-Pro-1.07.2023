import './App.css';
import { Route, Routes, Navigate} from 'react-router-dom'
import SignUp from './components/SIgnUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import EventPage from './components/EventPage/EventPage';
import NotFound from './components/NotFound';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'





function App() {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Routes>
        <Route path="/" element={<Navigate to="/sign-in"/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/event-page" element={<EventPage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </LocalizationProvider>
  );
}

export default App;
