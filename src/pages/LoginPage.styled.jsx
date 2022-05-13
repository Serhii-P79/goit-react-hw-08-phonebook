import styled from 'styled-components';

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  h1 {
    margin-bottom: 25px;
  }

  .container {
    width: 400px;
  }

  form {
    display: flex;
    flex-direction: column;
    > :not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;
