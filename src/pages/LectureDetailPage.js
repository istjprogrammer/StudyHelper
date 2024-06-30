import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Card, CardContent } from '@mui/material';

const initialLectures = [
  { id: 1, title: '제목', content: '내용' },
  { id: 2, title: '제목', content: '내용' },
  { id: 3, title: '제목', content: '내용' },
  { id: 4, title: '제목', content: '내용' },
  { id: 5, title: '제목', content: '내용' },
  { id: 6, title: '제목', content: '내용' },
];

const LectureDetailPage = () => {
  const { id } = useParams();
  const lecture = initialLectures.find(lecture => lecture.id === parseInt(id));

  if (!lecture) {
    return (
      <Container sx={{ marginTop: '2rem' }}>
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            수업 내용을 찾을 수 없습니다.
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
            {lecture.title}
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: 'KakaoRegular, Arial, sans-serif' }}>
            {lecture.content}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default LectureDetailPage;
