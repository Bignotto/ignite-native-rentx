import React from "react";
import { Acessory } from "../../components/Acessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import SpeedSvg from "../../assets/speed.svg";
import AccelSvg from "../../assets/acceleration.svg";
import ForceSvg from "../../assets/force.svg";
import FuelSvg from "../../assets/gasoline.svg";
import ExchangeSvg from "../../assets/exchange.svg";
import PeopleSvg from "../../assets/people.svg";

import {
  About,
  Brand,
  CarImages,
  Container,
  Content,
  Description,
  Details,
  Header,
  Name,
  Period,
  Price,
  Rent,
  Acessories,
} from "./styles";

export function CarDetail() {
  return (
    <Container>
      <Header>
        <BackButton />
      </Header>
      <CarImages>
        <ImageSlider
          imagesUrl={[
            "https://www.pngmart.com/files/15/Side-View-Red-Ferrari-PNG-Image.png",
          ]}
        />
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>Ferrari</Brand>
            <Name>F50</Name>
          </Description>
          <Rent>
            <Period>Diária</Period>
            <Price>R$ 580,00</Price>
          </Rent>
        </Details>

        <Acessories>
          <Acessory name="380 km/h" icon={SpeedSvg} />
          <Acessory name="3.2s" icon={AccelSvg} />
          <Acessory name="800 hp" icon={ForceSvg} />
          <Acessory name="Gasolina" icon={FuelSvg} />
          <Acessory name="Auto" icon={ExchangeSvg} />
          <Acessory name="2 pessoas" icon={PeopleSvg} />
        </Acessories>

        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
          para quem gosta de acelerar.
        </About>
      </Content>
    </Container>
  );
}
