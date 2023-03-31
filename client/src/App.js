import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import QueueView from './components/Queues/Index';
import TicketView from './components/Ticket/Index';
import CreateView from './components/Create/Index'
import Nav from './components/Nav/Nav';


function App() {
  return (
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/queue/:id' element={
            <QueueView /> 
          }/>
          <Route path='/issue/:id' element={
            <TicketView />
          } />    
          <Route path='/create' element={
            <CreateView />
          } />   
          <Route path='*' element={<Navigate to='/queue/3'></Navigate>} />
        </Routes>
      </BrowserRouter>
 
  );
}

export default App;
