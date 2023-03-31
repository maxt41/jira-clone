import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import QueueView from './components/Index/Index';
import TicketView from './components/Ticket/Index'
import Nav from './components/Nav';


function App() {
  return (
    <div>
    <Nav/>
    <BrowserRouter>
      <Routes>
        <Route path='/queue/:id' element={
          <QueueView /> 
        }/>
        <Route path='/issue/:id' element={
          <TicketView />
        } />    
        <Route path='*' element={<Navigate to='/queue/3'></Navigate>} />
      </Routes>
    </BrowserRouter>
    </div>
 
  );
}

export default App;
