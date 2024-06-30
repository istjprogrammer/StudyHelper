import React, { useState } from 'react';
import { Container, Box, Typography, Button, TextField, Grid } from '@mui/material';

const initialPosts = [
  { id: 1, user: 'User1', content: '내용' },
  { id: 2, user: 'User2', content: '내용' },
  { id: 3, user: 'User3', content: '내용' },
  { id: 4, user: 'User4', content: '내용' },
];

const FreeBoardPage = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [newPost, setNewPost] = useState('');

  const handlePostChange = (e) => {
    setNewPost(e.target.value);
  };

  const handlePostSubmit = () => {
    const newPostObj = { id: posts.length + 1, user: 'User' + (posts.length + 1), content: newPost };
    setPosts([...posts, newPostObj]);
    setNewPost('');
  };

  return (
    <Container sx={{ marginTop: '2rem', backgroundColor: '#F7F7F7', padding: '2rem', borderRadius: '8px' }}>
      <Box textAlign="center" mb={4}>
        <Typography 
          variant="h4" 
          component="h3" 
          gutterBottom 
          sx={{ fontFamily: 'KakaoRegular, Arial, sans-serif', fontWeight: 'bold', color: '#3B1E1E' }}
        >
          잡담게시판
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <TextField 
            fullWidth 
            variant="outlined" 
            placeholder="게시글을 작성하세요" 
            value={newPost} 
            onChange={handlePostChange}
            sx={{ backgroundColor: '#FFFFFF', borderRadius: '8px' }}
          />
          <Button 
            variant="contained" 
            onClick={handlePostSubmit}
            sx={{ backgroundColor: '#FFEB3B', color: '#3B1E1E', '&:hover': { backgroundColor: '#FDD835' }, height: '56px' }}
          >
            등록
          </Button>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {posts.map((post) => (
          <Grid item xs={12} key={post.id}>
            <Box 
              sx={{ 
                backgroundColor: post.id % 2 === 1 ? '#FFFFFF' : '#FFEB3B', 
                padding: '1rem', 
                borderRadius: '8px', 
                boxShadow: 1, 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: post.id % 2 === 1 ? 'flex-start' : 'flex-end' 
              }}
            >
              <Typography 
                variant="body1" 
                sx={{ fontFamily: 'KakaoRegular, Arial, sans-serif', color: '#3B1E1E' }}
              >
                {post.user}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ fontFamily: 'KakaoRegular, Arial, sans-serif', color: '#3B1E1E' }}
              >
                {post.content}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FreeBoardPage;
