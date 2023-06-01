import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  z-index: 2023;
  box-shadow: rgba(0, 0, 0, 0.3) -3px 0px 25px 0px;

  @media (max-width: 986px) {
    justify-content: space-around;
  }
`;

export const UserContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-top: 4px;
  min-width: 100px;

  img {
    height: 55px;
    width: 55px;

    object-fit: contain;
    border-radius: 50%;

    border: 2px solid #eb402d;
    border-style: ${(props) => (props.inLive ? "solid" : "none")};

    padding: 2px;
  }

  .info-user {
    height: 100%;

    display: flex;
    align-content: center;
    justify-content: center;

    flex-direction: column;

    margin: 0 10px;
    p {
      font-size: 18px;
      line-height: 18px;
    }
    span {
      font-size: 12px;
      line-height: 12px;
      color: #eb402d;
    }
  }
`;

export const UsersListView = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  @media (max-width: 986px) {
    width: 100vw;

    flex-direction: row;
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: flex-start;
    overflow-y: hidden;
    overflow-x: auto;
    padding-bottom: 8px;

    .user_card {
      margin: 0;
      flex-direction: column;

      p,
      span {
        text-align: center;
      }
    }
  }
`;
