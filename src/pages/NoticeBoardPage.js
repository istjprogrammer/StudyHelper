import React from 'react';
import { Container, Card, CardContent, Typography, Box } from '@mui/material';

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
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontFamily: 'KakaoRegular, Arial, sans-serif', fontWeight: 'bold' }}>
          공지사항
        </Typography>
      </Box>
      {notices.map((notice) => (
        <Card key={notice.id} sx={{ marginBottom: '1rem', borderRadius: 3, boxShadow: 3, border: '1px solid #e0e0e0' }}>
          <CardContent>
            <Typography variant="h5" component="h2" sx={{ fontFamily: 'KakaoRegular, Arial, sans-serif', fontWeight: 'bold' }}>
              {notice.title}
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: 'KakaoRegular, Arial, sans-serif', color: 'text.secondary' }}>
              {notice.content}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default NoticeBoardPage;
