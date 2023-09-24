import { LoginForm } from '../../components/LoginForm/LoginForm';
import { Container, Header } from './login.styled';

export const Login = () => {
  return (
    <Container>
      <Header>Login</Header>
      <LoginForm />
    </Container>
  );
};
