import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const HomeContactItem = () => {
  return (
    <>
      <Image
        source={require("../../assets/images/picture.png")}
        style={{ borderRadius: 50, marginLeft: 14 }}
      />
      <View style={{ flexDirection: "column", marginLeft: 16 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.contactInfoText}>Алексей, 28</Text>
          <View style={styles.contactPoint} />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Text style={styles.contactLocationText}>Москва</Text>
          <Image
            source={require("../../assets/images/flag.png")}
            style={{ borderRadius: 50, marginLeft: 8 }}
          />
        </View>
      </View>
      <View
        style={{ marginLeft: "auto", marginRight: 16, flexDirection: "row" }}
      >
        <Ionicons name="videocam-outline" color="white" size={22} />
        <Ionicons
          name="chatbox-outline"
          color="white"
          size={22}
          style={{ marginLeft: 19 }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contactInfoText: {
    fontFamily: "DinDisplayProRegular",
    fontSize: 16,
    color: "white",
    opacity: 1,
    lineHeight: 19.2,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  contactPoint: {
    backgroundColor: "rgba(36, 199, 121, 1)",
    height: 5,
    width: 5,
    borderRadius: 10,
    marginLeft: 8,
  },
  contactLocationText: {
    fontFamily: "DinDisplayProRegular",
    fontSize: 14,
    color: "white",
    opacity: 0.8,
    lineHeight: 17,
    letterSpacing: 0.6,
  },
});
