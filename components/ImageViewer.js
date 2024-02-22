import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function ImageViewer({ placeholderImageSource, selectedImage }) {
  const imageSource = selectedImage
    ? { uri: selectedImage }
    : placeholderImageSource;
  return (
    <View>
      <Image source={imageSource} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 340,
    height: 660,
    borderRadius: 15,
  },
});
