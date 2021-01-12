// Import: Dependencies
import React from "react";
import { Pressable, View, Text } from "react-native";

// Import: Styles
import { styles } from "./StyledButton.styles";

// Component: StyledButton
export default function StyledButton({ content, onPress, type }) {
  const backgroundColor = type === "primary" ? "#ffffff" : "#2a2a2e";
  const textColor = type === "primary" ? "#2a2a2e" : "#ffffff";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
}
