import React from "react";
import { SvgProps } from "react-native-svg";

interface AcessoryProps {
  name: string;
  icon: React.FC<SvgProps>;
}

import { Container, TextInfo } from "./styles";
export function Accessory({ name, icon: Icon }: AcessoryProps) {
  return (
    <Container>
      <Icon />
      <TextInfo>{name}</TextInfo>
    </Container>
  );
}
