import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ForgotPassword from './pages/forgot-password';
import HomePage from './pages/homepage';
import SignIn from './pages/signIn';
import SignUp from './pages/signup';
import EditUser from './pages/EditUser';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/signup" element={<SignUp />} exact />
        <Route path="/forgot-password" element={<ForgotPassword/>} exact/>
        <Route path="/admin/edit-user" element={<EditUser />} exact />
      </Routes>
    </div>
  );
}

export default App;
