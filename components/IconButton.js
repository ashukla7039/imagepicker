import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function IconButton({ icon, label, onPress }) {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text style={styles.iconButtonLabel}> {label} </Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  iconButtonLabel: {
    color: "#25292e",
    marginTop: 10,
  },
  iconButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
