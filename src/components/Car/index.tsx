import React from "react";

import {
  Container,
  InfoContainer,
  CarBrand,
  CarName,
  RateText,
  RateValue,
  CarIcon,
} from "./styles";

export function Car() {
  return (
    <Container>
      <InfoContainer>
        <CarBrand>Audi</CarBrand>
        <CarName>RS 5 Coupé</CarName>
        <RateText>AO DIA</RateText>
        <RateValue>R$ 120</RateValue>
        <CarIcon />
      </InfoContainer>
    </Container>
  );
}
