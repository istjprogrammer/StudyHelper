import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Grid, Paper } from '@mui/material';

const ForgotPasswordPage = () => {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert('이메일을 입력해주세요.');
      return;
    }
    // 실제 비밀번호 찾기 로직을 여기에 추가합니다.
    alert('비밀번호 찾기 요청이 접수되었습니다.');
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
        <Box textAlign="center">
        <Typography variant="h4" component="h1" gutterBottom
          sx={{ fontFamily: 'KakaoRegular, Arial, sans-serif', fontWeight: 'bold' }}>
            비밀번호 찾기
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
                required
                sx={{ fontFamily: 'KakaoRegular, Arial, sans-serif' }}
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
                required
                sx={{ fontFamily: 'KakaoRegular, Arial, sans-serif' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="휴대폰 번호"
                value={PhoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                fullWidth
                margin="normal"
                variant="outlined"
                required
                sx={{ fontFamily: 'KakaoRegular, Arial, sans-serif' }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" color="primary" variant="contained" fullWidth>
                비밀번호 찾기
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default ForgotPasswordPage;
