import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Paper, Box } from '@mui/material';

function AccountForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Account Created with Data:", formData);
    alert("Account Created Successfully!");
  };

  return (
    <Paper elevation={3} sx={{ padding: 3, maxWidth: 500, margin: 'auto' }}>
      <Typography variant="h5" gutterBottom>
        Account Creation Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Full Name"
              name="name"
              variant="outlined"
              fullWidth
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              name="email"
              variant="outlined"
              type="email"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              name="password"
              variant="outlined"
              type="password"
              fullWidth
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address"
              name="address"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              value={formData.address}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone Number"
              name="phone"
              variant="outlined"
              type="tel"
              fullWidth
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </Grid>
        </Grid>
        <Box mt={2} display="flex" justifyContent="center">
          <Button type="submit" variant="contained" color="primary">
            Create Account
          </Button>
        </Box>
      </form>
    </Paper>
  );
}

export default AccountForm;
