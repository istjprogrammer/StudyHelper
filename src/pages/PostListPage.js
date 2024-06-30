import React, { useState } from 'react';
import { Container } from '@mui/material';
import PostList from '../components/PostList';

const PostListPage = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
  ]);

  return (
    <Container>
      <PostList posts={posts} />
    </Container>
  );
};

export default PostListPage;
