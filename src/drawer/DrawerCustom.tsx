import React from "react";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import { DrawerCustomNavigationList } from "./DrawerCustomNavigationList";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";

const height = Dimensions.get("window").height;

export const DrawerCustom = ({ navigation }: { navigation: any }) => {
  return (
    <BlurView tint="dark" intensity={100} style={styles.container}>
      <View style={styles.contentContainer}>
        <LinearGradient
          colors={["#EDCB8E", "#D2B47D"]}
          style={styles.gradientBackground}
          start={[0.0, 0.5]}
          end={[1.0, 0.5]}
          locations={[0.0, 1.0]}
        />
        <View style={{ marginTop: 110, alignItems: "center" }}>
          <Image
            source={require("../../assets/images/picture.png")}
            style={styles.avatar}
          />
          <Text style={{ ...styles.title, marginTop: 15 }}>алексей</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={styles.subtitle}>28 лет </Text>
            <View style={styles.subtitlePoint} />
            <Text style={styles.subtitle}>Москва</Text>
            <Image
              source={require("../../assets/images/flag.png")}
              style={styles.flag}
            />
          </View>
        </View>
        <View style={styles.navigationListContainer}>
          <DrawerCustomNavigationList />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            type="solid"
            title="Получить vip-статус"
            titleStyle={styles.buttonTitle}
            buttonStyle={styles.button}
          />

          <Text
            style={{ ...styles.buttonTitle, color: "#262A33", marginTop: 33 }}
          >
            Выйти
          </Text>
        </View>
      </View>
      <Pressable
        style={styles.closeDrawer}
        onPress={() => navigation.closeDrawer()}
      >
        <MaterialIcons name="keyboard-backspace" size={20} color="white" />
      </Pressable>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
  },
  contentContainer: {
    height,
    width: "85%",
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    overflow: "hidden",
  },
  gradientBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height,
  },
  avatar: {
    borderRadius: 50,
    height: 80,
    width: 80,
  },
  title: {
    fontFamily: "DinDisplayProRegular",
    fontSize: 16,
    color: "#262A33",
    lineHeight: 20,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  subtitle: {
    fontFamily: "DinDisplayProRegular",
    fontSize: 14,
    color: "#262A33",
    lineHeight: 16.8,
    letterSpacing: 0.6,
  },
  subtitlePoint: {
    marginHorizontal: 8,
    width: 5,
    height: 5,
    backgroundColor: "#151517",
    opacity: 0.2,
    borderRadius: 50,
  },
  flag: {
    borderRadius: 50,
    marginLeft: 8,
  },
  navigationListContainer: {
    marginTop: 90,
    marginHorizontal: 32,
  },
  closeDrawer: {
    height: 30,
    width: 30,
    justifyContent: "center",
    marginHorizontal: 15,
  },
  buttonContainer: {
    marginTop: 16,
    marginHorizontal: 32,
  },
  buttonTitle: {
    fontFamily: "DinDisplayProRegular",
    fontSize: 16,
    color: "white",
    lineHeight: 20,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    textAlign: "center",
  },
  button: {
    height: 51,
    borderRadius: 8,
    backgroundColor: "#262A33",
  },
});
