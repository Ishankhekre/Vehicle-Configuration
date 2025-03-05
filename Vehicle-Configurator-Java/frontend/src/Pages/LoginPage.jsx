import React, { useState, useEffect } from 'react';
import { Box, TextField, Typography, Button, Alert } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; 
import API from '../Service/api';
import logo from '../Content/logo3.png';
import { toaster } from "../Service/toast";


export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem('authToken');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        if (decoded.exp * 1000 < Date.now()) {
          sessionStorage.removeItem('authToken'); // Remove expired token
          navigate('/LoginPage'); // Redirect to login
        } else {
          
          navigate('/SelectionPage'); // Redirect to SelectionPage
        }
      } catch (err) {
        console.error("Invalid token:", err);
        sessionStorage.removeItem('authToken');
      }
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!username || !password) {
      setError("Both username and password are required!");
      return;
    }
  
    try {
      const response = await API.post("/login", { username, password });
  
      if (response.data.token) {
        sessionStorage.setItem("authToken", response.data.token);
  
        const decoded = jwtDecode(response.data.token);
        console.log("Decoded Token:", decoded);
  
        const extractedUsername = decoded.sub; // 🔹 Extract username from `sub`
        // sessionStorage.setItem("username", extractedUsername); // 🔹 Store username separately
        toaster("info", "Welcome,Logged in  successfully!");

        navigate("/SelectionPage", { state: { username: extractedUsername } });
      } else {
        setError("Invalid login response. Please try again.");
      }
    } catch (err) {
      console.error("Login failed:", err.response || err);
      setError("Invalid username or password.");
    }
  };
  
  

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#FFDEE9',
        backgroundImage: 'linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)',
      }}
    >
      <div
        style={{
          width: 400,
          height: 400,
          borderRadius: '8px',
          backgroundImage: `url(${logo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <Box component="form" onSubmit={handleSubmit} sx={{ width: 400, backgroundColor: 'white', padding: 4, borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h3" fontWeight="bold" color="#223747" textAlign="center" fontFamily="Poppins" gutterBottom>
          Login
        </Typography>
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

        <TextField label="Username" type="text" variant="outlined" fullWidth margin="normal" value={username} onChange={(e) => setUsername(e.target.value)} />
        <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />

        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2, py: 1 }}>Login</Button>

        <Typography variant="body2" color="#1664C0" textAlign="center" sx={{ mt: 2, cursor: 'pointer' }}>
          Don't have an account? <Link to="/RegisterPage" style={{ textDecoration: 'none', color: '#1664C0' }}>Register here.</Link>
        </Typography>
      </Box>
    </Box>
  );
};
