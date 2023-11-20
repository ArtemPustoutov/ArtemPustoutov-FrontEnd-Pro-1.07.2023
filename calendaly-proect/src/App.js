import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import SignUp from './components/SIgnUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import IventPage from './components/IventPage/IventPage';





function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/sign-in"/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/ivent-page" element={<IventPage/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
