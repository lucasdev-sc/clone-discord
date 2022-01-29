import React from "react";

import ServerButton from '../ServerBottom'

import { Container, Separator } from "./styles";

const ServerList: React.FC = () => {
    return(
        <Container>
            <ServerButton isHome />

            <Separator />

            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton mentions={3} />
            <ServerButton mentions={3} />
            <ServerButton hasNotifications />
            <ServerButton />
            <ServerButton mentions={3} />
            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton mentions={3} />
        </Container>
    )
}

export default ServerList