import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StackNavigation } from "./StackNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerCustom } from "../drawer/DrawerCustom";

export const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={{ width: "100%", backgroundColor: "transparent" }}
        drawerContent={(navigation) => <DrawerCustom {...navigation} />}
        // screenOptions={{ unmountOnBlur: true }}
      >
        <Drawer.Screen name="Home" component={StackNavigation} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
