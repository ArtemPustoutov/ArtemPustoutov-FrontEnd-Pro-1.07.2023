import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from './Pages/Users';
import NoPage from './Pages/NoPage';
import Albums from './Pages/Albums';
import Photo from './Pages/Photo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users/>}/>
        <Route path="albums/:id" element={<Albums/>}/>
        <Route path="photo/:id" element={<Photo/>} />
        <Route path="*" element={<NoPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
