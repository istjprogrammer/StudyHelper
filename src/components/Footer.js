import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px 0',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
        <Typography variant="body1">&copy; 스터디헬퍼 All rights reserved.</Typography>
      </Container>
    </Box>
  );
};

export default Footer;
