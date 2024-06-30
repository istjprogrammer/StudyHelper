import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Grid, Paper, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ id });
    navigate('/');
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
        <Box textAlign="center">
          <Typography variant="h4" component="h1" gutterBottom
          sx={{ fontFamily: 'KakaoRegular, Arial, sans-serif', fontWeight: 'bold' }}>
            로그인
          </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="아이디"
                value={id}
                onChange={(e) => setId(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="비밀번호"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" color="primary" variant="contained" fullWidth>
                로그인
              </Button>
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Typography variant="body2">
                아직 회원이 아니신가요?{' '}
                <Link href="/register" variant="body2" sx={{ color: 'green' }}>
                  회원가입
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Typography variant="body2">
                <Link href="/forgot-username" variant="body2" sx={{ color: 'black' }}>
                  아이디 찾기
                </Link>{' '}
                |{' '}
                <Link href="/forgot-password" variant="body2" sx={{ color: 'black' }}>
                  비밀번호 찾기
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginPage;
