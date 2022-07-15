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
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

interface Props extends RectButtonProps {
  data: CarDTO;
}

export function Car({ data, ...rest }: Props) {
  const MotorIcon = getAccessoryIcon(data.fuel_type);
  return (
    <Container {...rest}>
      <InfoContainer>
        <CarInfoWrapper>
          <CarBrand>{data.brand}</CarBrand>
          <CarName>{data.name}</CarName>
        </CarInfoWrapper>
        <DailyRateWrapper>
          <DailyRateTextWrapper>
            <RateText>{data.period}</RateText>
            <RateValue>{`R$ ${data.price}`}</RateValue>
          </DailyRateTextWrapper>
          <MotorIcon />
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
