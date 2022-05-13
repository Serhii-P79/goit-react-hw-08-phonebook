import { Routes, Route, Link, NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { UserMenu, AuthNav, AppBar } from 'components';
import { Main } from './Layout.styled';

export function Layout() {
  return (
    <>
      <AppBar />
      <Main>
        <Outlet />
        <Toaster position="top-center" reverseOrder={false} />
      </Main>
    </>
  );
}
