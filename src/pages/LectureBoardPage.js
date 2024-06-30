import React, { useState } from 'react';
import { Container, Card, CardContent, Typography, Button, Box, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, CardActions, Grid } from '@mui/material';

const initialLectures = [
  { id: 1, title: '제목', content: '내용' },
  { id: 2, title: '제목', content: '내용' },
  { id: 3, title: '제목', content: '내용' },
  { id: 4, title: '제목', content: '내용' },
  { id: 5, title: '제목', content: '내용' },
  { id: 6, title: '제목', content: '내용' },
];

const LectureBoardPage = () => {
  const [lectures, setLectures] = useState(initialLectures);
  const [open, setOpen] = useState(false);
  const [currentLecture, setCurrentLecture] = useState({ id: null, title: '', content: '' });

  const handleOpen = (lecture) => {
    setCurrentLecture(lecture);
    setOpen(true);
  };

  const handleClose = () => {
    setCurrentLecture({ id: null, title: '', content: '' });
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentLecture({ ...currentLecture, [name]: value });
  };

  const handleSave = () => {
    if (currentLecture.id) {
      setLectures(lectures.map((lecture) => (lecture.id === currentLecture.id ? currentLecture : lecture)));
    } else {
      setLectures([...lectures, { ...currentLecture, id: lectures.length + 1 }]);
    }
    handleClose();
  };

  const handleDelete = (id) => {
    setLectures(lectures.filter((lecture) => lecture.id !== id));
  };

  return (
    <Container sx={{ marginTop: '2rem' }}>
      <Box textAlign="center" mb={4}>
        <Typography 
          variant="h4" 
          component="h3" 
          gutterBottom 
          sx={{ fontFamily: 'KakaoRegular, Arial, sans-serif', fontWeight: 'bold' }}
        >
          수업 노트
        </Typography>
        <Button variant="contained" color="primary" onClick={() => handleOpen({ id: null, title: '', content: '' })}>
          글쓰기
        </Button>
      </Box>
      <Grid container spacing={3}>
        {lectures.map((lecture) => (
          <Grid item xs={12} sm={6} md={4} key={lecture.id}>
            <Card sx={{ borderRadius: 4, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" component="h2" sx={{ fontFamily: 'KakaoRegular, Arial, sans-serif', fontWeight: 'bold' }}>
                  {lecture.title}
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: 'KakaoRegular, Arial, sans-serif', color: 'text.secondary' }}>
                  {lecture.content}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
              <Button 
                  variant="contained" 
                  onClick={() => handleOpen(lecture)} 
                  sx={{ marginRight: '1rem', backgroundColor: '#1DB954', '&:hover': { backgroundColor: '#1ED760' } }}
                >
                  수정
                </Button>
                <Button variant="contained" color="error" onClick={() => handleDelete(lecture.id)}>
                  삭제
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{currentLecture.id ? '수업 수정' : '수업 추가'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {currentLecture.id ? '수업 내용을 수정하세요' : '새로운 수업 내용을 입력하세요'}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="title"
            label="제목"
            type="text"
            fullWidth
            variant="outlined"
            value={currentLecture.title}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="content"
            label="내용"
            type="text"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            value={currentLecture.content}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            취소
          </Button>
          <Button onClick={handleSave} color="primary">
            저장
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default LectureBoardPage;
