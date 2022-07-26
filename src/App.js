import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './screen/Login/';
import Register from './screen/Register';
import Profile from './screen/Profile';
import VerifyEmail from './screen/VerifyEmail';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './screen/firebase';
import { Navigate } from 'react-router-dom';
import { AuthProvider } from '../src/routers/AuthContex';
import PrivateRoute from '../src/routers/PrivateRoute';
import { Store } from '../src/screen/Store';
// import Navbar from './routers/Navbar';
// import Home from "../src/screen/Home"
import './App.css';
// import ParticleBackground from './component/ParticleBackground';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <>
      <Router>
        <AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />

            <Route path="/login" element={!currentUser?.emailVerified ? <Login /> : <Navigate to="/" replace />} />
            <Route path="/register" element={!currentUser?.emailVerified ? <Register /> : <Navigate to="/" replace />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/profile" element={!currentUser?.emailVerified ? <Profile /> : <Navigate to="/" replace />} />
            <Route path="/store" element={!currentUser?.emailVerified ? <Store /> : <Navigate to="/" replace />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
