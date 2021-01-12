// Import: Dependencies
import React from "react";
import { ImageBackground, Text, View } from "react-native";

// Import: Styles
import { styles } from "./GalaxyItem.styles";

// Import: Components
import { StyledButton } from "../index";

// Component: GalaxyItem
export default function GalaxyItem() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/wall-3.jpg")}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.headline}>Andromeda</Text>
        <Text style={styles.subtitle}>4 billion years until we meet...</Text>
      </View>

      <StyledButton
        type="primary"
        content={"Custom Order"}
        onPress={() => {
          console.warn("Custom Order was pressed");
        }}
      />

      <StyledButton
        type="secondary"
        content={"Existing Order"}
        onPress={() => {
          console.warn("Existing Order was pressed");
        }}
      />
    </View>
  );
}
