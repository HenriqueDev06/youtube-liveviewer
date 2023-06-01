import React, { useState, useEffect } from "react";

import { Container } from "./styles";
import UsersList from "../../components/usersList";
import LiveViewer from "../../components/liveViewer";

const LivePage = () => {
  return (
    <Container>
      <UsersList />
      <LiveViewer />
    </Container>
  );
};
export default LivePage;
