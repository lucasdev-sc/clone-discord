import React from "react";

import { Container, HashtagIcon, Title, Description, Separator } from "./styles";

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />

      <Title>chat-livre</Title>

      <Separator />

      <Description>Canal aberto para conversas</Description>
    </Container>
  );
};

export default ChannelInfo;
