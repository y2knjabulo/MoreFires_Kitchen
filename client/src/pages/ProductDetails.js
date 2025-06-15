// client/src/pages/ProductDetails.js
// client/src/pages/ProductDetails.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';

const mockProducts = [
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

const ProductDetails = () => {
  const { id } = useParams();
  const product = mockProducts.find((p) => p.id === parseInt(id));

  if (!product) return <Typography variant="h6">Product not found</Typography>;

  return (
    <Container sx={{ mt: 4 }}>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={product.image}
          alt={product.name}
        />
        <CardContent>
          <Typography variant="h4">{product.name}</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>{product.description}</Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>R{product.price.toFixed(2)}</Typography>
          <Button variant="contained" sx={{ mt: 2 }} component={Link} to="/cart">
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProductDetails;


