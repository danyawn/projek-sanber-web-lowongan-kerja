import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Detail, Dashboard, Navbar, Sidebar} from "./components/index"
import './App.css';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <div>
      <Navbar/> 
      <div className='flex'>
        <menu>
          <Sidebar/>
        </menu>
        <GlobalProvider>
          <Routes>
            <Route index path='/' element={ <Dashboard/> } />
            <Route path='/detail' element={<Detail/>} />
          </Routes>
        </GlobalProvider>
      </div>
    </div>
  );
}

export default App;
