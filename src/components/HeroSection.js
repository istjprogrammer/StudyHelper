import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#FFEB3B',
        color: '#000',
        padding: '50px 0',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md">
      <Typography 
          variant="h3" 
          component="h3" 
          gutterBottom 
          sx={{ fontFamily: 'KakaoRegular, Arial, sans-serif', fontWeight: 'bold' }}
        >
          스터디헬퍼와 함께라면
        </Typography>
        <Typography 
          variant="h5" 
          component="h3" 
          gutterBottom 
          sx={{ fontFamily: 'KakaoRegular, Arial, sans-serif', fontWeight: 'bold' }}
        >
          이번학기는 All A+
        </Typography>
      </Container>
    </Box>
  );
};

export default HeroSection;
