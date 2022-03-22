import React from "react";

import {
  Container,
  InfoContainer,
  CarBrand,
  CarName,
  RateText,
  RateValue,
  CarInfoWrapper,
  DailyRateWrapper,
  DailyRateTextWrapper,
  CarImage,
} from "./styles";

import EnergyLogo from "../../assets/energy.svg";

interface CarData {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
}

interface Props {
  data: CarData;
}

export function Car({ data }: Props) {
  return (
    <Container>
      <InfoContainer>
        <CarInfoWrapper>
          <CarBrand>{data.brand}</CarBrand>
          <CarName>{data.name}</CarName>
        </CarInfoWrapper>
        <DailyRateWrapper>
          <DailyRateTextWrapper>
            <RateText>{data.rent.period}</RateText>
            <RateValue>{data.rent.price}</RateValue>
          </DailyRateTextWrapper>
          <EnergyLogo width={25} height={25} />
        </DailyRateWrapper>
      </InfoContainer>
      <CarImage
        source={{
          uri: data.thumbnail,
        }}
      />
    </Container>
  );
}
