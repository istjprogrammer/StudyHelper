import React, { useState } from 'react';
import { Container, Card, CardContent, Typography, Button, Box, Grid, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, CardActions, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const initialChats = [
  { id: 1, title: '제목', content: '내용' },
  { id: 2, title: '제목', content: '내용' },
  { id: 3, title: '제목', content: '내용' },
  { id: 4, title: '제목', content: '내용' },
  { id: 5, title: '제목', content: '내용' },
  { id: 6, title: '제목', content: '내용' },
];

const LectureBoardPage = () => {
  const [chats, setChats] = useState(initialChats);
  const [open, setOpen] = useState(false);
  const [currentChat, setCurrentChat] = useState({ id: null, title: '', content: '' });

  const handleOpen = (chat) => {
    setCurrentChat(chat);
    setOpen(true);
  };

  const handleClose = () => {
    setCurrentChat({ id: null, title: '', content: '' });
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentChat({ ...currentChat, [name]: value });
  };

  const handleSave = () => {
    if (currentChat.id) {
      setChats(chats.map((chat) => (chat.id === currentChat.id ? currentChat : chat)));
    } else {
      setChats([...chats, { ...currentChat, id: chats.length + 1 }]);
    }
    handleClose();
  };

  const handleDelete = (id) => {
    setChats(chats.filter((chat) => chat.id !== id));
  };

  return (
    <Container sx={{ marginTop: '2rem', backgroundColor: '#191414', color: '#fff', padding: '2rem', borderRadius: '8px' }}>
      <Box textAlign="center" mb={4}>
        <Typography 
          variant="h4" 
          component="h3" 
          gutterBottom 
          sx={{ fontFamily: 'KakaoRegular, Arial, sans-serif', fontWeight: 'bold' }}
        >
          수업노트
        </Typography>
        <Button 
          variant="contained" 
          onClick={() => handleOpen({ id: null, title: '', content: '' })}        
        >
          글쓰기
        </Button>
      </Box>
      <Grid container spacing={3}>
        {chats.map((chat) => (
          <Grid item xs={12} sm={6} md={4} key={chat.id}>
            <Link component={RouterLink} to={`/lectures/${chat.id}`} underline="none">
              <Card sx={{ backgroundColor: '#333', color: '#fff', borderRadius: 4, boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h5" component="h2" sx={{ fontFamily: 'KakaoRegular, Arial, sans-serif', fontWeight: 'bold' }}>
                    {chat.title}
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: 'KakaoRegular, Arial, sans-serif', color: 'rgba(255, 255, 255, 0.7)' }}>
                    {chat.content}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                  <Button 
                    variant="contained" 
                    onClick={(e) => { e.preventDefault(); handleOpen(chat); }} 
                    sx={{ marginRight: '1rem', backgroundColor: '#1DB954', '&:hover': { backgroundColor: '#1ED760' } }}
                  >
                    수정
                  </Button>
                  <Button 
                    variant="contained" 
                    color="error" 
                    onClick={(e) => { e.preventDefault(); handleDelete(chat.id); }}
                  >
                    삭제
                  </Button>
                </CardActions>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{currentChat.id ? '수정' : '추가'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {currentChat.id ? '잡담 내용을 수정하세요' : '새로운 잡담 내용을 입력하세요'}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="title"
            label="제목"
            type="text"
            fullWidth
            variant="outlined"
            value={currentChat.title}
            onChange={handleChange}
            sx={{ backgroundColor: '#fff', borderRadius: '4px' }}
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
            value={currentChat.content}
            onChange={handleChange}
            sx={{ backgroundColor: '#fff', borderRadius: '4px' }}
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
