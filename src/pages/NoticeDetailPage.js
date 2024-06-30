import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Card, CardContent } from '@mui/material';

const notices = [
  { id: 1, title: '게시글 1', content: '내용' },
  { id: 2, title: '게시글 2', content: '내용' },
  { id: 3, title: '게시글 3', content: '내용' },
  { id: 4, title: '게시글 4', content: '내용' },
];

const NoticeDetailPage = () => {
  const { id } = useParams();
  const notice = notices.find(notice => notice.id === parseInt(id));

  if (!notice) {
    return (
      <Container sx={{ marginTop: '2rem' }}>
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            공지사항을 찾을 수 없습니다.
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container sx={{ marginTop: '2rem' }}>
      <Card sx={{ padding: '2rem', borderRadius: '8px' }}>
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontFamily: 'KakaoRegular, Arial, sans-serif', fontWeight: 'bold' }}>
            {notice.title}
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: 'KakaoRegular, Arial, sans-serif' }}>
            {notice.content}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default NoticeDetailPage;
