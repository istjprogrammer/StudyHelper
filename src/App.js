import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import MainPage from './pages/MainPage';
import PostListPage from './pages/PostListPage';
import PostFormPage from './pages/PostFormPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import NoticeBoardPage from './pages/NoticeBoardPage';
import ForgotUsernamePage from './pages/ForgotUsernamePage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import { AuthProvider, useAuth } from './context/AuthContext';
import NoteBoardPage from './pages/NoteBoardPage';
import FreeBoardPage from './pages/FreeBoardPage';

const Navigation = () => {
  const { user } = useAuth();

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          style={{ flexGrow: 1, fontFamily: 'KakaoRegular, Arial, sans-serif', fontWeight: 'bold', textDecoration: 'none', color: 'inherit' }}
        >
          스터디헬퍼
        </Typography>
        <Button color="inherit" component={Link} to="/notices" style={{ fontFamily: 'KakaoRegular, Arial, sans-serif' , fontWeight: 'bold'}}>공지사항</Button>
        <Button color="inherit" component={Link} to="/noteboard" style={{ fontFamily: 'KakaoRegular, Arial, sans-serif', fontWeight: 'bold' }}>수업노트</Button>
        <Button color="inherit" component={Link} to="/freeboard" style={{ fontFamily: 'KakaoRegular, Arial, sans-serif', fontWeight: 'bold' }}>잡담게시판</Button>
        {user ? (
          <Button color="inherit" component={Link} to="/profile" style={{ fontFamily: 'KakaoRegular, Arial, sans-serif', fontWeight: 'bold'}}>Profile</Button>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/login" style={{ fontFamily: 'KakaoRegular, Arial, sans-serif', fontWeight: 'bold'}}>로그인</Button>
            <Button color="inherit" component={Link} to="/register" style={{ fontFamily: 'KakaoRegular, Arial, sans-serif', fontWeight: 'bold'}}>회원가입</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/noteboard" element={<NoteBoardPage />} />
          <Route path="/notices" element={<NoticeBoardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/forgot-username" element={<ForgotUsernamePage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/freeboard" element={<FreeBoardPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
