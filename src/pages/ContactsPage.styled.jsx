import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  > :first-child {
    margin-bottom: 25px;
    h1 {
      margin-bottom: 25px;
    }
  }
  > :last-child {
    align-self: self-start;
    h2 {
      display: inline-block;
      margin-right: 15px;
    }
  }
  .filter {
    margin: 20px 0 25px 0;
  }
`;
