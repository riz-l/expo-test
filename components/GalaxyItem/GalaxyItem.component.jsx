// Import: Dependencies
import React from "react";
import { ImageBackground, Text, View } from "react-native";

// Import: Styles
import { styles } from "./GalaxyItem.styles";

// Import: Components
import { StyledButton } from "../index";

// Component: GalaxyItem
export default function GalaxyItem({ headline, subtitle, subtitleCTA, image }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.headline}>{headline}</Text>
        <Text style={styles.subtitle}>
          {subtitle} <Text style={styles.subtitleCTA}>{subtitleCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
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
    </View>
  );
}
