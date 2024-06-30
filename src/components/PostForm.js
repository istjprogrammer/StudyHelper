import React, { useState } from 'react';
import { TextField, Button, Card, CardContent } from '@mui/material';

const PostForm = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            fullWidth
            margin="normal"
            multiline
          />
          <Button type="submit" color="primary" variant="contained">Add Post</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PostForm;
