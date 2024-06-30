import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <Card key={post.id} style={{ marginBottom: '1rem' }}>
          <CardContent>
            <Typography variant="h5">{post.title}</Typography>
            <Typography variant="body1">{post.content}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PostList;
