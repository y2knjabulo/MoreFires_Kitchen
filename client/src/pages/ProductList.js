
// client/src/pages/ProductList.js
import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Classic Burger',
    description: 'Juicy beef patty with cheese, tomato, and lettuce.',
    price: 89.99,
    image: 'https://source.unsplash.com/featured/?burger',
  },
  {
    id: 2,
    name: 'Chicken Wings',
    description: 'Spicy grilled wings with BBQ sauce.',
    price: 79.99,
    image: 'https://source.unsplash.com/featured/?chicken-wings',
  },
  {
    id: 3,
    name: 'Pizza Slice',
    description: 'Cheesy pepperoni pizza slice.',
    price: 49.99,
    image: 'https://source.unsplash.com/featured/?pizza',
  },
];

const ProductList = () => {
  return (
    <Grid container spacing={3} sx={{ p: 3 }}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card>
            <CardMedia
              component="img"
              height="180"
              image={product.image}
              alt={product.name}
            />
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
              <Typography variant="subtitle1" sx={{ mt: 1 }}>
                R{product.price.toFixed(2)}
              </Typography>
              <Button
                component={Link}
                to={`/product/${product.id}`}
                variant="contained"
                sx={{ mt: 2 }}
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
