import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../home/HomeScreen";

export const StackNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
