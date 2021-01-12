// Import: Dependencies
import React from "react";
import { Text, View } from "react-native";

// Import: Styles
import { styles } from "./Header.styles";

// Component: Header
export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>GALAXY</Text>
    </View>
  );
}
