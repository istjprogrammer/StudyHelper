import React from 'react';
import { Container, Card, CardContent, Typography, Box, Grid, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const notices = [
  { id: 1, title: '게시글 1', content: '내용' },
  { id: 2, title: '게시글 2', content: '내용' },
  { id: 3, title: '게시글 3', content: '내용' },
  { id: 4, title: '게시글 4', content: '내용' },
];

const NoticeBoardPage = () => {
  return (
    <Container sx={{ marginTop: '2rem' }}>
      <Box textAlign="center" mb={4}>
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom 
          sx={{ fontFamily: 'KakaoRegular, Arial, sans-serif', fontWeight: 'bold' }}
        >
          공지사항
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {notices.map((notice) => (
          <Grid item xs={12} key={notice.id}>
            <Link component={RouterLink} to={`/notices/${notice.id}`} underline="none">
              <Card sx={{ marginBottom: '1rem', borderRadius: 3, boxShadow: 3, border: '1px solid #e0e0e0' }}>
                <CardContent>
                  <Typography variant="h5" component="h2" sx={{ fontFamily: 'KakaoRegular, Arial, sans-serif', fontWeight: 'bold' }}>
                    {notice.title}
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: 'KakaoRegular, Arial, sans-serif', color: 'text.secondary' }}>
                    {notice.content}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default NoticeBoardPage;
