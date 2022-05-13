import styled from 'styled-components';

export const CssApp = {
  Contener: styled.div`
    padding: 25px;

    > :not(:last-child) {
      margin-bottom: 15px;
    }
  `,
  SubHeder: styled.h2`
    display: inline-block;
    margin-right: 15px;
  `,
};
