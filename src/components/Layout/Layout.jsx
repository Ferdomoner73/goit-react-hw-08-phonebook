import { Outlet } from 'react-router-dom';
import {
  NavLinkItem,
  NavLinkList,
  Link,
  UserBar,
  Header,
  Container,
} from './layout.styled';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { UserMenu } from '../UserMenu/UserMenu';

export const Layout = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <Header>
        <NavLinkList>
          <NavLinkItem>
            <Link to="/">Home</Link>
          </NavLinkItem>
          <NavLinkItem>
            <Link to="/contacts">Contacts</Link>
          </NavLinkItem>
        </NavLinkList>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <UserBar>
            <NavLinkItem>
              <Link to="/login">Login</Link>
            </NavLinkItem>
            <NavLinkItem>
              <Link to="/registration">Registration</Link>
            </NavLinkItem>
          </UserBar>
        )}
      </Header>
      <main>
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};
