import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ChatIcon from '@mui/icons-material/Chat';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const features = [
  { icon: <EditIcon fontSize="large" />, title: '수업노트', description: '강의 내용을 기록해보세요.' },
  { icon: <ChatIcon fontSize="large" />, title: '공지사항', description: '학교 공지사항을 알려드립니다.' },
  { icon: <AccountCircleIcon fontSize="large" />, title: '자유게시판', description: '자유롭게 소통해보세요.' },
];

const FeaturesSection = () => {
  return (
    <Box
      sx={{
        padding: '50px 0',
      }}
    >
      <Container maxWidth="lg">
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom 
          align="center"
          sx={{ fontFamily: 'KakaoRegular, Arial, sans-serif', fontWeight: 'bold' }}
        >
          기능소개<br/><br/>
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box sx={{ textAlign: 'center' }}>
                {feature.icon}
                <Typography 
                  variant="h6" 
                  component="h3" 
                  gutterBottom
                  sx={{ fontFamily: 'KakaoRegular, Arial, sans-serif', fontWeight: 'bold' }}
                >
                  {feature.title}
                </Typography>
                <Typography 
                  variant="body1"
                  sx={{ fontFamily: 'KakaoRegular, Arial, sans-serif', fontWeight: 'bold' }}
                >
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
