import React from "react";
import Bullet from "./Bullet";
import { Container } from "./styles";

interface IndexIndicatorProps {
  activeIndex: number;
  total: number;
}

export default function IndexIndicator({
  activeIndex,
  total,
}: IndexIndicatorProps) {
  return (
    <Container>
      {Array.from({ length: total }, (_, index) => index).map((_, index) => {
        return <Bullet key={index} active={index === activeIndex} />;
      })}
    </Container>
  );
}
