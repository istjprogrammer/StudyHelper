# 스터디헬퍼 (Study Helper)

스터디헬퍼는 학생들이 학습을 더 효율적으로 관리하고, 소통할 수 있도록 도와주는 웹 애플리케이션입니다. 공지사항, 수업 노트, 자유게시판, 잡담게시판 등의 기능을 통해 사용자들이 다양한 정보와 의견을 나눌 수 있습니다.

## 주요 기능

- **공지사항**: 학교 공지사항을 한 눈에 확인할 수 있습니다.
- **수업 노트**: 강의 내용을 기록하고, 관리할 수 있습니다.
- **자유게시판**: 자유롭게 의견을 나누고, 소통할 수 있습니다.

## 기술 스택

- **프론트엔드**: React, Material-UI
- **백엔드**: (필요 시 백엔드 기술 스택을 추가하세요)
- **상태 관리**: Context API
- **라우팅**: React Router
- **아이콘**: Material-UI Icons
- **스타일링**: Material-UI, 커스텀 CSS

## 프로젝트 구조

src/
│
├── components/
│ ├── FeaturesSection.js # 기능 소개 섹션
│ ├── ...
│
├── context/
│ └── AuthContext.js # 인증 컨텍스트
│
├── pages/
│ ├── MainPage.js # 메인 페이지
│ ├── NoticeBoardPage.js # 공지사항 페이지
│ ├── LectureBoardPage.js # 수업 노트 페이지
│ ├── ChatBoardPage.js # 잡담 게시판 페이지
│ ├── LoginPage.js # 로그인 페이지
│ ├── RegisterPage.js # 회원가입 페이지
│ └── ...
│
├── App.js # 메인 앱 컴포넌트
├── index.js # 엔트리 포인트

## 기술 스택

- **프론트엔드**: React, Material-UI
- **상태 관리**: Context API
- **라우팅**: React Router
- **아이콘**: Material-UI Icons
- **스타일링**: Material-UI, 커스텀 CSS