import React from "react";
import { Text } from "react-native";
import { BackButton } from "../../components/BackButton";

import { Container, Header } from "./styles";

export function CarDetail() {
  return (
    <Container>
      <Header>
        <BackButton />
      </Header>
    </Container>
  );
}
