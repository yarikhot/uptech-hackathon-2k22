import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  .MuiOutlinedInput-root {
    height: 51px;
    .MuiOutlinedInput-input {
      border-radius: 10px;
      font-family: Plus Jakarta Sans;
      font-weight: 400;
      font-size: 15px;
      line-height: 175%;

      &::placeholder {
        font-family: Plus Jakarta Sans;
        font-weight: 400;
        font-size: 15px;
        line-height: 175%;
      }
    }
  }
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 1;
  width: 100%;
  object-fit: cover;
`;
