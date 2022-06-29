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
import { RectButtonProps } from "react-native-gesture-handler";
import { CarDTO } from "../../dtos/CarDTO";

interface Props extends RectButtonProps {
  data: CarDTO;
}

export function Car({ data, ...rest }: Props) {
  return (
    <Container {...rest}>
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
