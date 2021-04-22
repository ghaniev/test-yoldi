import React, { useLayoutEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet, Dimensions, Image, Pressable } from "react-native";
import { BlurView } from "expo-blur";
import { HomeContactItem } from "./HomeContactItem";
import SwitchSelector from "react-native-switch-selector";

const height = Dimensions.get("window").height;

export const HomeScreen = ({ navigation }: { navigation: any }) => {
  const options = [
    { label: "Мои друзья", value: "1" },
    { label: "Заявки в друзья", value: "2" },
  ];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeftContainerStyle: {
        paddingHorizontal: 18,
      },
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.openDrawer()}
          style={styles.headerIconContainer}
        >
          <Image source={require("../../assets/images/icon.png")} />
        </Pressable>
      ),
      headerTitle: "контакты",
      headerTitleStyle: styles.headerTitleStyle,
      headerBackground: () => (
        <BlurView
          tint="light"
          intensity={10}
          style={[StyleSheet.absoluteFill, styles.header]}
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#262C3A", "#161A23"]}
        style={styles.gradientBackground}
        start={[1, 1]}
        end={[0, 0]}
      />
      <SwitchSelector
        options={options}
        initial={0}
        buttonColor="rgba(255, 255, 255, 0.1)"
        backgroundColor="rgba(255, 255, 255, 0.1)"
        borderRadius={8}
        textStyle={styles.inActiveButtonText}
        selectedTextStyle={styles.activeButtonText}
        buttonMargin={2}
        height={35}
        style={styles.buttonContainer}
        onPress={(value) => console.log(`Selected : ${value}`)}
      />

      <View style={styles.contactItem}>
        <HomeContactItem />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    backgroundColor: "#161A23",
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    overflow: "hidden",
  },
  headerTitleStyle: {
    fontFamily: "DinDisplayProRegular",
    fontSize: 16,
    color: "white",
    lineHeight: 20,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  headerIconContainer: {
    height: 40,
    width: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
  },
  gradientBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height,
  },
  buttonContainer: {
    width: 382,
    marginHorizontal: 16,
    marginTop: 115,
    overflow: "hidden",
    borderRadius: 8,
  },

  activeButtonText: {
    fontFamily: "DinDisplayProRegular",
    fontSize: 16,
    color: "white",
    lineHeight: 16,
    letterSpacing: 0.6,
  },
  inActiveButtonText: {
    fontFamily: "DinDisplayProRegular",
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.4)",
    opacity: 0.4,
    lineHeight: 16,
    letterSpacing: 0.6,
  },
  contactItem: {
    marginTop: 20,
    marginHorizontal: 16,
    height: 78,
    width: 382,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    // overflow: "hidden",
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
  },
});
