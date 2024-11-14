import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        py: 2,
        textAlign: 'center',
        bgcolor: '#0d47a1',
        color: 'white',
      }}
    >
      <Typography variant="body2">
        &copy; 2023 Banking Solutions. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
