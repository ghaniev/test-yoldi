import React from "react";
import { StyleSheet, Text } from "react-native";
import { ListItem, Badge } from "react-native-elements";

export const DrawerCustomNavigationList = () => {
  const drawerItems = [
    {
      screen: "Поиск",
      notificationCount: 0,
      //navigation:  todo navigate
    },
    {
      screen: "Видео-чат",
      notificationCount: 0,
    },
    {
      screen: "Контакты",
      notificationCount: 8,
    },
    {
      screen: "Чаты",
      notificationCount: 12,
    },
    {
      screen: "Помощь",
      notificationCount: 0,
    },
    {
      screen: "О проекте",
      notificationCount: 0,
    },
  ];
  return (
    <>
      {drawerItems.map((item, index) => (
        <ListItem
          key={index}
          containerStyle={{
            ...styles.itemContainer,
            borderTopWidth: index !== 0 ? 1 : 0,
          }}
        >
          <ListItem.Content style={styles.itemContent}>
            <ListItem.Title style={styles.title}>{item.screen}</ListItem.Title>
            {item.notificationCount > 0 && (
              <Badge
                value={
                  <Text style={styles.badgeText}>{item.notificationCount}</Text>
                }
                badgeStyle={styles.badgeView}
              />
            )}
          </ListItem.Content>
          <ListItem.Chevron color="#262A33" />
        </ListItem>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "transparent",
    height: 65,
    borderColor: "rgba(21, 21, 23, 0.05)",
  },
  itemContent: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  title: {
    fontFamily: "DinDisplayProRegular",
    fontSize: 16,
    color: "#262A33",
    lineHeight: 20,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  badgeText: {
    fontFamily: "DinDisplayProMedium",
    fontSize: 10,
    color: "#D2B47D",
    lineHeight: 12,
    letterSpacing: 0.6,
    margin: 6,
  },
  badgeView: {
    marginLeft: 16,
    height: 24,
    borderRadius: 4,
    backgroundColor: "#151517",
    opacity: 0.8,
    borderColor: "transparent",
  },
});
