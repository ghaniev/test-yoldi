import React from "react";
import { useFonts } from "expo-font";
import { DrawerNavigation } from "./src/navigation/DrawerNavigation";

export default function App() {
  const [loaded] = useFonts({
    DinDisplayProRegular: require("./assets/fonts/PFDinDisplayPro-Regular.ttf"),
    DinDisplayProMedium: require("./assets/fonts/PFDinDisplayPro-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return <DrawerNavigation />;
}
