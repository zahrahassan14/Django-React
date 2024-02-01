// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';

import Homepage from './views/Homepage';
import Registerpage from './views/Registerpage';
import Loginpage from './views/Loginpage';
import Dashboard from './views/Dashboard';
import Navbar from './views/Navbar';
import Todo from './views/Todo';
import Message from './views/Message';
import MessageDetail from './views/MessageDetail';
import SearchUsers from './views/SearchUsers';
import AboutUs from './views/aboutus';  // Update import path

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
        <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Registerpage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/inbox" element={<Message />} />
          <Route path="/inbox/:id" element={<MessageDetail />} />
          <Route path="/search/:username" element={<SearchUsers />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
