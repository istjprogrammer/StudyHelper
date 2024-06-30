import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Grid, Paper } from '@mui/material';

const ForgotUsernamePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('회원님의 아이디는 OOO입니다.');
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
        <Box textAlign="center">
          <Typography variant="h4" component="h1" gutterBottom
          sx={{ fontFamily: 'KakaoRegular, Arial, sans-serif', fontWeight: 'bold' }}>
            아이디 찾기
          </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                label="이름"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" color="primary" variant="contained" fullWidth>
                아이디 찾기
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default ForgotUsernamePage;