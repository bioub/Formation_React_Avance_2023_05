import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Todos from '../../todos/components/Todos/Todos';
import Users from '../../users/components/Users/Users';
import TopBar from '../TopBar/TopBar';
import Home from '../Home/Home';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Routes className="App-Route-Container">
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="users/*" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
