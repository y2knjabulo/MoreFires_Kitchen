// client/src/pages/Home.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const home = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3">Welcome to MoreFires Kitchen</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>Order your favourite meals online and enjoy fast delivery.</Typography>
    </Container>
  );
};

export default home;

