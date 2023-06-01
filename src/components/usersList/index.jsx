import React, { useEffect, useState, useContext } from "react";
import { Container, UsersListView, UserContainer } from "./styles";

import { users } from "../../mocks/users";
import useLiveStatus from "../../hooks/useLiveStatus";

import { LiveContext } from "../../App";

const UserCard = ({ user }) => {
  const { updateLiveId } = useContext(LiveContext);

  const handleUserCardClick = () => {
    updateLiveId(user.liveID);
  };
  return (
    <UserContainer
      className="user_card"
      inLive={user.inLive}
      onClick={handleUserCardClick}
    >
      <img src={user.image_url} />
      <div className="info-user">
        <p>{user.username}</p>
        {user.inLive && <span>Ao vivo</span>}
      </div>
    </UserContainer>
  );
};

const UsersList = () => {
  const [usersData, setUsersData] = useState(users);

  // Limite de Cotas 10000 por dia

  // useEffect(() => {
  //   const fetchLiveStatus = async () => {
  //     const updatedUsers = await Promise.all(
  //       usersData.map(async (user) => {
  //         const isLive = await useLiveStatus(user.username);
  //         return { ...user, inLive: isLive.live, liveID: isLive.liveId };
  //       })
  //     );

  //     console.log(usersData);
  //     setUsersData(updatedUsers);
  //   };

  //   fetchLiveStatus();
  // }, []);

  return (
    <Container>
      {/* <p>Usuarios:</p> */}
      <UsersListView>
        {usersData.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </UsersListView>
    </Container>
  );
};
export default UsersList;
