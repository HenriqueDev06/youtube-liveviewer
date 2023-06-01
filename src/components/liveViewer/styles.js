import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #dbdbdb;

  iframe {
    width: 100%;
    height: 100%;
  }

  .dont_select {
    width: 90%;
    height: 90%;

    border: 1px solid #ababab;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    border-radius: 5px;

    span {
      margin-top: 10px;
    }
  }
`;
