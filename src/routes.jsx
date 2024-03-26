import RootLayout from './layouts/RootLayout';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WelcomePage from './pages/WelcomePage';
import MessagesPage from './pages/MessagesPage';
import ProfilePage from './pages/ProfilePage';
import FriendsPage from './pages/FriendsPage';
import UserSearchPage from './pages/UserSearchPage';
import LogoutPage from './pages/LogoutPage';
import AuthGuard from './components/AuthGuard/AuthGuard';
import GuestGuard from './components/GuestGuard/GuestGuard';

export const routes = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <AuthGuard />,
        children: [
          {
            path: 'messages',
            element: <MessagesPage />,
          },
          {
            path: 'profile',
            element: <ProfilePage />,
          },
          {
            path: 'friends',
            element: <FriendsPage />,
          },
          {
            path: 'search',
            element: <UserSearchPage />,
          },
          {
            path: 'logout',
            element: <LogoutPage />,
          },
        ],
      },
      {
        path: '',
        element: <GuestGuard />,
        children: [
          {
            index: true,
            element: <WelcomePage />,
          },
          {
            path: 'register',
            element: <RegisterPage />,
          },
          {
            path: 'login',
            element: <LoginPage />,
          },
        ],
      },
    ],
  },
];
