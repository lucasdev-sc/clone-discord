import React, {useRef, useEffect} from "react"

import ChannelMessage, { Mention } from '../ChannelMessage'

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messagesRef.current;

    if(div){
      div.scrollTop = div.scrollHeight
    }
  },[messagesRef])

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
          author="Lucas Cauã"
          date="13/04/2022"
          content="Hoje é meu aniversário!"
        />
        <ChannelMessage
          author="Lucas Cauã"
          date="13/04/2022"
          content="Hoje é meu aniversário!"
        />
        <ChannelMessage
          author="Lucas Cauã"
          date="13/04/2022"
          content="Hoje é meu aniversário!"
        />
        <ChannelMessage
          author="Lucas Cauã"
          date="13/04/2022"
          content="Hoje é meu aniversário!"
        />
        <ChannelMessage
          author="Lucas Cauã"
          date="13/04/2022"
          content="Hoje é meu aniversário!"
        />
        <ChannelMessage
          author="Lucas Cauã"
          date="13/04/2022"
          content="Hoje é meu aniversário!"
        />
        <ChannelMessage
          author="Lucas Cauã"
          date="13/04/2022"
          content="Hoje é meu aniversário!"
        />
        <ChannelMessage
          author="Lucas Cauã"
          date="13/04/2022"
          content="Hoje é meu aniversário!"
        />
        <ChannelMessage
          author="Lucas Cauã"
          date="13/04/2022"
          content="Hoje é meu aniversário!"
        />
        <ChannelMessage
          author="Lucas Cauã"
          date="13/04/2022"
          content="Hoje é meu aniversário!"
        />
        

        <ChannelMessage
          author="!Peka"
          date="13/04/2022"
          content={
            <>
              <Mention>!peka</Mention>, bora jogar um lolzinho?
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
