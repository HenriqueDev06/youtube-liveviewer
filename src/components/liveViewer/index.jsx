import React, { useContext } from "react";
import { Container } from "./styles";

import { AiOutlineSelect } from "react-icons/ai";
import { LiveContext } from "../../App";

const LiveViewer = () => {
  const { liveId } = useContext(LiveContext);

  return (
    <Container>
      {liveId == "null" ? (
        <div className="dont_select">
          <AiOutlineSelect size={50} />
          <span>Selecione uma live a esquerda</span>
        </div>
      ) : (
        <iframe
          width="1450"
          height="562"
          src={"https://www.youtube.com/embed/" + liveId}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      )}
    </Container>
  );
};
export default LiveViewer;
