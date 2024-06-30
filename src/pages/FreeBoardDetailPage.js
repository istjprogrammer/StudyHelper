import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Card, CardContent, TextField, Button, Grid } from '@mui/material';

const initialPosts = [
  { id: 1, user: 'User1', content: '내용', comments: [] },
  { id: 2, user: 'User2', content: '내용', comments: [] },
  { id: 3, user: 'User3', content: '내용', comments: [] },
  { id: 4, user: 'User4', content: '내용', comments: [] },
];

const FreeBoardDetailPage = () => {
  const { id } = useParams();
  const [posts, setPosts] = useState(initialPosts);
  const post = posts.find(post => post.id === parseInt(id));

  const [newComment, setNewComment] = useState('');
  const [replyComment, setReplyComment] = useState({});
  
  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleReplyChange = (e, parentId) => {
    setReplyComment({ ...replyComment, [parentId]: e.target.value });
  };

  const handleCommentSubmit = () => {
    const updatedPosts = posts.map(p => 
      p.id === post.id ? { ...p, comments: [...p.comments, { id: p.comments.length + 1, user: 'User', content: newComment, replies: [] }] } : p
    );
    setPosts(updatedPosts);
    setNewComment('');
  };

  const handleReplySubmit = (parentId) => {
    const updatedPosts = posts.map(p => 
      p.id === post.id ? { 
        ...p, 
        comments: p.comments.map(c => 
          c.id === parentId ? { ...c, replies: [...c.replies, { id: c.replies.length + 1, user: 'User', content: replyComment[parentId] }] } : c
        ) 
      } : p
    );
    setPosts(updatedPosts);
    setReplyComment({ ...replyComment, [parentId]: '' });
  };

  if (!post) {
    return (
      <Container sx={{ marginTop: '2rem' }}>
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            게시물을 찾을 수 없습니다.
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
            {post.user}
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: 'KakaoRegular, Arial, sans-serif' }}>
            {post.content}
          </Typography>
        </CardContent>
      </Card>
      <Box mt={4}>
        <Typography variant="h6" sx={{ fontFamily: 'KakaoRegular, Arial, sans-serif', fontWeight: 'bold' }}>댓글</Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="댓글을 작성하세요"
          value={newComment}
          onChange={handleCommentChange}
          sx={{ backgroundColor: '#FFFFFF', borderRadius: '8px', mt: 2 }}
        />
        <Button
          variant="contained"
          onClick={handleCommentSubmit}
          sx={{ backgroundColor: '#FFEB3B', color: '#3B1E1E', '&:hover': { backgroundColor: '#FDD835' }, mt: 2 }}
        >
          등록
        </Button>
        {post.comments.map(comment => (
          <Box key={comment.id} sx={{ mt: 4, ml: 2 }}>
            <Typography variant="body1" sx={{ fontFamily: 'KakaoRegular, Arial, sans-serif', fontWeight: 'bold' }}>
              {comment.user}
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'KakaoRegular, Arial, sans-serif' }}>
              {comment.content}
            </Typography>
            <Box mt={2}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="대댓글을 작성하세요"
                value={replyComment[comment.id] || ''}
                onChange={(e) => handleReplyChange(e, comment.id)}
                sx={{ backgroundColor: '#FFFFFF', borderRadius: '8px' }}
              />
              <Button
                variant="contained"
                onClick={() => handleReplySubmit(comment.id)}
                sx={{ backgroundColor: '#FFEB3B', color: '#3B1E1E', '&:hover': { backgroundColor: '#FDD835' }, mt: 2 }}
              >
                등록
              </Button>
            </Box>
            {comment.replies && comment.replies.map(reply => (
              <Box key={reply.id} sx={{ mt: 2, ml: 4 }}>
                <Typography variant="body1" sx={{ fontFamily: 'KakaoRegular, Arial, sans-serif', fontWeight: 'bold' }}>
                  {reply.user}
                </Typography>
                <Typography variant="body2" sx={{ fontFamily: 'KakaoRegular, Arial, sans-serif' }}>
                  {reply.content}
                </Typography>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default FreeBoardDetailPage;
