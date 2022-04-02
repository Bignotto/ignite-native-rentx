import React from "react";
import { useWindowDimensions, StatusBar } from "react-native";
import { Container, Content, Message, Title } from "./styles";

import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";
import { Button } from "../../components/Button";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

export function SchedullingComplete() {
  const { width } = useWindowDimensions();
  const theme = useTheme();
  const navigation = useNavigation<any>();

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <LogoSvg width={width} />
      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro alugado!</Title>
        <Message>
          Agora você só precisa ir{`\n`} até uma concesscionárioa RENTX{`\n`}{" "}
          pegar seu automóvel.
        </Message>
        <Button
          color={theme.colors.shape_dark}
          title="Ok"
          onPress={() => navigation.popToTop()}
        />
      </Content>
    </Container>
  );
}
