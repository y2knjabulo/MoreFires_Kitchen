// client/src/pages/Home.js
// client/src/pages/Home.js
import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const home = () => {
  return (
    <Container sx={{ mt: 6, textAlign: 'center', color: '#d32f2f' }}>
      <RestaurantIcon sx={{ fontSize: 60, color: '#d32f2f' }} />
      <Typography variant="h3" gutterBottom>
        Welcome to MoreFires Kitchen 🔥
      </Typography>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Your favorite fast-food meals at unbeatable prices.
      </Typography>
      <Button
        component={Link}
        to="/products"
        variant="contained"
        sx={{ backgroundColor: '#ffa000', '&:hover': { backgroundColor: '#ff8f00' } }}
      >
        Explore Menu
      </Button>
    </Container>
  );
};

export default home;


