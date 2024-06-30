import React, { useState } from 'react';
import { Container } from '@mui/material';
import PostForm from '../components/PostForm';

const PostFormPage = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, { ...post, id: posts.length + 1 }]);
  };

  return (
    <Container>
      <PostForm addPost={addPost} />
    </Container>
  );
};

export default PostFormPage;
