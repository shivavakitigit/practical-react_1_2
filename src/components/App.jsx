import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../components/Login/Login';
import SignUp from '../components/SignUp/SignUp';
import DashBoard from '../components/DashBoard/DashBoard';
import Cart from './Cart/Cart';
import WishList from './WishList/WishList';
import FormBuilder from './FormBuilder/FormBuilder';
import Header from './Header';
import Footer from './Footer';
import { Container, Box } from '@mui/material';

function App() {
  return (
    <Router>
      <Header />
     <Container component="main" maxWidth="lg"  sx={{ flexGrow: 1, my: 4 }}>
        <Box my={4}>
          <Routes>
            <Route path="/" element={<FormBuilder />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/account-creation" element={<FormBuilder />} />
          </Routes>
        </Box>
      </Container> 
      <Footer />
      

    </Router>
  );
}

export default App;
