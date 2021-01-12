// Import: Dependencies
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

// Import: Assets
import WallpaperOne from "./assets/images/wall-1.jpg";

// Import: Components
import { GalaxyItem } from "./components";

// Component: App
export default function App() {
  return (
    <View style={styles.container}>
      <GalaxyItem
        headline={"Andromeda"}
        subtitle={"4 billion years"}
        subtitleCTA={"until we meet..."}
        image={WallpaperOne}
      />

      <StatusBar backgroundColor="transparent" style="light" />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
});
