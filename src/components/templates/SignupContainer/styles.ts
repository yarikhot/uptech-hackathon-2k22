import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  background: linear-gradient(0deg, rgba(106, 90, 255, 0.04), rgba(106, 90, 255, 0.04)), #ffffff;
  min-height: 930px;
  height: 100vh;
  width: 100%;
  justify-content: flex-end;

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
  object-fit: cover;
  width: 100%;
`;
