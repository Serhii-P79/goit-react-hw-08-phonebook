import { Routes, Route, Link, NavLink } from 'react-router-dom';
import { AuthNav, UserMenu, Navigation } from 'components';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { Header } from './AppBar.styled';

export function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Header>
      {/* <div>App Bar</div> */}
      <Navigation />
      {!isLoggedIn ? <AuthNav /> : <UserMenu />}
    </Header>
  );
}
