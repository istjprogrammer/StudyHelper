import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Container>
      <Typography variant="h4">Profile</Typography>
      {user ? (
        <>
          <Typography variant="h6">Email: {user.email}</Typography>
          <Button onClick={handleLogout} color="primary" variant="contained">Logout</Button>
        </>
      ) : (
        <Typography variant="body1">You are not logged in.</Typography>
      )}
    </Container>
  );
};

export default ProfilePage;
