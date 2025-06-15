// client/src/pages/AdminDashboard.js
import React, { useState } from 'react';
import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, TextField, Button, Paper } from '@mui/material';

const dummyOrders = [
  { id: 1, customer: 'John Doe', total: 199.99, date: '2025-06-14' },
  { id: 2, customer: 'Jane Smith', total: 149.99, date: '2025-06-13' },
];

const AdminDashboard = () => {
  const [product, setProduct] = useState({ name: '', price: '', image: '' });

  const handleAddProduct = () => {
    alert(`Product added: ${product.name}`);
    setProduct({ name: '', price: '', image: '' });
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" color="#d32f2f" gutterBottom>
        Admin Dashboard
      </Typography>

      <Paper elevation={2} sx={{ p: 3, mb: 4, borderRadius: 3 }}>
        <Typography variant="h6">Add Product</Typography>
        <TextField
          fullWidth
          label="Name"
          margin="normal"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <TextField
          fullWidth
          label="Price"
          type="number"
          margin="normal"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
        <TextField
          fullWidth
          label="Image URL"
          margin="normal"
          value={product.image}
          onChange={(e) => setProduct({ ...product, image: e.target.value })}
        />
        <Button
          variant="contained"
          sx={{ mt: 2, backgroundColor: '#ffa000', '&:hover': { backgroundColor: '#ff8f00' } }}
          onClick={handleAddProduct}
        >
          Add Product
        </Button>
      </Paper>

      <Paper elevation={2} sx={{ p: 3, borderRadius: 3 }}>
        <Typography variant="h6" gutterBottom>
          Recent Orders
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Customer</TableCell>
              <TableCell>Total (R)</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>{order.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default AdminDashboard;

