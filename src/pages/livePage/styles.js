import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  width: 100%;
  height: 100vh;
  grid-template-columns: minmax(200px, 300px) 1.6fr;
  display: grid;

  @media (max-width: 986px) {
    grid-template-columns: none;
    grid-template-rows: minmax(100px, 180px) 1.6fr;
  }
`;
