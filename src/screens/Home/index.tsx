import React from "react";
import { StatusBar } from "react-native";

import { Container, Header, CarCount, HeaderContent } from "./styles";
import Logo from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";

export function Home() {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <CarCount>12 carros disponíveis</CarCount>
        </HeaderContent>
      </Header>
    </Container>
  );
}
