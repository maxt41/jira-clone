import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import QueueView from './components/Index/Index';
import TicketView from './components/Ticket/Index'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/queue/:id' element={
          <QueueView /> 
        }/>
        <Route path='/issue/:id' element={
          <TicketView />
        } />    
        <Route path='*' element={<Navigate to='/queue/:id'></Navigate>} />
      </Routes>
    </BrowserRouter>
 
  );
}

export default App;
