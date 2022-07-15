import React, { useEffect } from "react";
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { Container } from "./styles";
import BrandSvg from "../../assets/brand.svg";
import LogoSvg from "../../assets/logo.svg";
import { useNavigation } from "@react-navigation/native";

export default function Splash() {
  const splashAnimation = useSharedValue(0);

  const navigation = useNavigation();

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        splashAnimation.value,
        [0, 25, 50, 75, 100],
        [1, 1, 1, 0.3, 0],
        Extrapolate.CLAMP
      ),
    };
  });
  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        splashAnimation.value,
        [0, 25, 50, 75, 100],
        [0, 0.3, 1, 1, 1],
        Extrapolate.CLAMP
      ),
    };
  });

  function startApp() {
    navigation.navigate("SignIn" as never);
  }

  useEffect(() => {
    splashAnimation.value = withTiming(100, { duration: 2000 }, () => {
      "worklet";
      runOnJS(startApp)();
    });
  }, []);

  return (
    <Container>
      <Animated.View style={[brandStyle, { position: "absolute" }]}>
        <BrandSvg width={80} height={50} />
      </Animated.View>
      <Animated.View style={[logoStyle, { position: "absolute" }]}>
        <LogoSvg width={180} height={20} />
      </Animated.View>
    </Container>
  );
}
