import React from "react";
import { StatusBar } from "react-native";

import {
  Container,
  Header,
  CarCount,
  HeaderContent,
  CarAvailables,
} from "./styles";
import Logo from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";
import { Car } from "../../components/Car";

export interface CarData {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
}

export function Home() {
  const sampleCars: CarData[] = [
    {
      brand: "audi",
      name: "RS 5 Coupé",
      rent: {
        period: "diária",
        price: 120,
      },
      thumbnail:
        "https://www.webmotors.com.br/imagens/prod/348415/AUDI_RS5_2.9_V6_TFSI_GASOLINA_SPORTBACK_QUATTRO_STRONIC_3484151711005714.png?s=fill&w=260&h=150&q=70&t=true",
    },
    {
      brand: "prosche",
      name: "Panamera",
      rent: {
        period: "diária",
        price: 340,
      },
      thumbnail:
        "https://e7.pngegg.com/pngimages/464/370/png-clipart-porsche-porsche.png",
    },
  ];

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
          <CarCount>{sampleCars.length} carros disponíveis</CarCount>
        </HeaderContent>
      </Header>
      <CarAvailables
        data={sampleCars}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <Car data={item} />}
      />
    </Container>
  );
}
