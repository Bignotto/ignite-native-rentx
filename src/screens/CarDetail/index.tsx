import React from "react";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import { CarImages, Container, Header } from "./styles";

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
    </Container>
  );
}
