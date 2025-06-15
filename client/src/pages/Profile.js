// client/src/pages/Profile.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const Profile = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">My Profile</Typography>
      <Typography sx={{ mt: 2 }}>Order History (simulated):</Typography>
      <ul>
        <li>Order #1 - R219.98 - 2 items</li>
        <li>Order #2 - R89.99 - 1 item</li>
      </ul>
    </Container>
  );
};

export default Profile;
